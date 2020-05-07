import React, { PureComponent } from 'react'
import Component from '../Component'
import { renderResponsive } from '../utils/responsive'
import {
  List,
  ListItem,
  ListItemText
} from '@rmwc/list'
import { Button } from '@rmwc/button'

export default class Footer extends Component {

  constructor (props) {
    super(props)
  }

  renderFooterSectionElement (element) {
    return (<ListItem key={element.id} style={{cursor: 'pointer'}} onClick={this.triggerEvent(element.id, {handler: element.link})} >
      <Button onClick={this.triggerEvent(element.id, {handler: element.link})} style={{color: this.props.theme.footerTintColor, textAlign: 'left'}}>
        { element.title }
      </Button>
    </ListItem>)
  }

  renderFooterSection (section) {
    return (<div key={`footerSection${section.id}`} style={{
      marginRight: '20px'
    }}>
      <List>
        <ListItem style={{marginLeft: '15px'}}>
          <ListItemText style={{color: this.props.theme.footerHeaderColor}}> {section.title} </ListItemText>
        </ListItem>
        { section.elements.map(element => this.renderFooterSectionElement(element)) }
      </List>
    </div>)
  }

  renderFooterSections () {
    return this.props.footer.sections.map(section => this.renderFooterSection(section))
  }

  renderFooterLegal (compact) {
    return (<div style={{display: 'flex',
      flex: '1',
      cursor: 'pointer',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '100vw',
      backgroundColor: this.props.theme.footerBottomColor,
      flexDirection: (compact ? 'row' : 'column')}}
      onClick={() => {window.open('https://chunky.io')}}
      >
      <List style={{
        display: 'flex',
        flex: '1',
        alignSelf: 'centers',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}>
        <ListItem style={{color: this.props.theme.footerHeaderColor,
          alignSelf: 'center'
        }}>
          <ListItemText> {this.props.info.watermark} </ListItemText>
        </ListItem>
      </List>
      <List style={{
        display: 'flex',
        flex: '1',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}>
        <ListItem style={{marginRight: '20px', color: this.props.theme.footerHeaderColor,
          alignSelf: 'center'
        }}>
          <ListItemText> {this.props.info.copyright} </ListItemText>
        </ListItem>
      </List>
    </div>)
  }

  renderDefault () {
    const isSmallScreen = this.props.width < 1224
    const respFooterWrapper = isSmallScreen ? 'column' : 'row'
    return (<div style={{backgroundColor: this.props.theme.footerColor,
      minHeight: '80px',
      padding: '0px',
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'flex-start',
      flexDirection: `${respFooterWrapper}`,
      justifyContent: 'center',
      color: '#ECEFF1'}}>
      <div style={{
        minHeight: '80px',
        padding: '10px',
        display: 'flex',
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <img src={`assets/${this.props.theme.logoLightImage}`} style={{width: '150px'}}/>
      </div>
      <div style={{
        backgroundColor: this.props.theme.footerColor,
        minHeight: '80px',
        padding: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        alignSelf: isSmallScreen ? 'center' : 'flex-end',
        flex: 1,
        alignItems: 'start',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#ECEFF1'
      }}>
        { this.renderFooterSections() }
      </div>
      { renderResponsive('footer-bottom', this.renderFooterLegal(), this.renderFooterLegal(true)) }
    </div>)
  }

  render () {
    return this.renderDefault()
  }

}
