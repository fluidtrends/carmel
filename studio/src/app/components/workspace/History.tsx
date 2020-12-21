import React, { useState, useEffect } from 'react'
import { Layout, Menu, Tree } from 'antd';
import { PictureOutlined, BlockOutlined, FolderOutlined, FileTextOutlined, FontSizeOutlined } from '@ant-design/icons'
import { Editor } from './Editor'
import { Challenges } from '../challenges'
import { useEvent } from '../../hooks'

const { Content, Sider } = Layout
const { SubMenu } = Menu

/**
 * 
 * @param props 
 */
export const History: React.FC<any> = (props) => {
  const { product, challenge, profile, session, onReload, height, command, commandResponse } = props

  const listChallengesEvent: any = useEvent() 

  return (<Layout style={{ 
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      margin: 0,
      flex: 1,
      padding: 0,
      backgroundColor: "#eeeeee",
      alignItems: 'stretch',
      alignSelf: "stretch",
      width: "100%",
      height
    }}>
           <Challenges 
                  listChallengesEvent={listChallengesEvent}
                  height={height}
                  onReload={onReload}
                  challenge={challenge}
                  profile={profile}
                  session={session}
                  product={product} />
    </Layout>)
}
