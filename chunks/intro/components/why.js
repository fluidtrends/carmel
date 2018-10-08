import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col } from 'antd'
import { animated, Spring, interpolate } from 'react-spring'
import { Button, ButtonIcon } from 'rmwc/Button'


export default class WhySection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startAnimation: false
    }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  componentWillUpdate() {
    
  }

  renderTitle() {
    return (
      <h2 style={{fontWeight: 'bold', margin: 0}}>
        {whyTitle}
      </h2>
    )
  }

  renderFirstColumn(fileName) {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Components.Text source={`local:${fileName}`}/>
      </div>
    )
  }

  renderSecondColumn(path) {
    return (
      <div> 
        <img src={path} style={{width: '600px', height: '400px' }}/>
      </div>
    )
  }

  onContinue() {
    this.props.onContinue && this.props.onContinue()
  }

  render() {
    return (
      <div>
        <div span={12} offset={6}>
          {this.renderTitle()}
        </div>
        {
          whyReasons.map( reason =>
            <Row gutter={32} type={'flex'} align={'middle'} onMouseOver={() => {this.setState({startAnimation: true})}} key={reason.id}>
              <Col span={20} offset={4}>
                <h3>{reason.title}</h3>
              </Col>
                <Col
                  lg={{span: 8, offset: 4}}
                  xl={{span: 8, offset: 4}}
                  xs={{span: 12, offset: 6}} 
                  sm={{span: 12, offset: 6}} 
                  md={{span: 12, offset: 6}}
                > 
                {
                  this.state.startAnimation ?
                  <Spring 
                    native 
                    from={{ x: '-100%'}} to={{ x: '0'}}
                    config={{ tension: 30, friction: 40 }}
                  >
                    {({x}) => (
                      <animated.div
                        style={{
                          transform: interpolate([x], (x) => `translate(${x}`)
                        }}
                      >
                        {this.renderFirstColumn(reason.arguments)}
                      </animated.div>
                    )}
                  </Spring>
                  :
                  <div style={{height: '200px'}}/>
                }
                  
                </Col>
                <Col
                  lg={{span: 8, offset: 2}}
                  xl={{span: 8, offset: 2}}
                  xs={{span: 12, offset: 6}} 
                  sm={{span: 12, offset: 6}} 
                  md={{span: 12, offset: 6}}
                >
                  {
                    this.state.startAnimation ?
                    <Spring 
                      native 
                      from={{ x: '100%'}} to={{ x: '0'}}
                      config={{ tension: 30, friction: 40 }}
                    >
                    {({x}) => (
                      <animated.div
                        style={{
                          transform: interpolate([x], (x) => `translate(${x}`)
                        }}
                      >
                        {this.renderSecondColumn(reason.pathToGif)}
                      </animated.div>
                    )}
                    </Spring>
                    :
                    <div style={{height: '200px'}}/>
                  } 
                </Col>
            </Row>
        )
        }
        <div span={12} offset={6} style={{display: 'flex', justifyContent: 'center'}}>
        <Button
          theme='secondary-bg text-primary-on-secondary'
          style={{ marginBottom: '40px', marginTop: '40px' }}
          raised
          onClick={this._onContinue}>
          <ButtonIcon icon='done' />
          {`Download the studio`}
        </Button>
        </div>
      </div>
      )
    }
    
}

const whyTitle = 'Why invest in Carmel'


// add this to github
const whyReasons = [
  {
    id: 1,
    title: 'TweaknLearn',
    arguments: 'reason1',
    pathToGif: '../../../assets/studio.gif'
  },
  {
    id: 2,
    title: 'Challenges micro learning',
    arguments: 'reason2',
    pathToGif: '../../../assets/challenges.gif'
  },
  {
    id: 3,    
    title: 'Deploy in no time',
    arguments: 'reason3',    
    pathToGif: '../../../assets/challenges.gif'
  }
]
