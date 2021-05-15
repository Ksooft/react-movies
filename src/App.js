import { Component } from 'react'
import './App.css'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Main from './Layout/Main'

class App extends Component {
  state = {
    reboot: false,
  }
  
  initialState = () => {
    this.setState({reboot: !this.state.reboot})
  }

  render() {
    return (
      <>
        <Header initial={this.initialState.bind(this)} />
        {!this.state.reboot ? <Main reboot={1} /> : <Main reboot={true} />}
        <Footer />
      </>
    )
  }
}

export default App

