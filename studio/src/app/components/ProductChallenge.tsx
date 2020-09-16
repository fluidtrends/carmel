import React, { useEffect, useState } from 'react'
import { ProductChallengeComponentProps, State } from '../types'
import { Card, Typography, Skeleton, Tag, Badge, Button } from 'antd'
import ReactMarkdown from 'react-markdown'
import highlightStyle from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { useRemote, useEvent } from '../hooks'
import { useSelector, useDispatch } from "react-redux"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import { replace } from 'connected-react-router'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

/**
 * 
 * @param props 
 */
export const ProductChallenge: React.FC<ProductChallengeComponentProps> = (props) => {

    const { productDetails } = props
    const loadTaskEvent: any = useEvent() 
    const loadChallengeEvent: any = useEvent() 
    const listChallengesEvent: any = useEvent() 
    const startChallengeEvent: any = useEvent()
    const [challenges, setChallenges] = useState([])
    const [challenge, setChallenge] = useState<any>({})
    const [taskIndex, setTaskIndex] = useState(-1)
    const session = useSelector((state: State) => state.session)
    const [user, setUser] = useState<any>(session)
    const dispatch = useDispatch()

    const data = useRemote()

    const asset = (id: string) => require(`../../../assets/${id}`).default

    const [tutorial, setTutorial] = useState("")
    // const tutorial = useText(`http://0.0.0.0:${product.staticPort}/products/${product.id}/carmel/assets/en/text/intro.md`)
    const plugins = [require('remark-shortcodes')]


  useEffect(() => {
    console.log(">>>user", user)
  }, [user])

    useEffect(() => {
        if (!productDetails) return
       
        // const tutorialLink = `http://0.0.0.0:${productDetails.staticPort}/products/${productDetails.id}/carmel/assets/en/text/intro.md`
        // const tutorialLink = `http://localhost:${productDetails.staticPort}/products/${productDetails.id}/carmel/assets/en/text/intro.md`
        // console.log(">> got product details:", productDetails, tutorialLink)
        // data.loadText("tutorial", tutorialLink)
        // loadTaskEvent.send({ 
        //     type: "loadTask",
        //     challengeId: "start"
        //   })  
    }, [productDetails])

    useEffect(() => {
        if (!listChallengesEvent.received.challenges) return 
        setChallenges(listChallengesEvent.received.challenges)
    }, [listChallengesEvent.received])

    useEffect(() => {
        // console.log(data.text)
    }, [data.text])

    const onChallengeSelected = (c: any) => () => {
        setChallenge(c)
    }

    const onChallengesBrowse = () => {
        listChallengesEvent.send({
            type: "listChallenges",
            productId: productDetails.id
        })
    }

    const onChallengeBrowseBack = () => {
        setChallenge({})
    }

    const onChallengeStart = (c: any) => {
        if (!session.user) {
            dispatch(replace('/auth'))
            return
        }

        startChallengeEvent.send({
            type: "startChallenge",
            challenge
        })

        setTaskIndex(0)
    }

    const renderers = (styles: any) => ({
        code: (props: any) => (<SyntaxHighlighter language={props.language} style={highlightStyle}>
            { props.value }
        </SyntaxHighlighter>),
        heading: (props: any) => (<Title level={props.level} style={{
            textAlign: "center", 
            ...styles.layout,
            ...styles.heading
        }}>
            { props.children }
        </Title>),
        paragraph: (props: any) => (<Paragraph style={{
            textAlign: "justify",
            ...styles.layout,
            ...styles.paragraph
        }}>
            { props.children }
        </Paragraph>)
    })

    const renderChallengeSummary = (c: any, actionable: boolean = true) => {
        const { details, id } = c
        const { title, summary } = details
       
        return <Card 
            hoverable={actionable}
            onClick={actionable ? onChallengeSelected(c) : () => {}}
            key={id} style={{ width: 300, marginTop: 16, padding: 10, minHeight: 150 }} loading={false}>
            <Meta
                title={title}
                description={summary}
            />

            { c.skills.map((skill: any, i: number) => (
                <Tag color="green" key={i} style={{ marginTop: 16, padding: 4, paddingLeft: 10, paddingRight: 10, fontSize: 13 }}> { skill[0] } 
                    <Badge count={skill[1]} style={{ 
                        marginTop: -4,
                        marginLeft: 5, 
                        fontSize: 10,
                        backgroundColor: '#52c41a' 
                    }}/>
                </Tag>
            ))}
        </Card>
    }

    const renderChallenge = () => {       
        return <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            { renderChallengeSummary(challenge, false)}
            <Button
                type="primary"
                size="large"
                onClick={onChallengeStart}
                style={{
                    marginTop: 16
                }}>
                Start Challenge
            </Button>
            <Button
                type="link"
                onClick={onChallengeBrowseBack}
                style={{
                    marginTop: 16
                }}>
                or choose another one
           </Button>
      </div>
    }

    const renderAction = () => {       
        return <div style={{
            display: "flex",
            flex: 1,
            width: "100%",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Title level={2}> Tweak-n-Learn™ </Title>
            <Paragraph> Take a Carmel Challenge to add functionality to your product and grow your skill set. </Paragraph>
            <Button
                type="primary"
                size="large"
                onClick={onChallengesBrowse}
                style={{
                    marginTop: 16
                }}>
                Browse Challenges
            </Button>
      </div>
    }

    const renderChallenges = () => {
        if (challenges.length === 0) {
            return <Skeleton loading={true} active paragraph={{ rows: 10 }} title />
        }

        return <div>
            <Title level={3}> Choose a challenge: </Title>
            { challenges.map((challenge: any) => renderChallengeSummary(challenge)) }
        </div>
    }

    const renderTask = () => {
        const { details, id, total_tasks } = challenge
        const { title, summary } = details

        return <div style={{
            width: "100%"
        }}>
                <Paragraph> { title } </Paragraph>
                <Title level={4}> Task { taskIndex + 1 } of { total_tasks } </Title>
                <Skeleton loading={true} active paragraph={{ rows: 10 }} title />
            </div>
        // return tutorial ? <ReactMarkdown source={tutorial} renderers={renderers(props)} plugins={plugins} />
    }

    const renderFlow = () => {
        if (taskIndex >= 0) {
            return renderTask()
        }

        if (challenge.name) {
            return renderChallenge()
        }

        if (challenges.length > 0) {
            return renderChallenges() 
        }

        return renderAction()
    }

    return (<div
      style={{ 
        width: "100%", 
        height: "100%",
        overflow: "auto", 
        margin: 0, 
        display: 'flex',
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "justify"
      }}>
        { 
            renderFlow()
        }
  </div>)
}