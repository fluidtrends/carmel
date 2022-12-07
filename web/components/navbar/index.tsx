import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from 'flowbite-react'
import { ClipboardDocumentCheckIcon, BuildingStorefrontIcon, UserCircleIcon, ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid'

export default () => {  
 return (<header className="navbar bg-base-100 sticky top-0 z-50 w-full h-20 bg-black/40 backdrop-blur-xl flex justify-center items-center border-b border-primary-color">
     <div className="navbar-start">
       <label className="btn btn-ghost">
            <img src="/images/logo/logo-white-with-white-text.svg" alt="logo" className="h-12 hidden md:block" />
            <img src="/images/logo/logo-white.svg" alt="logo" className="h-16 -ml-4 -mt-2 lg:hidden" />
        </label>
      </div>
    
    <div className="navbar-end">
      <a className="btn btn-ghost text-white">
        <BuildingStorefrontIcon className="h-7 w-7"/>
        <span className='hidden md:block ml-2 mt-1'> Store </span>
       </a>
       <a className="btn btn-ghost text-white">
        <ClipboardDocumentCheckIcon className="h-7 w-7"/>
        <span className='hidden md:block ml-2 mt-1'>  Quests </span>
       </a>
       <a className="btn ml-2 btn-primary text-white" href="/signup">
        <UserCircleIcon className="h-6 w-7"/>
        <span className='hidden md:block ml-2 mt-1'>  Sign Up </span>
       </a>
      <a className="btn ml-2" href="/login">
        <ArrowLeftOnRectangleIcon className="h-7 w-7"/>
        <span className='hidden md:block ml-2 mt-1'> Login </span>
      </a>
    </div>
  </header>)
}