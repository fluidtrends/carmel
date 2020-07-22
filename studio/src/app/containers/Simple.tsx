import React, { useEffect, useState } from 'react'
import { SimpleContainerProps } from '../types'
import { Progress, Spin, Layout } from 'antd'
import * as styles from '../styles'

/**
 * 
 * @param props 
 */
export const Simple: React.FC<SimpleContainerProps> = (props) => {
  return (<Layout style={styles.container}>
    { props.children }
  </Layout>)
}