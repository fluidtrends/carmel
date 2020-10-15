import React, { useEffect, useCallback, useState } from 'react'
import { ProductChallengeComponentProps, State } from '../types'
import { Card, Typography, Skeleton, Radio, Tag, Badge, Button, Spin, List, Result, Progress } from 'antd'
import ReactMarkdown from 'react-markdown'
import highlightStyle from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { useRemote, useEvent } from '../hooks'
import { useSelector, useDispatch } from "react-redux"
import { CheckSquareOutlined, BorderOutlined, ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import { replace } from 'connected-react-router'
import strings from '../strings.json'
import { VaultLock } from './VaultLock'
import { TaskTutorial } from './TaskTutorial'
import * as Challenges from './challenges'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

/**
 * 
 * @param props 
 */
export const ProductChallenge: React.FC<ProductChallengeComponentProps> = (props) => {

    const { productDetails } = props
    const listChallengesEvent: any = useEvent() 
    const startChallengeEvent: any = useEvent()
    const validateTaskEvent: any = useEvent()
    const getProgressEvent: any = useEvent()
    const updateProgressEvent: any = useEvent()
    const [working, setWorking] = useState("")
    const [taskStatus, setTaskStatus] = useState<any>()
    const [challenges, setChallenges] = useState([])
    const [progress, setProgress] = useState<any>([])
    const [challenge, setChallenge] = useState<any>()
    const [taskIndex, setTaskIndex] = useState(-1)
    const session = useSelector((state: State) => state.session)
    const [userSession, setUserSession] = useState<any>(session)
    const dispatch = useDispatch()
    const [securityCheck, setSecurityCheck] = useState<any>("")
    const [isLocked, setIsLocked] = useState<boolean|undefined>()

    const refreshProgress = () => {        
        setWorking(strings.loadingProgress)

        getProgressEvent.send({ 
            type: "getProgress", 
            productId: productDetails.id,
            account: userSession.user.account,
            username: userSession.user.username 
        })
    }

    const onSecurityCheck = (done: boolean) => {
        setSecurityCheck(false)
        if (!done) return 
        
        setIsLocked(!isLocked)
    }

    useEffect(() => {
        if ("undefined" === typeof isLocked) return

        if (!userSession.user) {
            return
        }

        refreshProgress()
    }, [isLocked])

    useEffect(() => {
        if (!productDetails) return

        setIsLocked(productDetails.isLocked)
    }, [productDetails])

    useEffect(() => {
        if (!validateTaskEvent.received.id) return
        setWorking("")

        if (validateTaskEvent.received.error) {
            setTaskStatus({ error: validateTaskEvent.receive })
            return
        }

        setTaskStatus({ ok: true })
    }, [validateTaskEvent.received])
       
    useEffect(() => {
        if (!getProgressEvent.received.id) return 
        getProgressEvent.received.progress && setProgress(getProgressEvent.received.progress)
        setWorking("")
    }, [getProgressEvent.received])

    useEffect(() => {
        if (!updateProgressEvent.received.id) return 
        setWorking("")
        refreshProgress()
    }, [updateProgressEvent.received])

    useEffect(() => {
        if (!listChallengesEvent.received.challenges) return 
        setChallenges(listChallengesEvent.received.challenges)
        setWorking("")
    }, [listChallengesEvent.received])

    useEffect(() => {
        if (!startChallengeEvent.received.id) return 
        if (startChallengeEvent.received.error) {
            console.log("!!!OOPS")
            return
        }
        refreshProgress()
    }, [startChallengeEvent.received])

    const onChallengeSelected = (c: any) => () => { 
        setChallenge(c)
    }

    const onChallengesBrowse = () => {
        listChallengesEvent.send({
            type: "listChallenges",
            productId: productDetails.id
        })
    }
 
    const onTaskRetry = () => {
        setTaskStatus("")
    }

    const onTaskNext = () => {
        setWorking(strings.updatingProgress)
        updateProgressEvent.send({
            type: "updateProgress",
            challenge: progress.challenges[0],
            details: {
                ...taskStatus,
                taskIndex
            }
        })
        setTaskStatus("")
        setTaskIndex(-1)
    }

    const onChallengeBrowseBack = () => {
        setChallenge({})
    }

    const onChallengeContinue = (c: any) => {
        const ch = progress.challenges[0]
        setTaskIndex(ch.taskIndex)
    }

    const onChallengeRewards = (c: any) => {
        const ch = progress.challenges[0]
        // setTaskIndex(ch.taskIndex)
    }
    
    const onChallengeAbandon = (c: any) => {
        const ch = progress.challenges[0]
        console.log("abandon:", ch)
    }

    const onTaskValidate = (c: any) => {
        const ch = progress.challenges[0]
        setWorking(strings.validatingTask)
        validateTaskEvent.send({
            type: 'validateTask',
            product: productDetails,
            challenge: ch
        })
    }

    const onTaskAbandon = (c: any) => {
        // const ch = progress.challenges[0]
        // console.log("abandon:", ch)
    }
 
    const onChallengeStart = (c: any) => {
        if (!session.user) {
            dispatch(replace('/register'))
            return
        }

        if (isLocked) {
            setSecurityCheck("onChallengeStart")
            return
        }

        setWorking(strings.startingChallenge)
        startChallengeEvent.send({
            type: "startChallenge",
            productId: productDetails.id,
            challenge
        })
    }

    const renderers = (styles: any) => ({
        code: (props: any) => (<SyntaxHighlighter language={props.language} style={highlightStyle}>
            { props.value }
        </SyntaxHighlighter>),
        heading: (props: any) => (<Title level={props.level} style={{
            textAlign: "center", 
            ...styles.layout,
            ...styles.heading
        }}>
            { props.children }
        </Title>),
        paragraph: (props: any) => (<Paragraph style={{
            textAlign: "justify",
            ...styles.layout,
            ...styles.paragraph
        }}>
            { props.children }
        </Paragraph>)
    })

    const renderChallengeSummary = (c: any, actionable: boolean = true) => {
        const { details, id } = c
        const { title, summary } = details
       
        return <Card 
            hoverable={actionable}
            onClick={actionable ? onChallengeSelected(c) : () => {}}
            key={id} style={{ width: 300, marginTop: 16, padding: 10, minHeight: 150 }} loading={false}>
            <Meta
                title={title}
                description={summary}
            />

            { c.skills.map((skill: any, i: number) => (
                <Tag color="green" key={i} style={{ marginTop: 16, padding: 4, paddingLeft: 10, paddingRight: 10, fontSize: 13 }}> { skill[0] } 
                    <Badge count={skill[1]} style={{ 
                        marginTop: -4,
                        marginLeft: 5, 
                        fontSize: 10,
                        backgroundColor: '#52c41a' 
                    }}/>
                </Tag>
            ))}
        </Card>
    }

    const renderChallenge = () => {       
        return <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            { renderChallengeSummary(challenge, false)}
            <Button
                type="primary"
                size="large"
                onClick={onChallengeStart}
                style={{
                    marginTop: 16
                }}>
                Start Challenge
            </Button>
            <Button
                type="link"
                onClick={onChallengeBrowseBack}
                style={{
                    marginTop: 16
                }}>
                or choose another one
           </Button>
      </div>
    }

    // const renderActionMenu = () => (
    //     <div style={{
    //       display: "flex",
    //       flex: 10,
    //       justifyContent: "center"
    //       }}>
    //           <Radio.Group size="large" value={section} onChange={onSectionChanged} buttonStyle="solid">
    //           <Radio.Button value="products">Your Products</Radio.Button>
    //           <Radio.Button value="marketplace">Marketplace</Radio.Button>
    //           </Radio.Group>
    //       </div>
    //   )

    const renderChallenges = () => {
        if (challenges.length === 0) {
            return <Skeleton loading={true} active paragraph={{ rows: 10 }} title />
        }

        return <div>
            <Title level={3}> Choose a challenge: </Title>
            { challenges.map((challenge: any) => renderChallengeSummary(challenge)) }
        </div>
    }

    const renderValidationStatus = () => {
        return <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
           <Card 
            key="progress" style={{ width: 300, marginTop: 8, padding: 10, minHeight: 150 }} loading={false}>
                  <Result
                    status={taskStatus.ok ? "success" : "warning"}
                    title={taskStatus.ok ? strings.validWork : strings.invalidWork }
                    extra={
                    <Button type="primary" key="console" onClick={taskStatus.error ? onTaskRetry : onTaskNext}>
                        { taskStatus.ok ? 'Keep Going' : 'Try Again' }
                    </Button>
                    }
                />
            </Card>
      </div>
    }

    const renderTask = () => {
        if (taskStatus) {
            return renderValidationStatus()
        }

        const ch = progress.challenges[0]

        const prog = Math.round((taskIndex / ch.tasks.length) * 100)
        const task = ch.tasks[taskIndex]

        return <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>

        <Card 
            key="progressTitle" style={{ width: 300, marginTop: 16, padding: 5 }} loading={false}>
                <Meta
                    title={ch.name}               
                    description={<Progress key="prog" style={{padding:10}} percent={prog} showInfo={true}/>}
                />
            </Card>

            <Card 
                key="task" style={{ width: 300, marginTop: 8, padding: 5 }} loading={false}>
                <Meta
                    title={task.title}               
                    description={`Task ${taskIndex + 1} of ${ch.tasks.length}`}
                />
                <TaskTutorial content={ch.tutorials[taskIndex]}/>
            </Card>

            <Button
                type="primary"
                size="large"
                onClick={onTaskValidate}
                style={{
                    marginTop: 16
                }}>
                Validate Work
            </Button>
            <Button
                type="link"
                onClick={onTaskAbandon}
                style={{
                    marginTop: 16
                }}>
                or abandon this task
           </Button>
      </div>
    }

    const renderChallengeProgress = () => {
        const ch = progress.challenges[0]
        const { isCompleted, name } = ch 

        const markup = (id: number) => ({
            isCurrent: (id === ch.taskIndex),
            isDone: (id < ch.taskIndex),
        })

        const prog = isCompleted ? 100 : Math.round((ch.taskIndex / ch.tasks.length) * 100)

        return <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>

        <Card 
            key="progressTitle" style={{ width: 300, marginTop: 16, padding: 10 }} loading={false}>
                <Meta
                    title={name}      
                    description={<Progress key="prog" style={{padding: 10}} percent={prog} showInfo={true}/>}
                />
            </Card>


           <Card 
            key="progress" style={{ width: 300, marginTop: 8, padding: 10, minHeight: 150 }} loading={false}>
                <Title level={4}> { isCompleted ? "" : "Tasks:" } </Title>
                { !isCompleted || (<Result
                    status={"success"}
                    title={ strings.challengeCompleted }
                />)}
                <List
                    dataSource={ch.tasks}
                    renderItem={(task: any) => (
                        <List.Item key={task.id}>
                            <Text style={{textAlign: 'left'}} mark={markup(task.id).isCurrent} delete={markup(task.id).isDone} disabled={!markup(task.id).isDone}> 
                                { task.title}  
                            </Text>      
                        </List.Item>
                    )}
                />
            </Card>


            <Button
                type="primary"
                size="large"
                onClick={isCompleted ? onChallengeRewards : onChallengeContinue}
                style={{
                    marginTop: 16
                }}>
                { isCompleted ? 'Claim Your Rewards' : 'Continue Challenge' }
            </Button>
            { !isCompleted && (<Button
                type="link"
                onClick={onChallengeAbandon}
                style={{
                    marginTop: 16
                }}>
                or abandon this challenge
           </Button>)}
      </div>
    }

    // const renderFlow = () => {
    //     if (working) {
    //         return <Spin tip={working}/>
    //     }

    //     if (taskIndex >= 0) {
    //         return renderTask()
    //     }

    //     if (progress && progress.challenges) {
    //         return renderChallengeProgress()
    //     }

    //     if (challenge && challenge.name) {
    //         return renderChallenge()
    //     }

    //     if (challenges && challenges.length > 0) {
    //         return renderChallenges() 
    //     }

    //     return renderAction()
    // }
    
    // <VaultLock key="check" show={securityCheck} locked={isLocked} onDone={onSecurityCheck}/>
    // { 
    //     renderFlow()
    // }
    return (<div/>)
}