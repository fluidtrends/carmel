import React, { useState } from 'react';
import Image from 'next/image'
import eth from "../../images/eth.webp"
import usdc from "../../images/usdc.webp"
import carmel from "../../images/carmel.webp"
import card from "../../images/card.svg"
import { UserCircleIcon } from '@heroicons/react/24/solid'

const ActionHeader = () => {
  return (
    <p className="text-lg p-4 text-center pt-10 lg:text-4xl lg:pb-20">
      {'Select a Card as your primary Carmel Card'}
    </p>
  );
};

const ActionButton = () => {
  return (
    <button className="bg-primary-color p-4 mt-8 w-3/4 lg:w-96 text-2xl" type="submit">
      {'Continue'}
    </button>
  );
};

const BackButton = () => {
  return (
    <button className="text-primary-color p-4 w-3/4 lg:w-96 text-lg mt-12 opacity-50">
      Choose another Card
    </button>
  );
};

const MainContent = () => {
  return (
    <div key="register" className="flex flex-col w-full lg:w-2/3 items-center justify-center w-full">
      <div
        className={
          'w-full lg:w-1/2 h-auto p-4 h-auto bg-primary-background border border-primary-color p-4 m-4 cursor-pointer bg-primary-gradient bg-no-repeat bg-top bg-fill w-full'
        }>
        
      </div>
    </div>
  );
}

const MainForm = () => {
  return (<div className="w-full h-full mt-32 flex flex-col items-center">
    <img src="/images/logo/logo-white.svg" className="w-20 h-20" alt="img" />
    <h3 className="text-2xl"> Sign Up </h3>
    <div className="self-center mb-10 flex flex-col space-y-4 flex-1">
      <input type="text" name="username" placeholder="Pick a username" autoComplete="username webauthn" className="text-black"/>
      <button onClick={() => {}} className="btn bg-primary-color p-4">
        Create Your Account
      </button>
    </div>
    <a href={'/login'} className="flex flex-row">
      <button className="p-4 bg-primary-background m-4">
          Or sign back in
      </button>
    </a>
  </div>
  )
}

const Stat = (props: any) => {
  return ( <div className="lg:w-1/4 w-1/3 h-full bg-base-100 shadow-xl border-primary-color gap-4 bg-primary-gradient bg-no-repeat bg-top bg-fill border border-primary-color flex flex-col items-center">
            <p className="text-xl text-center pt-4">
              <Image src={props.image} height={80} width={80} alt="logo"/>
            </p>
            <div className="lg:text-2xl pb-4 text-md text-center flex lg:flex-row flex-col">
              <div>
                {props.amount} 
              </div> 
              <div className='text-primary-color pl-2 pr-2'>
                {props.currency}
              </div>
            </div>
    </div>)
}

const Stats = () => {
    return (<div className="mb-10 flex flex-row justify-center items-center h-auto flex-wrap">   
      <Stat amount="13.4040" currency="ETH" image={eth}/>
      <Stat amount="0.0000" currency="CARMEL" image={carmel}/>
      <Stat amount="12,3043.4040" currency="USDC" image={usdc}/>
    </div>)
}

export default () => {
  return (<div className="flex flex-col lg:m-10 mt-10 h-auto">
    <div className="flex flex-col justify-center items-center bg-primary-gradient bg-no-repeat bg-top bg-fill border-b border-primary-color">   
        <UserCircleIcon width={96} height={96}/>
        <div className="flex-1 lg:text-5xl text-3xl">idancali</div>
    </div>
    <div className='mt-20 border-b border-primary-color'>
      <Stats/>
    </div>
    <div className="flex flex-col w-full items-center align-start">
      <div className="container flex lg:flex-row flex-col lg:m-20 mt-10">
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <div className="flex-1">
              <Image src={card} alt="card" className="border border-primary-color"/>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-10 lg:mt-0 p-4 flex flex-col border border-primary-color items-center bg-primary-gradient bg-no-repeat bg-top bg-fill">
            <div className='mt-10 mb-10'>
              <div className='lg:text-5xl text-3xl'> Your Profile </div>
            </div>

            <div className="self-center w-full flex flex-col space-y-4 p-10">
              <input type="text" name="username" placeholder="Username" className="text-black"/>
              <textarea name="bio" placeholder="bio" className="text-black"/>
              <button onClick={() => {}} className="btn bg-primary-color p-4">
                  Update
              </button>
            </div>
            <div className='flex-1'/>            
            <a href={'/'} className="flex flex-row">
              <button className="p-4 bg-primary-background m-4">
                  Sign out
              </button>
            </a>
          </div>
      </div>
    </div>
  </div>)
}