function init_k8s() {
  if [ ! -f .kubeconfig.yml ]; then 
    progress "Creating the k8s cluster"
    terraform init
    terraform apply -var-file=keys/main.tfvars
    terraform output kubeconfig | tr -d '"' | base64 -d > .kubeconfig.yml
    export KUBECONFIG=.kubeconfig.yml
    kubectl create secret tls ssl --cert keys/ssl.crt --key keys/ssl.key
    ok "The k8s cluster is ready"
  else 
    ok "The k8s cluster is ready"
    export KUBECONFIG=.kubeconfig.yml
  fi
}

function init_loadbalancer () {
  SERVICES=$(kubectl get service)
  if echo "$SERVICES" | grep -q "loadbalancer"; then
    ok "The loadbalancer is ready"
  else 
    progress "Creating the loadbalancer ..."
    kubectl apply -f ../../services/loadbalancer.yml
    ok "The loadbalancer is ready"
  fi
}

function init_redis () {
  REDIS_PODS=$(kubectl get pods -l app=redis 2>/dev/null)

  if [ -z "${REDIS_PODS}" ]; then 
    progress "Creating the Redis service"
    kubectl apply -f ../../services/redis.yml
  fi

  REDIS_PODS=$(kubectl get pods -l app=redis 2>/dev/null)

  if [ -z "${REDIS_PODS}" ]; then 
    error "[!] The Redis cluster is not ready yet"
    return
  fi

  REDIS_PODS_STATUS=$(kubectl get pods -l app=redis -o jsonpath='{..status.conditions[?(@.type=="Ready")].status}')
  read -ra _ <<< "$REDIS_PODS_STATUS"
  TOTAL_READY_REDIS_PODS=${#_[@]}

  if [ ! $TOTAL_READY_REDIS_PODS -eq 6 ]; then  
    error "[!] The redis cluster is not ready yet"
    return
  fi

  if [ -z $(kubectl exec -it redis-0 -- redis-cli cluster info | grep cluster_state:ok) ]; then 
    progress "Creating the Redis cluster"

    REDIS_PODS_IPS=$(kubectl get pods -l app=redis -o jsonpath='{range .items[*]}{.status.podIP}{":6379 "}{end}')
    kubectl exec -it redis-0 -- redis-cli --cluster create --cluster-replicas 1 $REDIS_PODS_IPS

    ok "The redis cluster is ready"
  else 
    ok "The redis cluster is ready"
  fi 
}

function is_service_deployed () {
  kubectl get service $1 > /dev/null 2>&1
  return $?
}

function remote_image_exists() {
  docker manifest inspect $1 > /dev/null
  return $?
}

function deploy_service () {
  SERVICE=$1
  IMAGE_ORG=$2
  IMAGE_NAME=$3
  IMAGE_VERSION=$4
  
  SERVICE_CONFIG=`cat "../../services/${SERVICE}.yml" | sed -e "s/{{IMAGE_VERSION}}/$IMAGE_VERSION/g" | sed -e "s/{{IMAGE_ORG}}/$IMAGE_ORG/g" | sed -e "s/{{IMAGE_NAME}}/$IMAGE_NAME/g"`
  SERVICE_PODS=$(kubectl get pods -l app=carmel 2>/dev/null)

  if [ ! -z "${SERVICE_PODS}" ]; then 
    FIRST_POD_NAME=$(kubectl get pods -l app=carmel -o jsonpath='{.items[0].metadata.name}')
    DEPLOYED_IMAGE_VERSION=$(kubectl describe pod $FIRST_POD_NAME | grep ${IMAGE_ORG}/${IMAGE_NAME} | awk '{print $2}' | awk -F: '{print $2}' | xargs)

    if [ "$IMAGE_VERSION" == "$DEPLOYED_IMAGE_VERSION" ]; then 
      error "${SERVICE} constainer version $IMAGE_VERSION is already deployed"
      return
    fi
  fi

  if remote_image_exists "${IMAGE_ORG}/${IMAGE_NAME}:${IMAGE_VERSION}"; then
    progress "Deploying the ${SERVICE} service" 
    echo "$SERVICE_CONFIG" > config-tmp.yml
    kubectl apply -f config-tmp.yml
    rm -rf config-tmp.yml
    ok "The ${SERVICE} service is ready" 
  else 
    error "The ${SERVICE} container version ${IMAGE_ORG}/${IMAGE_NAME}:${IMAGE_VERSION} does not exist"
    return
  fi
}

function public_ip () {
  PUBLIC_IP=$(kubectl get service loadbalancer | awk '{print $4}' | grep -Eo "[0-9\.]+$")
  echo $PUBLIC_IP
}

function debug () {
  kubectl get pods | grep $1 | while read line; do
      ID=$(echo $line | awk -F ' ' '{print $1}')
      STATUS=$(echo $line | awk -F ' ' '{print $3}')
      if [ $STATUS == $2 ]; then 
        kubectl describe pod ${ID}
      fi 
  done  
}

function status () {
    echo
    echo "------------------------- k8s cluster -------------------------"
  if is_service_deployed kubernetes; then 
    kubectl get service kubernetes
    echo
    kubectl get pods
  else 
    error "The k8s cluster does not exist"
  fi 

    echo
    echo "------------------------- loadbalancer -------------------------"
  if is_service_deployed loadbalancer; then 
    kubectl get service loadbalancer
    echo
    PUBLIC_IP=$(public_ip)
    ok "   The Public IP is ${PUBLIC_IP}"
  else 
    error "The loadbalancer does not exist"
  fi 

    echo
    echo "------------------------- redis cluster -------------------------"
  if is_service_deployed redis-service; then 
    kubectl get service redis-service
    echo    
    kubectl exec -it redis-0 -- redis-cli cluster info
  else 
    error "The redis service does not exist"
  fi 
}
