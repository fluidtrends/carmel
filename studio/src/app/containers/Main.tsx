import React, { useEffect, useState } from 'react'
import { MainContainerProps } from '../types'
import * as styles from '../styles'
import strings from '../strings.json'
import { Layout, Radio, Dropdown, Tabs, Badge, Spin, Menu, Button } from 'antd'
import { MainHeader } from '../components'
import { State } from '../types'
import { useSelector, useDispatch } from "react-redux"

import { UserOutlined, LaptopOutlined, DownOutlined, CaretDownOutlined, NotificationOutlined } from '@ant-design/icons'

const { Header, Content, Sider } = Layout
const { TabPane } = Tabs;
const { SubMenu } = Menu;

/**
 * 
 * @param props 
 */
export const Main: React.FC<MainContainerProps> = (props) => {
  // const [session, setSession] = useState<any>(useSelector((state: State) => state.session))

  return (<Layout style={{
      display: "flex",
      flexDirection: "column",
      margin: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      padding: 0,
      width: "100vw",
      height: "100vh"
  }}>
    <MainHeader/>

    <Layout style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          padding: 10,
          flex: 1,
          margin: 0,
          width: 1200,
        }}>
          { props.children }
     </Layout>
     <div style={{
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         width: "100%",
         height: 20,
     }}>
     </div>
  </Layout>)
}