import React from 'react'
import { Component } from 'react-dom-chunky'
import { Row, Col } from 'antd'
import AnimatedSvg from '../components/animatedSvg'
import AnimatedSection from './animatedSection'


export default class PlatformSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSvg: false
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
        {platformTitle}
      </h2>
    )
  }

  animnateSvg = () => {
    this.setState({showSvg: true})
  }

  render() {
    return (
      <div style={styles.container}>
        <div span={12} offset={6}>
          {this.renderTitle()}
        </div>
        
        <Row gutter={32} type={'flex'} onMouseEnter={this.animnateSvg} align={'middle'}>
          <Col span={20} offset={4}>
          <AnimatedSection
            animationType={'slideFromLeft'}
          >
            <AnimatedSvg
              path={'../../../assets/education.svg'}
              style={{height: 500, width: 500}}
              duration={500}
              type={'delayed'}
            />
          </AnimatedSection>
          </Col> 
        </Row>
      </div>
      )
    }
    
}

const platformTitle = 'Platform'


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