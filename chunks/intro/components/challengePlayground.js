import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col } from 'antd'
import Task from './playground/task'
import TaskCard from './playground/taskCard'
import Editor from './playground/editor'
import ChunkyProduct from './playground/product'

export default class ChallengePlayground extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startedTask: false,
      selectedTask: null
    }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  selectTask = selectedTask => {
    this.setState({ selectedTask, startedTask: true })
  }

  resetTask = () => {
    this.setState({ startedTask: false, selectTask: null })
  }

  handleEditorChange = val => {
    if (JSON.parse(val)) {
      this.setState({ newValues: JSON.parse(val) })
    }
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
            <Col style={columnStyle} span={10}>
              <Task
                goBack={() => this.props.giveUp()}
                verify={() =>
                  this.props.verify(taskIds[0], this.state.newValues)
                }
                task={require(`../../../challenges/${id}/${
                  taskIds[0]
                }/index.json`)}
              />
            </Col>
            <Col style={columnStyle} span={14}>
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
          </Row>
          <Row>
            <Col style={columnStyle} span={12}>
              {defaults && (
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
              )}
            </Col>
          </Row>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <Row style={{ margin: '10px 20px' }}>
          <Col style={columnStyle} span={8}>
            {this.state.startedTask ? (
              <Task
                goBack={() => this.resetTask()}
                verify={() => this.props.verify(this.state.selectedTask.id)}
                task={require(`../../../challenges/${id}/${
                  this.state.selectedTask.id
                }/index.json`)}
              />
            ) : (
              taskIds &&
              taskIds.map(task => (
                <TaskCard
                  task={require(`../../../challenges/${id}/${task}/index.json`)}
                  onSelectTask={selectedTask => this.selectTask(selectedTask)}
                />
              ))
            )}
          </Col>
          <Col style={columnStyle} span={16}>
            {this.state.startedTask ? (
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
            ) : (
              <div>Start a task in order to use the editor</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col style={columnStyle} span={12}>
            {defaults && (
              <ChunkyProduct
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
            )}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
