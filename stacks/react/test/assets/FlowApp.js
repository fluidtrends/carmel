import React, { Component } from 'react'

export default class App extends Component {
  
  componentDidMount () {
  }

  render () {
    const chunk = this.props.chunks.auth
    const route = chunk.routes.flow
    const FlowScreen = route.screen

    const props = { isDataLoading: () => ({})}

    return (<div>
       <h1> App </h1>
       <FlowScreen name="flow" {...props} {...route} chunkName="auth"/>
     </div>)
  }
}
