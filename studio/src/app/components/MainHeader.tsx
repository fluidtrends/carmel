import React, { useState, useEffect } from 'react'
import { MainHeaderComponentProps, State } from '../types'
import { Layout, Radio, Tag, Dropdown, Typography, Tabs, Badge, Spin, Menu, Button } from 'antd'
import { useDispatch, useSelector } from "react-redux"
import { replace } from 'connected-react-router'
import { useEvent } from '../hooks'

import { 
  UserOutlined, 
  WalletOutlined, 
  SolutionOutlined, 
  LockOutlined,
  UnlockOutlined,
  SyncOutlined,
  SettingOutlined,
  CaretDownOutlined, 
  NotificationOutlined,
  FolderOutlined
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
  const browser: any = useEvent()

  const notifications: any = {
      carmel: [],
      main: [],
      user: []
  }
      
    // const onSectionChanged = (e: any) => {
    //   const s = e.target.value
    //   setSection(s)
    //   // switch (s) {
    //   //   case "products":
    //   //     dispatch(replace(session.productId ? '/product' : '/products'))  
    //   //     break
    //   //   case "content":
    //   //     browser.send({ type: 'hideWebPreview' })
    //   //     dispatch(replace(`/content`))  
    //   //     break
    //   //   }
    // }
        
    const onAccountSelect = (e: any) => {
        const { key } = e
        browser.send({ type: 'hideWebPreview' })
        dispatch(replace(`/${key}`))  
    }

    const onContent = (e: any) => {
      browser.send({ type: 'hideWebPreview' })
      dispatch(replace(`/content`))  
    }

    const asset = (id: string) => require(`../../../assets/${id}`).default
    
    const accountMenu = <Menu onClick={onAccountSelect}>
      { session && session.user && <Menu.Item key="profile" icon={<SolutionOutlined />}>
        Your Profile
      </Menu.Item> }
      { (!session || !session.user) && <Menu.Item key="login" icon={<UserOutlined />}>
       Login
      </Menu.Item>}
      <Menu.Divider/>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="vault" icon={<LockOutlined />}>
        Vault
      </Menu.Item>
      { (!session || !session.user) && <Menu.Divider/>}
      { (!session || !session.user) && <Menu.Item key="register">
        <Button type="primary">Sign Up</Button>
      </Menu.Item> }
    </Menu>

    // const renderMainMenu = () => (
    //   <div style={{
    //     display: "flex",
    //     flex: 10,
    //     justifyContent: "center"
    //     }}>
    //         <Radio.Group size="large" value={section} onChange={onSectionChanged} buttonStyle="solid">
    //         <Radio.Button value="products">Products</Radio.Button>
    //         <Radio.Button value="content">Content</Radio.Button>
    //         </Radio.Group>
    //     </div>
    // )

  //  { session && session.user ? session.user.plan_name && session.user.plan_name !== "free" && <Tag color="green" style={{margin: 10}}> { session.user.plan_name.split('.')[0].toUpperCase() } </Tag> }

  return (<div style={{ 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
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
        width: "100%",
    }}>
        <div style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-start"
        }}>
          <img src={asset('icon-32.png')} style={{
            width: 28, height: 28 
          }}/>
        </div>
        <div style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end"
        }}>
          <Dropdown overlay={accountMenu}>
            <Badge count={notifications.user.length} overflowCount={5} offset={[0, 2]}>
              <Button icon={<UserOutlined/>} size='large' style={{
                  marginLeft: 10
                }}>
                  { session && session.user ? session.user.username : ""} 
                  <CaretDownOutlined/>
              </Button>
            </Badge>
          </Dropdown>
       </div>  
    </div>
  </div>)
}