import React, { Component } from 'react'
import Display from './Display.js';

export default class Dashboard extends Component {

  constructor(){
      super();
      this.state ={
          strikes:0,
          balls: 0,
      }
  }
  strikesUpdate = ()=>{
      let updatedStrikes =this.state.strikes;
      updatedStrikes++;
      if(updatedStrikes >=3){
        updatedStrikes = 0
      }
      this.setState({
          strikes: updatedStrikes,
      })

  }
  ballsUpdate = () => {
        let updatedBalls = this.state.balls;
        updatedBalls++;
        if (updatedBalls >= 4) {
            updatedBalls = 0;
        }
        this.setState({
            balls: updatedBalls,
        })
  }
  hit = ()=>{
      this.setState({
          strikes: 0, balls: 0,
      })
  }

  render() {
    return (
      <div>
          <h1> Dashboard</h1>
          <Display display = {this.state} />
          <form>
              <button onClick={this.strikesUpdate}> Strike </button>
              <button onClick={this.ballsUpdate}> Ball </button>
              <button onClick={this.hit}> Foul </button>
              <button onClick={this.hit}> Hit </button>
          </form>
        
      </div>
    )
  }
}
