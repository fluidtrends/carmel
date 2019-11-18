import React, { Component } from "react"
import BaseScreen from './BaseScreen'

class  SettingsScreen extends BaseScreen {
    constructor() {
        super()

        this.state = {}
    }

    load() {
        this.setState({ ready: true })
    } 
}

export default SettingsScreen