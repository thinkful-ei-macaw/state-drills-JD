import React from 'react'

class Bomb extends React.Component {
  constructor () {
    super ()
    const currentCount = this.state.count;
  }

  state = {
    count: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        return {count: prevState.count + 1}
      })
    }, 1000)
  }

  render () {
    if (this.state.count % 2 === 0 && this.state.count < 8){
      return (
        <div>
          <p>
            tick
          </p>
        </div>
      )
    }  else if (this.state.count >= 8) {
      clearInterval(this.state.count)
      return (
        <div>
          <p>
            BOOM!!!!
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <p>
            tock
          </p>
        </div>
      )
    }

  }
}

export default Bomb;