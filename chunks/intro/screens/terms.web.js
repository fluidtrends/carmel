import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class MainTermsScreen extends Screen {
    constructor(props) {
        super(props)
        this.state = { ...this.state }
    }

    componentDidMount() {
        super.componentDidMount()
    }

    get cover() {
        return Object.assign({}, this.props.cover)
    }

    get username() { }

    get features() {    
        return []
    }

    components() {
        return super.components().concat(this.features)
    }
}
