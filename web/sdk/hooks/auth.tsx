import { useState } from 'react';
import * as cr from '~/utils/crypto'

export const useCarmelAuth = (carmelNet: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const status = () => {
    return {
      loggedIn: cr.isLoggedIn(),
      registered: cr.isRegistered(),
      session: cr.loadSession(),
      account: cr.loadAccount()
    }
  }

  const login = async (props: any) => {
    const account = localStorage.getItem('carmel.account')

    if (!account) {
      console.log("not logged in.")
      return;
    }

    const { username, id, jwk } = JSON.parse(atob(account))

    const action = "did:carmel:0123456789:0123456789x"
    const challenge = cr.utf8StringToBuffer(`${username}:${action}`)  
    const publicKey: any = cr.loginOptions({ username, id, challenge })  
    const assertion: any = await navigator.credentials.get({ publicKey });
    
    const sig = await cr.getSig(assertion)
    const digest = await cr.getDigest(assertion)

    const token = cr.stringToBase64(JSON.stringify({
      account,
      action,
      sig: cr.bufferToBase64URLString(sig),
      digest,
    }))
    
    localStorage.setItem('carmel.token', token)
  }

  const register = async ({ username }: any) => {
    // console.log(username)
    // const publicKey: any = cr.registerOptions({ username })
    // const attestation: any = await navigator.credentials.create({ publicKey })
    // const jwk = await cr.getJWK(attestation)

    // const session = {
    //   username, 
    //   id: attestation.id, 
    //   jwk: JSON.stringify(jwk)
    // }

    try {
      const channel = carmelNet.session.station.channel("sys:ops")
      const result = await channel.sendEvent("req:register", {
        data: { username }
      })

      console.log(result)

    } catch (e) {
      console.log(e)
    }

    // localStorage.setItem('carmel.account', cr.stringToBase64(JSON.stringify(session)))
  }

  return {
    register,
    login,
    isLoading,
    ...status
  }
}