import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import Typist from 'react-typist'
import Spritesheet from 'react-responsive-spritesheet'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import Slider from 'react-slick'
import { Form, Input, Icon, Row, Col, Avatar, Tabs, notification } from 'antd'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Fab } from 'rmwc/Fab'
import { ShapeContainer } from 'rmwc/Shape'
import { Elevation } from 'rmwc/Elevation'
import { IconButton } from 'rmwc/IconButton'
import Shell from './shell'
import fs from 'fs-extra'
import path from 'path'

const FormItem = Form.Item
const HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const CARMEL_HOME = path.resolve(HOME, '.carmel')

export default class NewProduct extends Component {
  constructor (props) {
    super(props)

    this.state = { selectedTemplateId: 0, creatingProduct: false }
    this._shell = new Shell()

    this._nextThumb = this.nextThumb.bind(this)
    this._prevThumb = this.prevThumb.bind(this)
    this._nextTemplate = this.nextTemplate.bind(this)
    this._prevTemplate = this.prevTemplate.bind(this)
    this._selectThumb = (id) => this.selectThumb.bind(this, id)
    this._onTemplateChanged = this.onTemplateChanged.bind(this)
    this._onThumbChanged = this.onThumbChanged.bind(this)
    this._scrollToProductForm = this.scrollToProductForm.bind(this)
    this._cancel = this.cancel.bind(this)
    this._createNewProduct = this.createNewProduct.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
  }

  get shell () {
    return this._shell
  }

  template (template) {
    const image = `http://files.carmel.io/covers/${template.cover}.r.png`
    console.log(template)
    return <div
      key={template.id}
      style={{
        display: 'flex',
        width: '600px',
        height: '300px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <img src={image} style={{
        objectFit: 'cover',
        height: '300px',
        width: '600px'
      }} />
      <div style={{
        display: 'flex',
        marginTop: '10px',
        flex: 1
      }}>
        <Typography use='subtitle1' tag='h2' style={{
          color: '#00bcd4',
          flex: 1
        }}>
          { template.name }
        </Typography>
        <Typography use='caption' tag='h2'>
          <ChipSet>
            <Chip style={{backgroundColor: '#EEEEEE'}}> <ChipText style={{ color: '#00bcd4' }}>Personal</ChipText> </Chip>
            <Chip style={{backgroundColor: '#EEEEEE'}}> <ChipText style={{ color: '#00bcd4' }}>Photography</ChipText> </Chip>
            <Chip style={{backgroundColor: '#EEEEEE'}}> <ChipText style={{ color: '#00bcd4' }}>Simple</ChipText> </Chip>
          </ChipSet>
        </Typography>
      </div>
    </div>
  }

  selectThumb (id) {
    if (this.state.selectedTemplateId === id) {
      return
    }
    this.templates.slickGoTo(id)
  }

  scrollToProductForm () {
    this.parallax.scrollTo(2)
    this.titleField.focus()
  }

  nextTemplate () {
    this.templates.slickNext()
  }

  prevTemplate () {
    this.templates.slickPrev()
  }

  nextThumb () {
    this.templateThumbs.slickNext()
  }

  prevThumb () {
    this.templateThumbs.slickPrev()
  }

  onTemplateChanged (oldId, newId) {
    this.setState({ selectedTemplateId: newId })
    this.templateThumbs.slickGoTo(newId)
  }

  onThumbChanged (oldId, newId) {
  }

  cancel () {
    this.props.onCancel && this.props.onCancel()
  }

  createNewProduct () {
    this.setState({ creatingProduct: true })

    const template = this.props.session.templates[this.state.selectedTemplateId]
    const title = this.state.title

    setTimeout(() => {
      this.shell.exec('createProduct', { title, template })
      .then((product) => {
        this.props.onCreate && this.props.onCreate({ title, template, product })
      })
      .catch((error) => {
        this.setState({ creatingProduct: false })
        notification.error({
          message: 'The product could not be created',
          description: error.message
        })
      })
    }, 500)
  }

  templateThumb (template) {
    const image = `http://files.carmel.io/covers/${template.cover}.r.png`

    const selected = (`${this.state.selectedTemplateId}` === `${template.id}`)
    const opacity = (selected ? 1 : 0.25)
    const elevation = (selected ? 25 : 0)

    return <div
      key={template.id}
      style={{
        padding: `0px`,
        margin: '0px',
        height: '40px',
        width: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <Elevation z={elevation}>
        <Button
          onClick={this._selectThumb(template.id)}
          style={{
            padding: '0px',
            margin: '0px',
            height: `40px`,
            width: `60px`
          }}>
          <img src={image} style={{
            padding: '0px',
            margin: '0px',
            border: `${selected ? 0 : 5}px solid #ffffff`,
            opacity,
            objectFit: 'cover',
            height: `40px`,
            width: `60px`
          }} />
        </Button>
      </Elevation>
    </div>
  }

  renderTemplates () {
    return <div
      key='templates'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '750px'
      }}>
      <div style={{
      }}>
        <Fab icon='navigate_before' mini style={{}} onClick={this._prevTemplate} />
      </div>
      <div style={{
        width: '600px',
        height: '300px',
        margin: '20px'
      }}>
        <Slider
          beforeChange={this._onTemplateChanged}
          ref={(ref) => this.templates = ref}
          dots={false}
          infinite
          speed={500}
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          style={{
            display: 'flex',
            flex: 1,
            width: '600px',
            height: '300px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          { this.props.session.templates.map(t => this.template(t)) }
        </Slider>
      </div>
      <div style={{
      }}>
        <Fab icon='navigate_next' mini style={{}} onClick={this._nextTemplate} />
      </div>
    </div>
  }

  renderTemplateThumbs () {
    return <div
      key='thumbs'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '70px',
        width: '750px'
      }}>
      <div style={{
        width: '600px',
        height: '40px',
        margin: '20px'
      }}>
        <Slider
          beforeChange={this._onThumbChanged}
          ref={(ref) => this.templateThumbs = ref}
          dots={false}
          infinite
          speed={500}
          arrows={false}
          slidesToShow={9}
          slidesToScroll={1}
          style={{
            display: 'flex',
            flex: 1,
            width: '600px',
            height: '40px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          { this.props.session.templates.map(t => this.templateThumb(t)) }
        </Slider>
      </div>
    </div>
  }

  get creatingMessage () {
    return `This is harder than it looks, trust me. But I shall prevail. I think ...`
  }

  get initializationMessage () {
    return `I'm cooking something special just for you. Just a sec ...`
  }

  renderFormContent () {
    if (!this.props.session) {
      return <Components.Loading message={this.initializationMessage} />
    }

    if (this.state.creatingProduct) {
      return <Components.Loading message={this.creatingMessage} />
    }

    return [<Input
      key='title'
      ref={(ref) => this.titleField = ref}
      value={this.state.title}
      style={{ height: '48px', width: '600px', marginTop: '10px' }}
      onChange={val => this.setState({ title: val.target.value })}
      prefix={<Icon type='edit' style={{ color: 'rgba(0,0,0,.25)' }} />}
      placeholder={`First, give it a really cool name`} />,
      <Typography
        use='body2'
        tag='h2'
        key='prompt'
        style={{
          color: '#B0BEC5',
          marginTop: '20px',
          marginBottom: '20px',
          textAlign: 'left',
          width: '600px'
        }}>
        { `Next, choose a slick template` }
        <Icon type='arrow-down' style={{ color: '#B0BEC5' }} />
      </Typography>,
      this.renderTemplates(),
      this.renderTemplateThumbs(),
      <CardActions
        key='actions'
        style={{ justifyContent: 'center', marginTop: '10px' }}>
        <CardActionButtons>
          <Button
            raised
            disabled={!this.state.title}
            onClick={this._createNewProduct}
            style={{ opacity: `${this.state.title ? 1 : 0.5}` }}
            theme='secondary-bg text-primary-on-secondary'>
            <ButtonIcon use='done' />
            { `Ok, let's create it` }
          </Button>
        </CardActionButtons>
      </CardActions>]
  }

  renderMainContent () {
    const header = (this.state.creatingProduct ? `One fresh Carmel Product coming right up ...` : `Alright, let's create a new Carmel Product`)

    return <Card
      key='container'
      style={{
        width: '750px',
        margin: '20px',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        opacity: 1
      }}>
      <div
        key='header'
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '-60px'
        }}>
        <img src={'../../../../assets/chunky-logo.gif'} style={{ display: 'block', width: '100px', height: '100px' }} />
        <Typography use='title' tag='h2' style={{ color: '#00bcd4', marginTop: '-10px', textAlign: 'center' }}>
          { header }
        </Typography>
      </div>
      { this.renderFormContent() }
    </Card>
  }

  renderCancel () {
    if (this.state.creatingProduct) {
      return <div />
    }

    return <Button
      onClick={this._cancel}
      style={{
        marginTop: '20px'
      }}>
      { `Cancel` }
    </Button>
  }

  render () {
    if (!this.props.offset) {
      return <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        { this.renderMainContent() }
        { this.renderCancel() }
      </div>
    }

    return <Parallax.Layer
      offset={this.props.offset}
      speed={1}
      key='form'
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
      { this.renderMainContent() }
    </Parallax.Layer>
  }
}
