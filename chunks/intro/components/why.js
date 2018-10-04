import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col } from 'antd'
import { AnimatedValue, animated, controller as spring } from 'react-spring'
import AnimatedSvg from '../components/animatedSvg'


export default class WhySection extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  render() {
    const animation = new AnimatedValue(1)
    const hover = () => spring(animation, { to: 2, tension: 200, friction: 100 }).start()
    return (
      <div style={styles.container}>
        <div span={12} offset={6}>
          {this.renderTitle()}
        </div>
        {
          whyReasons.map( reason =>
            <Row gutter={32} type={'flex'} align={'middle'} onMouseOver={hover} key={reason.id}>
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