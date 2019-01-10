import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col, Button, Icon } from 'antd'
import Task from './playground/task'

import Editor from './playground/editor'
import ChunkyProduct from './playground/product'

export default class ChallengePlayground extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    super.componentDidMount()
  }

  handleEditorChange = val => {
    if (JSON.parse(val)) {
      this.setState({ newValues: JSON.parse(val) })
    }
  }

  renderButtons() {
    const { challenge } = this.props
    const { taskIds } = challenge
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          onClick={() => this.props.pauseTask()}
          style={{
            display: 'flex',
            color: '#ffffff',
            backgroundColor: '#006064',
            border: 'none',
            margin: '10px auto 0',
            height: '35px',
            lineHeight: '15px'
          }}
        >
          <Icon type="arrow-left" />
          Go back
        </Button>
        <Button
          onClick={() => this.props.verify(taskIds[0], this.state.newValues)}
          style={{
            display: 'flex',
            color: '#ffffff',
            backgroundColor: `#4CAF50`,
            border: 'none',
            margin: '10px auto 0',
            height: '35px',
            lineHeight: '15px'
          }}
        >
          <Icon type="check-circle" />
          Verify Task
        </Button>
      </div>
    )
  }

  render() {
    const { challenge, defaults, initial } = this.props
    const { taskIds, id } = challenge
    const { newValues } = this.state

    const columnStyle = { padding: '20px' }
    if (initial) {
      return (
        <React.Fragment>
          <Row style={{ margin: '10px 20px' }}>
            <Col style={columnStyle} span={12} offset={6}>
              <Task
                task={
                  initial
                    ? require(`../../../challenges/${id}/${
                        taskIds[0]
                      }/index.json`)
                    : require(`../../../challenges/${id}/${task}/index.json`)
                }
              />
            </Col>
          </Row>
          {defaults && (
            <Row
              style={{
                margin: '10px 20px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Col style={columnStyle} span={10}>
                <Editor
                  value={JSON.stringify(
                    this.state.newValues ? this.state.newValues : defaults,
                    null,
                    '\t'
                  )}
                  onChange={val => this.handleEditorChange(val)}
                  mode="json"
                  theme="monokai"
                  name="editor"
                  fontSize={14}
                  style={{ width: '100%' }}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  setOptions={{
                    showLineNumbers: true,
                    tabSize: 2
                  }}
                />
              </Col>
              <Col style={columnStyle} span={14}>
                <ChunkyProduct
                  source={(newValues && newValues.source) || defaults.source}
                  image={(newValues && newValues.image) || defaults.image}
                  opacity={(newValues && newValues.opacity) || defaults.opacity}
                  title={(newValues && newValues.title) || defaults.title}
                  type={(newValues && newValues.type) || defaults.type}
                  subtitle={
                    (newValues && newValues.subtitle) || defaults.subtitle
                  }
                  titleStyle={
                    (newValues && newValues.titleStyle) || defaults.titleStyle
                  }
                  subtitleStyle={
                    (newValues && newValues.subtitleStyle) ||
                    defaults.subtitleStyle
                  }
                />
              </Col>
            </Row>
          )}

          <Row style={{ margin: '10px 20px' }}>
            <Col style={columnStyle} span={12} offset={6}>
              {this.renderButtons()}
            </Col>
          </Row>
        </React.Fragment>
      )
    }
    // return (
    //   <React.Fragment>
    //     <Row style={{ margin: '10px 20px' }}>
    //       <Col style={columnStyle} span={8}>
    //         {this.state.startedTask ? (
    //           <Task
    //             task={require(`../../../challenges/${id}/${
    //               this.state.selectedTask.id
    //             }/index.json`)}
    //           />
    //         ) : (
    //           taskIds &&
    //           taskIds.map(task => (
    //             <TaskCard
    //               task={require(`../../../challenges/${id}/${task}/index.json`)}
    //               onSelectTask={selectedTask => this.selectTask(selectedTask)}
    //             />
    //           ))
    //         )}
    //       </Col>
    //       <Col style={columnStyle} span={16}>
    //         {this.state.startedTask ? (
    //           <Editor
    //             value={JSON.stringify(
    //               this.state.newValues ? this.state.newValues : defaults,
    //               null,
    //               '\t'
    //             )}
    //             onChange={val => this.handleEditorChange(val)}
    //             mode="json"
    //             theme="monokai"
    //             name="editor"
    //             fontSize={14}
    //             style={{ width: '100%' }}
    //             showPrintMargin={true}
    //             showGutter={true}
    //             highlightActiveLine={true}
    //             setOptions={{
    //               showLineNumbers: true,
    //               tabSize: 2
    //             }}
    //           />
    //         ) : (
    //           <div>Start a task in order to use the editor</div>
    //         )}
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col style={columnStyle} span={12}>
    //         {defaults && (
    //           <ChunkyProduct
    //             image={(newValues && newValues.image) || defaults.image}
    //             opacity={(newValues && newValues.opacity) || defaults.opacity}
    //             title={(newValues && newValues.title) || defaults.title}
    //             type={(newValues && newValues.type) || defaults.type}
    //             subtitle={
    //               (newValues && newValues.subtitle) || defaults.subtitle
    //             }
    //             titleStyle={
    //               (newValues && newValues.titleStyle) || defaults.titleStyle
    //             }
    //             subtitleStyle={
    //               (newValues && newValues.subtitleStyle) ||
    //               defaults.subtitleStyle
    //             }
    //           />
    //         )}
    //       </Col>
    //     </Row>
    //   </React.Fragment>
    // )
  }
}
