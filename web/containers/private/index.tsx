import React, { Fragment, useState, Children, cloneElement,  isValidElement } from 'react';
import Nav from '~/components/navbar';
import Footer from '~/components/footer';
import Spinner from '~/components/spinner';
import { useCarmelNet, useCarmelAuth } from '~/sdk/hooks'
import Head from 'next/head'
import Image from 'next/image'
import { ClipboardDocumentCheckIcon, BuildingStorefrontIcon, UserCircleIcon, ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'

import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


const Menu = [{
  title: "Dashboard",
  icon: ClipboardDocumentCheckIcon,
  selected: true
}, 
{
  title: "Content",
  icon: BuildingStorefrontIcon,
},
{
  title: "Profile",
  icon: UserCircleIcon,
}]

const MenuItem = (props: any) => {
  const Icon = props.icon
  return (<li className='m-4' key={props.index}>
          <div key={props.index} className={`btn ${props.selected ? 'btn-primary' : 'btn-ghost'} text-white flex flex-row`} onClick={props.onClicked }>
            <div><Icon width={48} height={48} className="p-2"/></div> <div>{ props.title }</div>
          </div>
    </li>)
}

const MenuItems = (props: any) => {
  return (<ul className="menu bg-black bg-opacity-50 w-1/3 text-secondary-content p-2 border w-56">
      { props.items.map((item: any, i: number) => <MenuItem {...item} onClicked={() => props.onClicked(props.items[i])} index={i}/>) }
  </ul>)
}

export default ({ children }: any) => {
  const carmelNet = useCarmelNet()
  const carmelAuth = useCarmelAuth(carmelNet)
  const menuItems = useState(Menu)

  const onMenuItemClicked = (data: any) => {
    console.log(data)
  }

  const Content = () => {
    // if (auth.isLoading) {
      // return (
      //   <div className="flex flex-col p-8 gap-10 w-full items-center justify-center h-screen bg-primary-background">
      //     <Spinner />
      //     <p className="text-2xl"> Connecting ... </p>
      //   </div>
      // )
    // }

    const newProps: any = { carmel: { net: carmelNet, auth: carmelAuth } }

    const childrenWithProps = Children.map(children, child => {
      if (isValidElement(child)) {
        return cloneElement(child, newProps)
      }
      return child
    })

    return (<main className="flex h-full w-full flex-col justify-center items-center text-center">
       { childrenWithProps }  
    </main>)
  }

  return (<div className="w-full flex flex-col overflow-hidden justify-center items-center text-center bg-primary-gradient bg-no-repeat bg-top bg-fill px-10">
      <Head>
      <title>Carmel</title>
      <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <Nav private/>
      <Content/>
      <Footer/>
      </div>
  )
}
