import React, { Component } from "react"
import ListScreen from './ListScreen'

class ProductsScreen extends ListScreen {

  constructor() {
    super()

    this.state = {}
    this._actions = []
  }

  get title() {
    return "Your Products"
  }

  onMenuAction() {
    this.goTo('newProduct')
  }

  load() { 
    let challenges = {
      paused: Object.assign({}, this.props.session.data.journey && this.props.session.data.journey.pausedChallenges),
      completed: Object.assign({}, this.props.session.data.journey && this.props.session.data.journey.completedChallenges)
    }

    const data = this.props.session.data.products.map(p => {
      let tags = challenges.paused[p.id] || challenges.completed[p.id] ? { title: "Challenges:", labels: [] } : false
      
      tags && challenges.paused[p.id] && tags.labels.push({ text: `${Object.keys(challenges.paused[p.id]).length} paused`, color: "blue" })
      tags && challenges.completed[p.id] && tags.labels.push({ text: `${Object.keys(challenges.completed[p.id]).length} completed`, color: "green" })

      return {
        action: "Open",
        id: p.id,
        tags,
        title: p.name
      }
    })

    this.setState({ ready: true, challenges, data })
  }

  onAction(item) {
    const challenges = Object.assign({}, {
      paused: this.state.challenges.paused[item.id],
      completed: this.state.challenges.completed[item.id]
    })
    
    const product = Object.assign({}, this.props.session.data.products.find(p => item.id === p.id), { challenges })
    this.goTo('product', { product })
  }
}

export default ProductsScreen