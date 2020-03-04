import React from 'react'


class HelloWorld extends React.Component {
  
   state = {
    who: ""
  } 

  constructor () {
    super()
    this.state = { who: "World"}
  }

  handleClick = (title) => {
    this.setState({
      who: title
    })
  }

  render () {
  return (
    <div>
      <p>
      Hello, {this.state.who}
      </p>
      <button onClick={e => this.handleClick('Friend')}>Friend</button>
      <button onClick={e => this.handleClick('World')}>World</button>
      <button onClick={e => this.handleClick('React')}>React</button>
    </div>

  )
  }
}

export default HelloWorld;