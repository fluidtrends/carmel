import React from 'react'
import { Component } from 'react-dom-chunky'
import demo from '../../../assets/studio.gif'
import { Row, Col } from 'antd'
import { AnimatedValue, animated, interpolate, controller as spring } from 'react-spring'


export default class WhySection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      marginLeft: '-1000px',
      marginRight: '1000px'
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

  renderFirstColumn(paragraphs) {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
      {
        paragraphs.map( paragraph =>
          <p>{paragraph}</p>
        )
      }
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

  triggerAnimation = () => {

  }

  render() {
    const animation = new AnimatedValue(1)
    const hover = () => spring(animation, { to: 2, tension: 200, friction: 100 }).start()
    return (
      <div style={styles.container} onMouseOver={hover}>
        <div span={12} offset={6}>
          {this.renderTitle()}
        </div>
        {
          whyReasons.map( reason =>
            <Row gutter={32} type={'flex'} align={'middle'}>
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
                  <animated.div
                    style={{
                      marginLeft: animation.interpolate({
                        range: [1, 2],
                        output: ['-1000px', '0']
                      })
                    }}
                  >
                    {this.renderFirstColumn(reason.arguments)}
                  </animated.div>
                </Col>
                <Col
                  lg={{span: 8, offset: 2}}
                  xl={{span: 8, offset: 2}}
                  xs={{span: 12, offset: 6}} 
                  sm={{span: 12, offset: 6}} 
                  md={{span: 12, offset: 6}}
                >
                  <animated.div
                    style={{
                      marginLeft: animation.interpolate({
                        range: [1, 2],
                        output: ['1000px', '0']
                      })
                    }}
                  >
                    {this.renderSecondColumn(reason.pathToGif)}
                  </animated.div>
                </Col>
            </Row>
          )
        }
      </div>
      )
    }
    
}

const whyTitle = 'Why invest in Carmel'

const whyReasons = [
  {
    title: 'TweaknLearn',
    arguments: [
      'Introducing the Tweek and learn concept',
      'In Carmel you start with a product and you will learn by tweaking it',
      'Choose from different tempplates ?  I don\'t know.... need some text here. pls help ......'
    ],
    pathToGif: '../../../assets/studio.gif'
  },
  {
    title: 'Challenges micro learning',
    arguments: [
      'We teach you to code using challenges',
      'Challenges contain small task for you to complete and learn to code',
      'Complete challanges and get badges .... gg robi great text there'
    ],
    pathToGif: '../../../assets/challenges.gif'
  }
]

const styles = {
  container: {

  },
  columnContainer: {
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  columns: {
    margin: '20px',
    maxWidth: '600px'
  }
}