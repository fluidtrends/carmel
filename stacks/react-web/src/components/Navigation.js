import React, { PureComponent } from 'react'
import { renderResponsive } from '../utils/responsive'
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarFixedAdjust,
  TopAppBarActionItem
} from '@rmwc/top-app-bar'
import { Button } from '@rmwc/button'
import { Select } from '@rmwc/select'
// import { Data } from 'react-chunky'

export default class Navigation extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'en',
      strings: null
    }
    this._onMenuOpen = this.onMenuOpen.bind(this)
    this._onMenuItem = item => this.onMenuItem.bind(this, item)
    this._changeLanguage = language => this.changeLanguage.bind(this, language)
  }

  componentDidMount() {
    const { theme = {} } = this.props
    const { translatedStrings = 'en' } = theme

    Data.Cache.retrieveCachedItem('selectedLanguage')
      .then(lang => {
        this.setState({ selectedLanguage: lang })
      })
      .catch(() => {
        return
      })
    fetch(translatedStrings)
      .then(response => response.json())
      .then(translatedTexts => {
        this.setState({ strings: translatedTexts['navigation'] })
      })
      .catch(() => '')
  }

  onMenuItem(item) {
    this.props.onMenuItem && this.props.onMenuItem(item)
  }

  changeLanguage(language) {
    Data.Cache.cacheItem('selectedLanguage', language).then(() => {
      window.location.reload()
    })
  }

  renderNavigationMenuItem(item, index) {
    const translatedTitle =
      this.props.theme.headerTranslation &&
      this.state.strings &&
      this.state.selectedLanguage
        ? this.state.strings[this.state.selectedLanguage][`title${index}`]
        : item.title

    const MenuIcon = (
      <TopAppBarActionItem
        key={index}
        onClick={this._onMenuItem(item)}
        icon={item.icon}
        style={{
          color: this.props.theme.navigationTintColor,
          marginRight: '0px'
        }}
      />
    )
    const buttonAdditionalStyle = this.props.theme.navigationButtonStyle
      ? this.props.theme.navigationButtonStyle
      : {}
    const MenuButton = (
      <Button
        onClick={this._onMenuItem(item)}
        style={{
          color: this.props.theme.navigationTintColor,
          textShadow: this.props.theme.textShadow,
          marginRight: '0px',
          ...buttonAdditionalStyle
        }}
      >
        {translatedTitle}
      </Button>
    )
    const actionButtonAdditionalStyle = this.props.theme
      .navigationActionButtonStyle
      ? this.props.theme.navigationActionButtonStyle
      : {}
    const MenuActionButton = (
      <Button
        raised
        theme={["secondaryBg", "textPrimaryOnSecondary"]}
        onClick={this._onMenuItem(item)}
        style={{
          color: this.props.theme.navigationTextButton,
          marginRight: '0px',
          ...actionButtonAdditionalStyle
        }}
      >
        {`${translatedTitle}`}
      </Button>
    )
    const { languages } = this.props.theme
    const dropdownAdditionalStyle = this.props.theme.dropdownStyle
      ? this.props.theme.dropdownStyle
      : {}

    const MenuDropdown = (
      <Select
        label={item.title}
        options={languages}
        onChange={evt => this.changeLanguage(evt.target.value)}
        value={this.state.selectedLanguage}
        style={{
          color: this.props.theme.navigationTextButton,
          ...dropdownAdditionalStyle
        }}
      />
    )

    return renderResponsive(
      `menuItem${index++}`,
      <div key={index}/>,
      item.alwaysShowIcon
        ? MenuIcon
        : item.action
        ? MenuActionButton
        : item.id === 'translation'
        ? MenuDropdown
        : MenuButton
    )
  }

  onMenuOpen() {
    this.props.onMenuOpen && this.props.onMenuOpen()
  }

  renderNavigationMenu() {
    var index = 0
    return this.props.menu.map(item =>
      this.renderNavigationMenuItem(item, index++)
    )
  }

  renderNavigationLogo() {
    const image = this.props.navigationUncover
      ? this.props.theme.logoImage
      : this.props.theme.logoLightImage
    const height = this.props.navigationUncover ? 64 : 64
    const responsiveBurger =
      this.props.theme && this.props.theme.logoOnMobile
        ? [
            <TopAppBarActionItem
              key="logo"
              icon="menu"
              style={{ color: this.props.theme.navigationTintColor }}
              onClick={this._onMenuOpen}
            />,
            <img
              key="logoImage"
              src={`${
                this.props.desktop ? '../../../../' : '/'
              }assets/${image}`}
              onClick={
                this.props.menu[0].navigationLogo
                  ? this._onMenuItem(this.props.menu[0])
                  : () => {}
              }
              style={{
                height: `${height}px`,
                position: 'absolute',
                top: 0,
                left: '70px'
              }}
            />
          ]
        : [
            <TopAppBarActionItem
              key="menu"
              icon="menu"
              style={{ color: this.props.theme.navigationTintColor }}
              onClick={this._onMenuOpen}
            />
          ]

    return renderResponsive(
      'logo',
      responsiveBurger,
      <img
        src={`${this.props.desktop ? '../../../../' : '/'}assets/${image}`}
        onClick={
          this.props.menu[0].navigationLogo
            ? this._onMenuItem(this.props.menu[0])
            : () => {}
        }
        style={{
          height: `${height}px`,
          marginLeft: '20px',
          cursor: this.props.menu[0].navigationLogo ? 'pointer' : 'initial'
        }}
      />
    )
  }

  renderDefault() {
    const wrapperAdditionalStyle = this.props.theme.navigationWrapperStyle
      ? this.props.theme.navigationWrapperStyle
      : {}
    return (<>
      <TopAppBar fixed={this.props.layout.fixed} style={{
          backgroundColor: this.props.theme.navigationColor,
          zIndex: 10,
          ...wrapperAdditionalStyle
        }}>
        <TopAppBarRow>
          <TopAppBarSection>
            {this.renderNavigationLogo() }
          </TopAppBarSection>
          <TopAppBarSection style={{
              flex: 4,
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            {this.renderNavigationMenu() }
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>)
  }

  render() {
    return this.renderDefault()
  }
}
