import React, { Fragment, useState, Children, cloneElement,  isValidElement } from 'react'
import Spinner from '~/components/spinner'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ carmel, children }: any) => {
    if (carmel.net.isConnected) {
      const newProps: any = { carmel }
  
      return Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, newProps)
        }
        return child
      })
    }
    
    return (<div className="w-full h-full mt-32 flex flex-col items-center justify-center justify-center">
        <div className="flex flex-col items-center h-56 justify-center border border-primary-color p-8 gap-10 w-full lg:w-1/3 bg-primary-gradient bg-no-repeat bg-top bg-fill">
          <Spinner/>
          <div className="text-xl">
            Connecting ...
          </div>
        </div>
      </div>)
}