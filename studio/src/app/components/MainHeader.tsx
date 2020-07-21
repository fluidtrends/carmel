import React from 'react'
import { MainHeaderComponentProps } from '../types'
import { Layout, Radio, Dropdown, Typography, Tabs, Badge, Spin, Menu, Button } from 'antd'

import { 
  UserOutlined, 
  LaptopOutlined, 
  DownOutlined, 
  LockOutlined,
  UnlockOutlined,
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
    const notifications: any = {
        carmel: [],
        main: [],
        vault: [],
        settings: [],
        user: []
      }
      
      function callback(key: any) {
        console.log(key);
      }
    
      function onSectionChanged(e: any) {
        console.log('click', e);
      }
        
      function onAccountSelect(e: any) {
        console.log('click', e);
      }
    
    const asset = (id: string) => require(`../../../assets/${id}`).default
    
    const accountMenu = <Menu onClick={onAccountSelect}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Sign In
      </Menu.Item>
    </Menu>

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
        width: 960,
    }}>
        <div style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-start"
        }}>
        <Dropdown overlay={accountMenu}>
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
        justifyContent: "center"
        }}>
            <Radio.Group size="large" value={"products"} onChange={onSectionChanged} buttonStyle="solid">
            <Radio.Button value="products">Your Products</Radio.Button>
            <Radio.Button value="marketplace">Marketplace</Radio.Button>
            </Radio.Group>
        </div>

        <div style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end"
        }}>

        <Badge count={notifications.vault.length} overflowCount={5} offset={[0, 2]}>
          <Button shape="circle" icon={<LockOutlined />} size='large' style={{
            marginLeft: 10
          }}/>
        </Badge>

        <Badge count={notifications.settings.length} overflowCount={5} offset={[0, 2]}>
          <Button shape="circle" icon={<SettingOutlined />} size='large' style={{
            marginLeft: 10
          }}/>
        </Badge>

        <Dropdown overlay={accountMenu}>
            <Badge count={notifications.user.length} overflowCount={5} offset={[0, 2]}>
              <Button shape="circle" icon={<UserOutlined />} size='large' style={{
                  marginLeft: 10
                }}/>
            </Badge>
        </Dropdown>
        </div>  
    </div>
  </div>)
}