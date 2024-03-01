import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'
import ConfigurationContext from './context/ConfigurationContext'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    const {showContent} = this.state
    this.setState({showContent: !showContent})
  }

  onToggleShowLeftNavBar = () => {
    const {showLeftNavbar} = this.state
    this.setState({showLeftNavbar: !showLeftNavbar})
  }

  onToggleShowRightNavBar = () => {
    const {showRightNavbar} = this.state
    this.setState({showRightNavbar: !showRightNavbar})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          onToggleShowContent: this.onToggleShowContent,
          showLeftNavbar,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavBar,
          showRightNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavBar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
