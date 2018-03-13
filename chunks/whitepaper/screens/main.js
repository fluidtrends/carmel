import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'
import { Screen } from 'react-native-chunky'

export default class MainIntroScreen extends Screen {

  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  componentWillUnmount() {
    super.componentWillMount()
  }

  renderDataError() {
    return this.renderData()
  }

  renderDataDefaults() {
    return this.renderData()
  }

  renderContent() {
    return (<ScrollView style={styles.content}>
        <Text style={styles.title}>
            Welcome
        </Text>
    </ScrollView>)
  }

  renderData() {
    return (
        <ScrollView style={styles.container}>
        { this.renderContent() }
       </ScrollView>)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  content:  {
    backgroundColor: "#ffffff",
    padding: 5
  },
  title: {
    margin: 0,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20
  }
})
