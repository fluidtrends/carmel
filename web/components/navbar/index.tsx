import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from 'flowbite-react'
import { ClipboardDocumentCheckIcon, BuildingStorefrontIcon, UserCircleIcon, ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid'

const ActionButton = (props: any) => {
  const Icon = props.icon
  return (<a className={`btn ml-2 ${props.primary ? 'btn-primary' : ''} text-white`} href={props.link}>
    <Icon className="h-6 w-7"/>
    <span className='hidden md:block ml-2 mt-1'> { props.title } </span>
  </a>)
}

const IconButton = (props: any) => {
  const Icon = props.icon
  return (<a className={`btn btn-ghost rounded-full ml-2 text-white`} href={props.link}>
    <Icon className="h-10 w-10"/>
    <span className='hidden md:block ml-2 mt-1'> { props.title } </span>
  </a>)
}

const ActionButtons = (props: any) => {
  if (props.private) {
    return [<IconButton link="/" title="idancali" primary icon={UserCircleIcon}/>]
  }

  return [
    <ActionButton link="/signup" title="Sign Up" primary icon={UserCircleIcon}/>,
    <ActionButton link="/login" title="Login" icon={ArrowLeftOnRectangleIcon}/>
  ]
}

export default (props: any) => {  
 return (<header className="navbar bg-base-100 sticky top-0 z-50 w-full h-20 bg-black/40 backdrop-blur-xl flex justify-center items-center border-b border-primary-color">
     <div className="navbar-start">
        <a className="btn btn-ghost rounded-full text-white" href="/">
        <img src="/images/logo/logo-white-with-white-text.svg" alt="logo" className="h-12 hidden md:block" />
          <img src="/images/logo/logo-white.svg" alt="logo" className="h-16 -mt-2 p-0 lg:hidden" />
        </a>
      </div>
    
    <div className="navbar-end">
       { ActionButtons(props) }
    </div>
  </header>)
}
