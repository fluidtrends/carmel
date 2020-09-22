import React, { useState } from 'react'
import { LoginScreenProps } from '../types'
import * as styles from '../styles'
import { Plans, AuthForm } from '../components'

/**
 * 
 * @param props 
 */
export const Register: React.FC<LoginScreenProps> = (props) => {  
    const [plan, setPlan] = useState<any>('')
    const [freePlan, setFreePlan] = useState<any>('')

    const layout = {
      wrapperCol: { span: 24 },
    }

    const selectPlan = (plan: any, freePlan: any) => {
      setPlan(plan)
      setFreePlan(freePlan)
    }

    const renderForm = () => (
      <AuthForm plan={plan} freePlan={freePlan} login={false}/>
    )

    const renderPlans = () => (
      <Plans selectPlan={selectPlan}/>
    )
  
    return (<div style={{
        ...styles.screen,
        backgroundColor: "#f5f5f5",
        ...layout
      }}>       
        { plan ? renderForm() : renderPlans() } 
    </div>)
}