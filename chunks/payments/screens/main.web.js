import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@rmwc/card'
import { Row, Col, Badge } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
import { Icon } from '@rmwc/icon'
import TemplatePreview from '../components/templatePreview'
import PlanPreview from '../components/planPreview'
import ChunkPreview from '../components/chunkPreview'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon
} from '@rmwc/toolbar'

const Templates = [{
  categoryTitle: "New",
  categoryId: "0",
  templates: [{
    id: "0",
    title: "Bike Shop",
    imageSmall: 'http://files.carmel.io/covers/bike-preview.png'
  },
  {
    id: "1",
    title: "Family Album",
    imageSmall: 'http://files.carmel.io/covers/brothers-preview.png'
  },
  {
    id: "2",
    title: "School",
    imageSmall: 'http://files.carmel.io/covers/child-preview.png'
  }]
}, {
  categoryTitle: "Popular",
  categoryId: "1",
  templates: [{
    id: "0",
    title: "Personal Blog",
    imageSmall: 'http://files.carmel.io/covers/coffee-preview.png'
  }, {
    id: "1",
    title: "Hiking Journal",
    imageSmall: 'http://files.carmel.io/covers/cycling-preview.png'
  }]
}, {
  categoryTitle: "Personal",
  categoryId: "2",
  templates: [{
    id: "0",
    title: "Fatherhood Journal",
    imageSmall: 'http://files.carmel.io/covers/dad-preview.png'
  }, {
    id: "1",
    title: "Personal Blog",
    imageSmall: 'http://files.carmel.io/covers/girl-preview.png'
  },
  {
    id: "2",
    title: "Family Album",
    imageSmall: 'http://files.carmel.io/covers/brothers-preview.png'
  },
  {
    id: "3",
    title: "Hiking Journal",
    imageSmall: 'http://files.carmel.io/covers/cycling-preview.png'
  },
  {
    id: "4",
    title: "Random Thoughts",
    imageSmall: 'http://files.carmel.io/covers/coffee-preview.png'
  }]
}, {
  categoryTitle: "Business",
  categoryId: "3",
  templates: [{
    id: "0",
    title: "Real Estate",
    imageSmall: 'http://files.carmel.io/covers/hong-kong-preview.png'
  }, {
    id: "1",
    title: "Bike Shop",
    imageSmall: 'http://files.carmel.io/covers/bike-preview.png'
  }, {
    id: "2",
    title: "School",
    imageSmall: 'http://files.carmel.io/covers/child-preview.png'
  }]
}]

const Chunks = [{
  categoryTitle: "New",
  categoryId: "0",
  chunks: [{
    id: "0",
    title: "Twitter Feed",
    imageSmall: 'http://files.carmel.io/covers/twitter-preview.png'
  },
  {
    id: "1",
    title: "Blog",
    imageSmall: 'http://files.carmel.io/covers/desk-preview.png'
  },
  {
    id: "2",
    title: "Testimonials",
    imageSmall: 'http://files.carmel.io/covers/concert-preview.png'
  }]
}, {
  categoryTitle: "Popular",
  categoryId: "1",
  chunks: [{
    id: "0",
    title: "Blog",
    imageSmall: 'http://files.carmel.io/covers/desk-preview.png'
  }, {
    id: "1",
    title: "Features",
    imageSmall: 'http://files.carmel.io/covers/gifts-preview.png'
  }]
}, {
  categoryTitle: "Marketing",
  categoryId: "2",
  chunks: [{
    id: "0",
    title: "Blog",
    imageSmall: 'http://files.carmel.io/covers/desk-preview.png'
  },
  {
    id: "1",
    title: "Features",
    imageSmall: 'http://files.carmel.io/covers/gifts-preview.png'
  },
  {
    id: "2",
    title: "Testimonials",
    imageSmall: 'http://files.carmel.io/covers/concert-preview.png'
  },
  {
    id: "3",
    title: "Twitter Feed",
    imageSmall: 'http://files.carmel.io/covers/twitter-preview.png'
  }]
}, {
  categoryTitle: "Functional",
  categoryId: "3",
  chunks: [{
    id: "0",
    title: "Authentication",
    imageSmall: 'http://files.carmel.io/covers/laptop-preview.png'
  }, {
    id: "1",
    title: "Email Integration",
    imageSmall: 'http://files.carmel.io/covers/email-preview.png'
  }]
}]

const Plans = [{
  categoryTitle: "New",
  categoryId: "0",
  plans: [{
    id: "0",
    title: "Landing Page Setup",
    imageSmall: 'http://files.carmel.io/covers/hello-preview.png'
  },
  {
    id: "1",
    title: "Product Promotion",
    imageSmall: 'http://files.carmel.io/covers/blog-preview.png'
  },
  {
    id: "2",
    title: "Book Promotion",
    imageSmall: 'http://files.carmel.io/covers/book-preview.png'
  }]
}, {
  categoryTitle: "Popular",
  categoryId: "1",
  plans: [{
    id: "0",
    title: "Blog",
    imageSmall: 'http://files.carmel.io/covers/blog-preview.png'
  }, {
    id: "1",
    title: "Twitter Integration Setup",
    imageSmall: 'http://files.carmel.io/covers/twitter-preview.png'
  }]
}, {
  categoryTitle: "Landing Pages",
  categoryId: "2",
  plans: [{
    id: "0",
    title: "Landing Page Setup",
    imageSmall: 'http://files.carmel.io/covers/hello-preview.png'
  },
  {
    id: "1",
    title: "Brand New Landing Page",
    imageSmall: 'http://files.carmel.io/covers/blog-preview.png'
  }]
}, {
  categoryTitle: "Cloud",
  categoryId: "3",
  plans: [{
    id: "0",
    title: "Private Cloud Setup",
    imageSmall: 'http://files.carmel.io/covers/laptop-preview.png'
  }, {
    id: "1",
    title: "Email Configuration",
    imageSmall: 'http://files.carmel.io/covers/email-preview.png'
  }]
}]

export default class CreateScreen extends Screen {

  constructor (props) {
    super(props)

    this._changeCategory = this.changeCategory.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get categories() {
    switch (this.state.typeId) {
      case 1:
        return Chunks.map(c => ({ id: c.categoryId, title: c.categoryTitle }))
      case 2:
        return Plans.map(c => ({ id: c.categoryId, title: c.categoryTitle }))
      default:
    }
    return Templates.map(c => ({ id: c.categoryId, title: c.categoryTitle }))
  }

  get templates() {
    return Templates[this.state.categoryId || 0].templates
  }

  get chunks() {
    return Chunks[this.state.categoryId || 0].chunks
  }

  get plans() {
    return Plans[this.state.categoryId || 0].plans
  }

  changeCategory(categoryId) {
    this.setState({ categoryId })
  }

  renderCategories() {
    return <Tabs
          size="large"
          style={{ width: "100%", justifyContent: "center" }}
          onChange={this._changeCategory}
          defaultActiveKey={`0`}
          activeKey={`${this.state.categoryId || 0}`}
          tabPosition={this.isSmallScreen ? "top" : "left"}>
          { this.categories.map(c => <TabPane tab={c.title} key={c.id}/>)}
    </Tabs>
  }

  renderTypes() {
    return  <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px solid #dddddd",
        padding: "10px",
        margin: "20px"
      }}>
        <Badge count={0} style={{ margin: "10px 5px 0px -10px", fontSize: "10px"}}>
          <Button style={{ color: (this.state.typeId || 0) === 0 ? '#039BE5' : '#B0BEC5', margin: "10px" }} onClick={() => this.setState({ typeId: 0, categoryId: 0 })} outlined={(this.state.typeId || 0) === 0}>
            Templates
          </Button>
        </Badge>
        <Badge count={0} style={{ margin: "10px 5px 0px -10px"}}>
          <Button style={{ color: (this.state.typeId || 0) === 1 ? '#039BE5' : '#B0BEC5', margin: "10px" }} onClick={() => this.setState({ typeId: 1, categoryId: 0 })} outlined={(this.state.typeId || 0) === 1}>
            Chunks
          </Button>
        </Badge>
        <Badge count={0} style={{ margin: "10px 5px 0px -10px"}}>
          <Button style={{ color: (this.state.typeId || 0) === 2 ? '#039BE5' : '#B0BEC5', margin: "10px" }} onClick={() => this.setState({ typeId: 2, categoryId: 0 })} outlined={(this.state.typeId || 0) === 2}>
            Custom
          </Button>
        </Badge>
      </div>
  }

  renderQuote() {
    return <div/>
  }

  renderCategoriesContent(category) {
    switch (this.state.typeId) {
      case 1:
        return <div style={{  }}>
            { this.chunks.map(c => <ChunkPreview key={c.id} chunk={c} compact={this.isSmallScreen}/> )}
        </div>
      case 2:
      return <div style={{  }}>
          { this.plans.map(p => <PlanPreview key={p.id} plan={p} compact={this.isSmallScreen}/> )}
      </div>
      default:
    }

    return <div style={{  }}>
        { this.templates.map(t => <TemplatePreview key={t.id} template={t} compact={this.isSmallScreen}/> )}
    </div>
  }

  renderTypePrompt() {
    var prompt = "Choose a Product Template to get started"

    switch (this.state.typeId) {
      case 1:
        prompt = "Add a Chunk of functionality to your Product"
        break
      case 2:
        prompt = "Choose a Custom Plan to build brand new functionality"
        break
      default:
    }

    return <Typography
      use="body1"
      tag="div"
      style={{
        textAlign: "center",
        margin: "20px 0px 20px 0px",
        padding: "5px",
        color: "#29B6F6" }}>
      { prompt }
    </Typography>
  }

  renderDefault() {
    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
      }}>
        <div style={{ marginTop: "120px"}}>
          { this.renderCategories() }
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px"
        }}>
          { this.renderTypes() }
          { this.renderTypePrompt() }
          { this.renderCategoriesContent()}
      </div>
    </div>
  }

  renderCompact() {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100vw"
    }}>
      { this.renderTypes() }
      { this.renderTypePrompt() }
      { this.renderCategories() }
      { this.renderCategoriesContent()}
    </div>
  }

  renderMainContent() {
    return this.isSmallScreen ? this.renderCompact() : this.renderDefault()
  }

  components () {
    return super.components().concat([])
  }
}
