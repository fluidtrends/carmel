import React, { Component } from "react"
import BaseScreen from './BaseScreen'

class  StartScreen extends BaseScreen {
    constructor() {
        super()

        this.state = {}
    }

    onLogin() {
      if (!this.props.session.data.journey || !this.props.session.data.journey.challenge) {
        this.goTo("products")
        return
      }

      const product = this.props.session.data.products.find(p => p.id === this.props.session.data.journey.challenge.productId)
      const challengeStatus = Object.assign({}, this.props.session.data.journey.challenge)
  
      this.goTo("product", { product, challengeStatus })
    }

    load() {
      this.props.session.login({ silent: true }, () => this.onLogin())
    } 
}

export default StartScreen