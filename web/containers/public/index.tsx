import React from 'react';
import Nav from '~/components/navbar';
import Footer from '~/components/footer';
import Spinner from '~/components/spinner';
// import { useAuth } from '~/hooks/auth';
// import { ClientOnly } from 'remix-utils';
// import { NavLink } from '@remix-run/react';
import Head from 'next/head'
import Image from 'next/image'

export default ({ children }: any) => {
  // const auth = useAuth();

  const Content = () => {
    // if (auth.isLoading) {
      // return (
      //   <div className="flex flex-col p-8 gap-10 w-full items-center justify-center h-screen bg-primary-background">
      //     <Spinner />
      //     <p className="text-2xl"> Connecting ... </p>
      //   </div>
      // )
    // }

    return (<main className="flex w-full flex-col justify-center items-center text-center">
        { children }
    </main>)
  }

  return (<div className="w-full flex flex-col justify-center items-center text-center bg-primary-gradient bg-no-repeat bg-top bg-fill px-10">
       <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
       </Head>

      <Nav/>
      <Content/>
      <Footer/>
    </div>
  )
}