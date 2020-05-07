import React, { PureComponent } from 'react'
import {
  Drawer,
  DrawerHeader,
  DrawerContent
} from '@rmwc/drawer'

import {
  ListItem,
  ListItemPrimaryText
} from '@rmwc/list'

import { Select } from '@rmwc/select'

// import { Data } from '@carmel/react-stack'


/**
 *  This is the Chunky Web Navigation Drawer that is usually used with a navigator
 *  to control opening and closing the drawer.
 *
 *  @see https://github.com/react-chunky/react-dom-chunky
 *
 *  @example
 *  // Render a closed drawer with the default style and one menu item
 *  <Drawer
 *    menu={[{title: "Home"}]}
 *    onClose={this._onDrawerClose}/>
 *  @example
 *  // Render an open drawer with three menu items and a light gray header
 *  <Drawer
 *    menu={[{title: "Home"}, {title: "About"}, {title: "Contact"}]}
 *    open={true}
 *    style={{headerStyle: '#eeeeee'}}
 *    onClose={this._onDrawerClose}/>
 */
export default class DrawerComponent extends PureComponent {

 /**
  *  An instance of this class represents a Navigation Drawer element that
  *  is meant to be displayed as an overlay on top of the visible window. The drawer
  *  takes a list of menu items as input and displays them using a default
  *  style can be overwritten. It can also be closed and opened.
  *  @summary The Drawer element to be used in a navigation menu
  *  @author I. Dan Calinescu <http://github.com/idancali>
  *  @param {Object} props Drawer properties
  *  @param {Array<Object>} props.menu a list of menu items to display
  *  @param {String} props.menu.title the title of a menu item
  *  @param {String} props.headerStyle the Drawer header style
  *  @param {boolean} props.open whether the Drawer is open or closed
  *  @param {function} props.onClose called when the Drawer is closed
  */
  constructor (props) {
    super(props)

    this.state = {
      selectedLanguage: 'en',
      strings: null
    }

    /** Will be called when the drawer is closed **/
    this._onClosePressed = this._onClose.bind(this)

    this._onMenuItem = (item) => this.onMenuItem.bind(this, item)
    this._changeLanguage = language => this.changeLanguage.bind(this, language)
  }

  componentDidMount() {
    const { theme = {} } = this.props
    Data.Cache.retrieveCachedItem('selectedLanguage')
      .then(lang => {
        this.setState({ selectedLanguage: lang })
      })
      .catch((e) => {
        return
      })
    fetch(theme.translatedStrings || 'en')
      .then(response => response.json())
      .then(translatedTexts => {
        this.setState({ strings: translatedTexts['navigation'] })
      })
      .catch(() => '')
  }

  changeLanguage(language) {
    Data.Cache.cacheItem('selectedLanguage', language).then(() => {
      window.location.reload()
    })
  }

  /**
   *  Renders this drawer
   */
  render () {
    return (<Drawer
      modal
      open={this._open}
      onClose={this._onClosePressed}>
      <DrawerHeader style={this._headerStyle}>
        {this.props.theme? <img src={`assets/${this.props.theme.logoLightImage}`} style={{width: '120px', marginTop: 10}}/>: <div />}
      </DrawerHeader>
      <DrawerContent>
        { this.renderMenu() }
      </DrawerContent>
    </Drawer>)
  }

  /**
   *  Whether the drawer is meant to be displayed as open or closed
   *
   *  @returns {boolean} whether the drawer is open or closed, false by default
   */
  get _open () {
    return this.props.open || false
  }

  /**
   *  Uses the given style or a default one if one wasn't passed through the properties.
   *  Override this if you want to completely take over the header style.
   */
  get _headerStyle () {
    return this.props.headerStyle || styles.header
  }

  /**
   *  The list of menu items
   *
   *  @returns {Array<Object>} a list of passed menu objects, or an empty list
   **/
  get _menu () {
    return this.props.menu || []
  }

  /**
   *  Called when the drawer is asked by the user to close
   */
  _onClose () {
    this.props.onClose && this.props.onClose()
  }

  onMenuItem (item) {
    this.props.onMenuItem && this.props.onMenuItem(item)
  }

  /**
   *  Renders a list o menu items, as
   *
   *  @returns {Array<ListItem>} a list of {ListItem}
   */
  renderMenu () {
    var index = 0
    const { theme = {} } = this.props
    const { languages } = theme

    return this._menu.map(item => {
      const translatedTitle =
      theme.headerTranslation &&
      this.state.strings &&
      this.state.selectedLanguage
        ? this.state.strings[this.state.selectedLanguage][`title${index}`]
        : item.title
      return (<ListItem
        onClick={this._onMenuItem(item)}
        key={`menuItem${index++}`}>
        {
          item.id === 'translation' ?
          <Select
            label={item.title}
            options={languages}
            onChange={evt => this.changeLanguage(evt.target.value)}
            value={this.state.selectedLanguage}
            style={{
              color: theme.navigationTextButton
            }}
          />
          :
          <ListItemPrimaryText>{ translatedTitle }</ListItemPrimaryText>
        }
      </ListItem>)
    })
  }
}

/**
 * Default styles
 */
const styles = {
  header: {
    backgroundColor: '#eeeeee'
  }
}
