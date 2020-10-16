import React, { useEffect, useState } from 'react'
import { PlansComponentProps } from '../types'
import { useEvent } from '../hooks'
import { Switch, Card, Tag, Divider, Spin, Button, Typography } from 'antd';
import { CheckOutlined } from "@ant-design/icons"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { replace } from 'connected-react-router'

const { Meta } = Card
const { Title, Paragraph } = Typography

const makePlans = (yearly: boolean, pricing: any) => {
    const freePlan = pricing.find((p: any) => p.plan_name === `free`)
    const proPlanM = pricing.find((p: any) => p.plan_name === `pro.m`)
    const proPlanY = pricing.find((p: any) => p.plan_name === `pro.y`)
    const teamPlanM = pricing.find((p: any) => p.plan_name === `team.m`)
    const teamPlanY = pricing.find((p: any) => p.plan_name === `team.y`)
   
    const proPlan = yearly ? proPlanY : proPlanM
    const teamPlan = yearly ? teamPlanY : teamPlanM

    const proPrice = proPlan.price / 10000 / (yearly ? 12 : 1)
    const teamPrice = teamPlan.price / 10000 / (yearly ? 12 : 1)

    const proSave = Math.round((1 - ((proPlanY.price / 12) / proPlanM.price)) * 100)
    const teamSave = Math.round((1 - ((teamPlanY.price / 12) / teamPlanM.price)) * 100)

    return [{
        id: freePlan.plan_name,
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
        free: true,
        requiredPrice: 0,
        confirm: "Free Forever",
        action: "Choose Plan",    
    },
    {
        id: proPlan.plan_name,
        name: "PRO",
        save: `${proSave}%`,
        benefits: [
            "Get unlimited access to challenges", 
            "Amazon Web Services Integration",
            "Purchase and manage domain names",
            "Host websites in your own cloud",
            "Online and email support"
        ],
        price: `$${proPrice} / month`,
        requiredPrice: proPlan.price,
        action: "Choose Plan",
        confirm: "Downgrade Anytime",
        top: "Includes STARTER Plan Benefits"    
    },
    {
        id: teamPlan.plan_name,
        name: "ENTERPRISE",
        disabled: true,
        save: `${teamSave}%`,
        benefits: [
            "Create and manage private teams",
            "Track team growth goals",
            "Share secure team workspaces",
            "Access to a dedicated account manager",
            "Priority support"
        ],
        price: `$${teamPrice} / team members / month`,
        requiredPrice: teamPlan.price,
        action: "Choose Plan",
        confirm: "Minimum 5 Team Members",
        top: "Includes PRO Plan Benefits"    
    }]
}

/**
 * 
 * @param props 
 */
export const Plans: React.FC<PlansComponentProps> = (props) => {
    const { selectPlan } = props
    const [plans, setPlans] = useState([])
    const [pricing, setPricing] = useState([])
    const [yearly, setYearly] = useState(true)   
    const [settings, setSettings] = useState([])

    const dispatch = useDispatch()

    const planEvent: any = useEvent()

    useEffect(() => {
        planEvent.send({ type: "listPlans" })
    }, [])

    useEffect(() => {
        if (!planEvent.received.id) return 
        setPricing(planEvent.received.plans)
        setSettings(planEvent.received.settings)
        setPlans(makePlans(yearly, planEvent.received.plans))
    }, [planEvent.received])

    const choosePlan = (plan: any) => () => {
        const tokenPrice: number = parseFloat(settings.find((s: any) => s.key === 'carmelusd').value)
        const requiredTokens: number = (tokenPrice * parseInt(plan.requiredPrice) / 10000)
     
        selectPlan ({ 
            name: plan.name,
            id: plan.id,
            requiredPrice: plan.requiredPrice,
            requiredTokens
        }, {
            name: plans[0].name,
            id: plans[0].id,
            requiredPrice: 0,
            requiredTokens: 0
        })
    }

    const onBack = () => {
        dispatch(replace("/"))
      }
  
      const onLogin = () => {
        dispatch(replace("login"))
      }
    
    const renderPlan = (plan: any) => {
        return (<Card key={plan.id}
            style={{ 
                width: 450, 
                margin: 10,
                height: 600,
                opacity: plan.disabled ? 0.4 : 1.0,
                boxShadow: "0px 0px 8px #dddddd",
            }}
            cover={
                <div style={{
                    
                }}>
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
                    { plan.benefits.map((benefit: any, i: number) => (
                        <div key={i} style={{
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
                    <Button type={plan.free || "primary"} size="large" onClick={choosePlan(plan)} 
                        disabled={plan.disabled}
                    style={{
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
        setPlans(makePlans(!yearly, pricing))
        setYearly((y: boolean) => !y)
    }

    const renderPlans = () => (
        <div key="plans" style={{ 
            display: "flex",
            flex: 1,
            padding: 10,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            maxHeight: "90vh",
            width: "100%",
          }}>
            <Title key="title" level={2} style={{marginTop: 30 }}>
                Choose a Carmel Plan:
            </Title>

            <Paragraph key="top" style={{fontSize: 16}}>
                Monthly 
                <Switch onClick={toggle} defaultChecked checked={yearly} style={{ margin: 10 }}/> 
                Yearly 
            </Paragraph>   
            
            <div key="all" style={{ 
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
            <div style={{
              marginBottom: 20,
              display: "flex",
              flex: 1,
              flexDirection: "row",
              width: "100%"
            }}>
                <Button onClick={onBack} size="large" type="link" style={{
                    marginTop: 0,
                    marginLeft: 20,
                    display: "flex",
                    flex: 1,
                    alignSelf: "flex-start"
                }}>
                    <ArrowLeftOutlined style={{ marginTop: 5}} /> Go back 
                </Button>

                <Button onClick={onLogin} type="link" size="large" style={{
                    marginTop: 0,
                    marginRight: 20,
                    display: "flex",
                    flex: 1,
                    justifyContent: "flex-end"
                }}>
                    I already have an account <ArrowRightOutlined style={{ marginTop: 5}}/>
                </Button>
            </div>
        </div>
    )

    return plans.length > 0 ? renderPlans() : <Spin/>
}
