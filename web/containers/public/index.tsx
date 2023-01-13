import React, { Children, cloneElement,  isValidElement } from 'react';
import Nav from '~/components/navbar';
import Footer from '~/components/footer';
import { useCarmelNet, useCarmelAuth } from '~/sdk/hooks'
import Head from 'next/head'

export default ({ children }: any) => {
  const carmelNet = useCarmelNet()
  const carmelAuth = useCarmelAuth(carmelNet)
  
  const Content = () => {
    const newProps: any = { carmel: { net: carmelNet, auth: carmelAuth } }

    const childrenWithProps = Children.map(children, child => {
      if (isValidElement(child)) {
        return cloneElement(child, newProps)
      }
      return child
    })

    return (<main className="flex w-full flex-col justify-center items-center text-center">
        { childrenWithProps }
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