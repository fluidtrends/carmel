import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Radio, Divider } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import { TaskTutorial } from './TaskTutorial'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Task: any = (props: any) => {
    const { progress } = props

    const { isCompleted, tutorials, tasks, title, task_index, total_tasks } = progress 

    const task = tasks[task_index]
    const tutorial = tutorials[task_index]

    return (<div 
                key={"top"} style={{ 
                  width: 300,
                  margin: 0,
                  textAlign: "left",
                  paddingTop: 10 }}>
                <Card 
                    key="task" style={{ width: 300, marginTop: 8, padding: 5 }} loading={false}>
                    <Title level={4}> { `Task ${task_index + 1} of ${tasks.length}` }: </Title>
                    <Paragraph style={{marginBottom: 24}}> { task.title } </Paragraph>
                    <TaskTutorial content={tutorial}/>
                </Card>
            </div>)
}