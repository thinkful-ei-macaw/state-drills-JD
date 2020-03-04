import React, { Component } from 'react';
import './App.css';
import RouletteGun from './state-drills/RouletteGun'

export default class App extends Component {

  render() {

    return (
      <main className='App'>
        <RouletteGun bulletInChamber={8}/>
      </main>
    )
  }

}
