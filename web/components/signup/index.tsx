import React, { useRef } from 'react'
import { useAuth } from '~/hooks/auth';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default () => {
    const username = useRef<any>();
    const auth = useAuth()

    return (
      <div className="flex flex-col items-center h-auto justify-center border border-primary-color p-8 gap-10 w-full lg:w-1/3 bg-primary-gradient bg-no-repeat bg-top bg-fill">
        <img src="/images/logo/logo-white.svg" className="w-20 h-20" alt="img" />
        <h3 className="text-2xl"> Sign Up </h3>
        <div className="self-center mb-10 flex flex-col space-y-4">
          <input ref={username} type="text" name="username" placeholder="Pick a username" autoComplete="username webauthn" className="text-black"/>
          <button onClick={() => auth.register({ username: `${username.current.value}` })} className="btn bg-primary-color p-4">
            Create Your Account
          </button>
        </div>
      </div>
    );
}  