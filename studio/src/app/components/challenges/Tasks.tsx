import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Result, List, Progress, Spin } from 'antd'
import * as strings from '../../strings.json'
import { Header, Task } from '.'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Tasks: any = (props: any) => {
    const { progress, onValidate, onDone } = props
    const { isCompleted, tasks, title, task_index, total_tasks } = progress 

    const [validatingTaskIndex, setValidatingTaskIndex] = useState(-1)
    const [validating, setValidating] = useState(false)
    const [showTask, setShowTask] = useState(false)

    const prog = isCompleted ? 100 : Math.round((task_index / total_tasks) * 100)
    const markup = (id: number) => ({ isCurrent: (id === task_index), isDone: (id < task_index) })

    const onFinish = () => {
        onDone && onDone()
    }

    const onCompleteTask = () => {
        setValidating(true)
        setValidatingTaskIndex(task_index)
        onValidate && onValidate()
    }

    const onContinue = () => {
        setShowTask(true)
    }

    const onAbandon = () => {
        console.log("abandon challenge??!!!!")
    }

    useEffect(() => {
        if (validating && validatingTaskIndex >= 0 && task_index >= validatingTaskIndex) {
            setShowTask(false)
            setValidating(false)
        }
    }, [progress])

    const showContents = () => {   
       if (validating) {
           return <Card 
                        key="progress" style={{ 
                            width: 300, 
                            marginTop: 8, 
                            padding: 10, 
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: 150 
                            }} loading={false}>
                    <Spin/>
              </Card>
       }

       if (showTask) {
           return <Task progress={progress}/>
       }

       return <Card 
            key="progress" style={{ width: 300, marginTop: 8, padding: 10, minHeight: 150 }} loading={false}>
                <Title level={4}> { isCompleted ? "" : "Tasks:" } </Title>
                { !isCompleted || (<Result
                    status={"success"}
                    title={ strings.challengeCompleted }
                />)}
                <List
                    dataSource={tasks}
                    renderItem={(task: any) => (
                        <List.Item key={task.id}>
                            <Text style={{textAlign: 'left'}} mark={markup(task.id).isCurrent} delete={markup(task.id).isDone} disabled={!markup(task.id).isDone}> 
                                { task.title}  
                            </Text>      
                        </List.Item>
                    )}
                />
        </Card>
    }

    const showMainAction = () => {
        return (<Button
                type="primary"
                size="large"
                loading={validating}
                disabled={validating}
                onClick={showTask ? onCompleteTask : isCompleted ? onFinish : onContinue}
                style={{
                    marginTop: 16
                }}>
                { showTask ? 'Complete Task' : isCompleted ? 'Take another Challenge' : 'Next Task' }
            </Button>)
    }

    const showSecondaryAction = () => {
        if (isCompleted || validating) return <div/>

        return (<Button
            type="link"
            onClick={onAbandon}
            style={{
                marginTop: 16
            }}>
            or abandon this challenge
        </Button>)
    }

    return <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Card 
            key="progressTitle" style={{ width: 300, marginTop: 16, padding: 10 }} loading={false}>
                <Meta
                    title={title}      
                    description={<Progress key="prog" style={{padding: 8}} percent={prog} showInfo={true}/>}
                />
        </Card>
       
        { showContents () }
        { showMainAction() }
        { showSecondaryAction() }
       
      </div>
}