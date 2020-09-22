import React from 'react'
import { LoginScreenProps } from '../types'
import * as styles from '../styles'
import { AuthForm } from '../components'

/**
 * 
 * @param props 
 */
export const Login: React.FC<LoginScreenProps> = (props) => {  
    const layout = {
      wrapperCol: { span: 24 },
    }

    return (<div style={{
        ...styles.screen,
        backgroundColor: "#f5f5f5",
        ...layout
      }}>       
        <AuthForm login/>
       
    </div>)
}