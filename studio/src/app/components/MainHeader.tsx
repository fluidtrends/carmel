import React, { useState, useEffect } from 'react'
import { MainHeaderComponentProps, State } from '../types'
import { Layout, Radio, Tag, Dropdown, Typography, Tabs, Badge, Spin, Menu, Button } from 'antd'
import { useDispatch, useSelector } from "react-redux"
import { replace } from 'connected-react-router'

import { 
  UserOutlined, 
  WalletOutlined, 
  SolutionOutlined, 
  LockOutlined,
  UnlockOutlined,
  SyncOutlined,
  SettingOutlined,
  CaretDownOutlined, 
  NotificationOutlined 
} from '@ant-design/icons'

const { Header, Content, Sider } = Layout
const { TabPane } = Tabs;
const { SubMenu } = Menu;

const { Title } = Typography

/**
 * 
 * @param props 
 */
export const MainHeader: React.FC<MainHeaderComponentProps> = (props) => {
  const [section, setSection] = useState("products")
  const dispatch = useDispatch()
  const session = useSelector((state: State) => state.session)
  const env = useSelector((state: State) => state.env)
  const vaultIsLocked = useSelector((state: State) => state.env.lock && state.env.lock.exists)
    
    const notifications: any = {
        carmel: [],
        main: [],
        user: []
      }
      
      function callback(key: any) {
        console.log(key);
      }
    
      function onSectionChanged(e: any) {
        setSection(e.target.value)
      }
        
      function onAccountSelect(e: any) {
        const { key } = e
        switch(key) {
          case 'profile': 
            dispatch(replace('/profile'))
            break
        }
      }

      function onAppSelect(e: any) {
        const { key } = e
        console.log(key)
      }

      const onSignUp = () => {
          dispatch(replace('/register'))
      }

      const onSignIn = () => {
        dispatch(replace('/login'))
      }
  
    const asset = (id: string) => require(`../../../assets/${id}`).default
    
    const accountMenu = <Menu onClick={onAccountSelect}>
      <Menu.Item key="profile" icon={<SolutionOutlined />}>
        Your Profile
      </Menu.Item>
    </Menu>

    const appMenu = <Menu onClick={onAppSelect}>
      <Menu.Item key="updates" icon={<SyncOutlined />}>
        Check for updates
      </Menu.Item>
    </Menu>

    const renderMainMenu = () => (
      <div style={{
        display: "flex",
        flex: 10,
        justifyContent: "center"
        }}>
            <Radio.Group size="large" value={section} onChange={onSectionChanged} buttonStyle="solid">
            <Radio.Button value="products">Your Products</Radio.Button>
            <Radio.Button value="marketplace">Marketplace</Radio.Button>
            </Radio.Group>
        </div>
    )

  return (<div style={{ 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ffffff",
    boxShadow: "0px 1px 5px #c1c1c1",
    margin: "0px 0px 10px 0px",
  }}>
     <div style={{ 
        padding: 20,
        display: "flex",
        flex: 1,
        flexDirection: "row",
        margin: 0,
        width: 1200,
    }}>
        <div style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-start"
        }}>
        <Dropdown overlay={appMenu}>
            <Badge count={notifications.carmel.length} overflowCount={5} offset={[3, 2]}>
              <Button shape="circle" size='large' style={{
                  backgroundColor: "#00BCD4",
                  boxShadow: "0px 0px 3px #00695C",
                  padding: 0
              }}>
                  <img src={asset('icon-32.png')} style={{
                    width: 28, height: 28 
                  }}/>
              </Button>
            </Badge>
        </Dropdown>
        </div>

        <div style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end"
        }}>

        { session && session.user ? 
        <Dropdown overlay={accountMenu}>
            <Badge count={notifications.user.length} overflowCount={5} offset={[0, 2]}>
              <Button icon={<UserOutlined/>} size='large' style={{
                  marginLeft: 10
                }}>
                  { session.user.username } 
                  <CaretDownOutlined/>
              </Button>
              { session.user.plan_name !== "free" && <Tag color="green" style={{margin: 10}}> { session.user.plan_name.split('.')[0].toUpperCase() } </Tag> }
            </Badge>
          </Dropdown> : <div>
              <Button type="primary" onClick={onSignUp}> Sign Up</Button> 
              <Button type="link" onClick={onSignIn}> Sign In</Button> 
          </div>
        }
        </div>  
    </div>
  </div>)
}