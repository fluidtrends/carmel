import React from 'react'
import Component from '../Component'
import Text from './Text'
import { renderResponsive } from '../utils/responsive'
import {
  MenuAnchor,
  SimpleMenu,
  MenuItem
} from '@rmwc/menu'
// import { Button } from '@rmwc/button'
import { Icon } from '@rmwc/icon'
import {
  Drawer,
  DrawerContent
} from '@rmwc/drawer'
import {
  List,
  ListItem,
  ListItemText
} from '@rmwc/list'

export default class Dashboard extends Component {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._onSectionSelect = (section) => this.onSectionSelect.bind(this, section)
    this._onSectionNavigate = (direction) => this.onSectionNavigate.bind(this, direction)
    this._onCompactSectionSelect = this.onCompactSectionSelect.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onSectionSelect (section) {
    this.props.onSectionSelect && this.props.onSectionSelect(section)
  }

  onSectionNavigate (direction) {
    this.props.onSectionNavigate && this.props.onSectionNavigate(direction)
  }

  onCompactSectionSelect (e) {
    this.onSectionSelect(this.props.sections[e.detail.index])
  }

  renderSection (section, index) {
    const isSelected = (section.path === this.props.section.path)

    return <ListItem
      key={`section${index}`}
      onClick={this._onSectionSelect(section)}
      style={{
        fontWeight: section.action ? 800 : 300,
        color: isSelected ? this.props.sectionSelectedColor : (section.actionColor || this.props.sectionColor)
      }}>
      <ListItemText>{section.title}</ListItemText>
    </ListItem>
  }

  renderCompactSection (section, index) {
    return <MenuItem
      key={`section${index}`}>
      { section.menuTitle }
    </MenuItem>
  }

  renderSections () {
    var index = 0
    return <List>
      { this.props.sections.map(section => this.renderSection(section, index++)) }
    </List>
  }

  get compactSections () {
    var index = 0
    return this.props.sections.map(section => this.renderCompactSection(section, index++))
  }

  renderSidebar () {
    return <Drawer permanent style={{
      alignSelf: 'stretch',
      paddingLeft: '10px',
      backgroundColor: this.props.sectionsBackgroundColor}}>
      <DrawerContent>
        { this.renderSections() }
      </DrawerContent>
    </Drawer>
  }

  // renderSectionBar () {
  //   if (this.props.renderContent) {
  //     return <div />
  //   }

  //   return <div style={{
  //     alignSelf: 'stretch',
  //     backgroundColor: this.props.sectionsBackgroundColor,
  //     textAlign: 'left',
  //     paddingLeft: '20px'
  //   }}>
  //     <MenuAnchor style={{
  //       padding: '10px'
  //     }}>
  //       <Button
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           color: this.props.sectionSelectedColor
  //         }}
  //         onClick={evt => this.setState({'compactMenuIsOpen': !this.state.compactMenuIsOpen})}>
  //         { this.props.section.menuTitle }
  //         <Icon use='expand_more' style={{
  //           color: this.props.sectionSelectedColor
  //         }} />
  //       </Button>

  //       <SimpleMenu
  //         onSelected={this._onCompactSectionSelect}
  //         open={this.state.compactMenuIsOpen}
  //         onClose={evt => this.setState({compactMenuIsOpen: false})}>
  //         {this.compactSections }
  //       </SimpleMenu>
  //     </MenuAnchor>

  //   </div>
  // }

  renderSectionContent () {
    return <div style={{
      flex: 1,
      minHeight: '100vh'
    }}>
      { this.renderContentComponent() }

    </div>
  }

  renderNav () {
    return <div style={{
      display: 'flex',
      flex: 1,
      marginBottom: 40,
      justifyContent: 'space-around'
    }}>
      <Icon onClick={this._onSectionNavigate(-1)} use='navigate_before' style={{ fontSize: 48, cursor: 'pointer', color: this.props.sectionSelectedColor}} />
      <Icon onClick={this._onSectionNavigate(1)} use='navigate_next' style={{ fontSize: 48, cursor: 'pointer', color: this.props.sectionSelectedColor}} />
    </div>
  }

  renderCompactSectionContent () {
    return <div>
      {this.renderContentComponent()}
      {this.props.nav && this.renderNav()}
    </div>
  }

  get defaultReader () {
    return <div style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }}>
      { this.renderSidebar() }
      { this.renderSectionContent() }
    </div>
  }

  get compactReader () {
    return <div style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ padding: '10px' }}>
        { this.renderCompactSectionContent() }
      </div>
    </div>
  }

  renderText () {
    return renderResponsive('text',
      <Text source={this.props.section.text} style={{
        paddingBottom: '60px'
      }} />,
      <Text source={this.props.section.text} style={{
        paddingBottom: '60px'
      }} />)
  }

  renderContentComponent () {
    return (this.props.renderContent ? this.props.renderContent() : this.renderText())
  }

  renderDefault () {
    if (!this.props.section) {
      return <div />
    }

    return renderResponsive('reader',
      this.compactReader,
      this.defaultReader)
  }

  renderComponent () {
    return this.renderDefault()
  }
}
