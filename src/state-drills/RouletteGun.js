import React from 'react';

class RouletteGun extends React.Component{

  state = {
    chamber: null,
    spinningTheChamber: false
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true
    })
    let timeout = setTimeout(() => this.setState( () => {
      return {chamber: Math.ceil(Math.random() * 8), spinningTheChamber: false}
    }) ,2000)
    }

  render(){

    if (this.state.spinningTheChamber) {
        return (
          <div>
            <button onClick={e => this.handleClick()}>Pull the trigger!</button>
            <p>
              spinning the chamber and pulling the trigger! ...
            </p>
          </div>
          )
    }

    if (this.state.chamber === this.props.bulletInChamber) {
    return (
    <div>
      <button onClick={e => this.handleClick()}>Pull the trigger!</button>
      <p>
        BANG!!!
      </p>
    </div>
    )}else if (this.state.chamber !== this.props.bulletInChamber && this.state.chamber !== null) {
      return (
      <div>
        <button onClick={e => this.handleClick()}>Pull the trigger!</button>
        <p>
          you're safe!
        </p>
      </div>
      )
    }
    return (
      <div>
        <button onClick={e => this.handleClick()}>Pull the trigger!</button>
        <p>
      
        </p>
      </div>
      )
}
}

export default RouletteGun;