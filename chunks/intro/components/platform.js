import React from 'react'
import { Component } from 'react-dom-chunky'
import { Row, Col } from 'antd'
import AnimatedSvg from '../components/animatedSvg'
import AnimatedSection from './animatedSection'


export default class PlatformSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSvg: false,
      startAnimation: false
    }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  componentWillUpdate() {
    
  }

  animnateSvg = () => {
    this.setState({showSvg: true, startAnimation: true})
  }

  render() {
    return (
      <div>
        <div span={12} offset={6}>
          <h2 style={{fontWeight: 'bold', margin: 0}}>
            Position
          </h2>
        </div>
        
        <Row gutter={32} type={'flex'} onMouseOver={this.animnateSvg} align={'middle'}>
          <Col
            lg={{span: 8, offset: 4}}
            xl={{span: 8, offset: 4}}
            xs={{span: 12, offset: 6}} 
            sm={{span: 12, offset: 6}} 
            md={{span: 12, offset: 6}}
          > 
            <AnimatedSection
              animationType={'slideFromLeft'}
              startAnimation={this.state.startAnimation}
            >
              <AnimatedSvg
                path={'../../../assets/education.svg'}
                style={{height: 500, width: 500}}
                duration={500}
                type={'delayed'}
                id={'educationSvg'}
              />
            </AnimatedSection>
          </Col>
          <Col
            lg={{span: 8, offset: 2}}
            xl={{span: 8, offset: 2}}
            xs={{span: 12, offset: 6}} 
            sm={{span: 12, offset: 6}} 
            md={{span: 12, offset: 6}}
          > 
            <AnimatedSection
              animationType={'slideFromRight'}
              startAnimation={this.state.startAnimation}
            >
              <AnimatedSvg
                path={'../../../assets/developers.svg'}
                style={{height: 500, width: 500}}
                duration={500}
                type={'sync'}
                id={'developersSvg'}
              />
            </AnimatedSection>
          </Col> 
        </Row>
      </div>
      )
    }
    
}
