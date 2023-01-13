import React, { useRef } from 'react'
import { useCarmelAuth } from '~/sdk/hooks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ carmel }: any) => {
   const username = useRef<any>();
 
   return (
    <div className="w-full h-full mt-32 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center h-auto justify-center border border-primary-color p-8 gap-10 w-full lg:w-1/3 bg-primary-gradient bg-no-repeat bg-top bg-fill">
          <img src="/images/logo/logo-white.svg" className="w-20 h-20" alt="img" />
          <h3 className="text-2xl"> Login </h3>
          <div className="self-center mb-10 flex flex-col space-y-4">
            <input ref={username} type="text" name="username" placeholder="Enter your username" autoComplete="username webauthn" className="text-black"/>
            <button onClick={() => carmel.auth.login({ username: `${username.current.value}` })} className="btn bg-primary-color p-4 text-white">
              Login now
            </button>
          </div>
        </div>
        <a href={'/signup'} className="flex flex-row">
          <button className="p-4 bg-primary-background m-4">
              Or create a FREE account
          </button>
        </a>
      </div>
    );
};
  