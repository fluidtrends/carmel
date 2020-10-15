import React, { useState, useEffect } from 'react'
import { TaskTutorialComponentProps } from '../types'
import ReactMarkdown from 'react-markdown'
import { Layout, Skeleton, Typography } from 'antd'
import highlightStyle from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

const { Title, Paragraph } = Typography
const { Content } = Layout

/**
 * 
 * @param props 
 */
export const TaskTutorial: React.FC<TaskTutorialComponentProps> = (props) => {
    const { content } = props

    const plugins = [require('remark-shortcodes')]

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

  return (<Layout style={{ 
        width: "100%", 
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        padding: 0,
    }}>
    <Content style={{
        backgroundColor: "#ffffff",
        width: "100%", 
        color: "#333333",
        padding: 0,
    }}>
        { content ? <ReactMarkdown source={content} renderers={renderers(props)} plugins={plugins} />
                        : <Skeleton loading={true} active paragraph={{ rows: 10 }} title />
        }
    </Content>
    </Layout>)
}