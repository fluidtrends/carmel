import React, { Component } from 'react'

export default class App extends Component {
  
  componentDidMount () {
  }

  render () {
    const auth = this.props.chunks.auth
    const LoadingScreen = auth.routes.loading.screen
    const ProgressScreen = auth.routes.progress.screen
    const EventsScreen = auth.routes.events.screen

    const loadProps = { isDataLoading: () => ({})}
    const errorProps = { hasDataError: () => ({}), dataError: () => ({})}
    const dataProps = { hasData: () => ({}), data: () => false }
    const eventsProps = { 
      hasData: () => ({}), 
      data: () => false,
      analytics: { 
        error: () => ({}), 
        view: () => ({}), 
        event: () => ({}) 
      }  
    }
    
    return (<div>
       <h1> App </h1>
       <ProgressScreen/>
       <LoadingScreen {...loadProps}/>
       <LoadingScreen {...errorProps}/>
       <LoadingScreen {...dataProps}/>
       <EventsScreen {...eventsProps}/>
     </div>)
  }
}
