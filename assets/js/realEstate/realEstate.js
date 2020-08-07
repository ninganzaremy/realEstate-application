import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div className='home'>

            <h1>Welcome: Realestate app</h1>

      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
