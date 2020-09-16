import React, { useEffect, useState } from 'react'
import { PlansComponentProps } from '../types'
import { useEvent } from '../hooks'
import { Switch, Card, Tag, Divider, Button, Typography } from 'antd';
import { CheckOutlined } from "@ant-design/icons"

const { Meta } = Card
const { Title, Paragraph } = Typography

/**
 * 
 * @param props 
 */
export const Plans: React.FC<PlansComponentProps> = (props) => {
    const { selectPlan } = props
    const [yearly, setYearly] = useState(true)

    const plans = [{
        id: "starter",
        name: "STARTER",
        benefits: [
            "Connect your EOS account",
            "Advanced 5-layer security",
            "Access up to 3 challenges per month",
            "Collect skills badges",
            "Earn experience points",
            "Save progress on the EOS blockchain",
            "Build your public profile",
        ],
        price: "FREE",
        confirm: "Free Forever",
        action: "Choose Plan",
    }, {
        id: "pro",
        name: "PRO",
        save: "17%",
        benefits: [
            "Get unlimited access to challenges", 
            "Amazon Web Services Integration",
            "Purchase and manage domain names",
            "Host websites in your own cloud",
            "Online and email support"
        ],
        price: yearly ? "$24 / month" : "$29 / month",
        action: "Choose Plan",
        confirm: "Downgrade Anytime",
        top: "Includes STARTER Plan Benefits"
    }, {
        id: "enterprise",
        save: "22%",
        benefits: [
            "Create and manage private teams",
            "Track team growth goals",
            "Share secure team workspaces",
            "Access to a dedicated account manager",
            "Priority support"
        ],
        name: "ENTERPRISE",
        price: yearly ? "$7 per team member / month" : "$9 per user / month",
        action: "Choose Plan",
        confirm: "Minimum 5 Team Members",
        top: "Includes PRO Plan Benefits"
    }]
    
    const choosePlan = (plan: any) => () => {
        selectPlan ({ 
            id: plan.id,
            yearly 
        })
    }
    
    const renderPlan = (plan: any) => {
        return (<Card key={plan.id}
            style={{ 
                width: 450, 
                margin: 10,
                height: 600,
                boxShadow: "0px 0px 8px #dddddd",
            }}
            cover={
                <div>
                    <Title level={2} style={{ marginTop: 40 }}> { plan.name }  </Title>
                    { plan.save ? yearly ? <Tag color="green" style={{ fontSize: 20, padding: 5, marginBottom: 10 }}> Save { plan.save } </Tag> : 
                    <div>
                        <Tag color="blue" style={{ fontSize: 20, padding: 5, marginBottom: 10 }}> Choose yearly to save { plan.save } </Tag>
                    </div> : <div/>}
                </div>
            }>
            <div style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "align-start"
            }}>
                { plan.top && <Divider style={{color: "#03A9F4"}}>
                        { plan.top } 
                    </Divider> 
                }
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "align-start",
                }}>
                    { plan.benefits.map((benefit: any) => (
                        <div style={{
                            textAlign: "left"
                        }}>
                          
                         <Title level={4} style={{ marginTop: 20, fontSize: 16 }}> 
                            <CheckOutlined style={{
                                color: "#03A9F4", fontWeight: 700, fontSize: 18, marginRight: 10,
                            }} />
                            { benefit } 
                         </Title>
                        </div>
                    ))}
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "align-start",
                    flex: 1
                }}>
                    <Title level={3}  style={{
                        marginTop: 20,
                       color:"#03A9F4"
                    }}> { plan.price } </Title>
                    <Button type="primary" size="large" onClick={choosePlan(plan)} style={{
                        margin: 10, marginTop: 0,
                    }}> 
                        { plan.action } 
                    </Button>
                    <Paragraph style={{ marginBottom: 20 }}>
                        { plan.confirm } 
                    </Paragraph>
                </div>

            </div>
          </Card>)
    }

    const toggle = () => {
        setYearly((y: boolean) => !y)
    }

    return (<div style={{ 
        display: "flex",
        flex: 1,
        padding: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        maxHeight: "100vh",
        width: "100%",
      }}>
        <Title level={2} style={{marginTop: 30 }}>
            Choose a Carmel Plan:
        </Title>

        <Paragraph style={{fontSize: 16}}>
            Monthly 
            <Switch onClick={toggle} defaultChecked checked={yearly} style={{ margin: 10 }}/> 
            Yearly 
        </Paragraph>   
        
        <div style={{ 
            margin: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        }}>
            { plans.map((plan: any) => renderPlan(plan)) }
        </div>
      </div>)

}
