import React, { Component } from "react"
import BaseScreen from './BaseScreen'

class  CarmelScreen extends BaseScreen {
    constructor() {
        super()

        this.state = {}
    }

    load() {
      this.goTo("products")
      // console.log(this.props.session)
      // this.setState({ ready: true })
    } 
}

export default CarmelScreen