import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard.js'
import Display from './components/Display.js';


class App extends Component {
  constructor(){
    super();
    this.state ={
        strike:0,
        ball: 0,
        foul:0,
        hit:0,
    }
}
strikeUpdate = (e)=>{
  e.preventDefault();
  let updatedStrikes =this.state.strike;
  if(updatedStrikes <4){
    updatedStrikes++;
    this.setState({strike: updatedStrikes })
  }
  if(this.state.ball===4 || this.state.strike ===3){
    this.setState({strike: 0, ball: 0 })
  }
}
ballUpdate = (e) => {
   e.preventDefault();
    let updatedBalls = this.state.ball;
    if (updatedBalls < 3) {
      updatedBalls++;
      this.setState({ball: updatedBalls})
    }
    if(this.state.ball === 4 || this.state.strike === 3){
      this.setState({...this.state, strike: 0, ball: 0 })
    }
}
foulUpdate = (e) => {
  e.preventDefault();
  let updatedFoul= this.state.strike;
  if (updatedFoul < 2) {
    updatedFoul++;
    this.setState({...this.state, strike: updatedFoul})
  } 
}
hit = ()=>{
  this.setState({...this.state,strike: 0, ball: 0})
}
  render() {
    return (
      <div className="App">
        <Display    strike        = {this.state.strike} 
                    ball          = {this.state.ball}
        />
        <Dashboard  ballUpdate    = {this.ballUpdate}
                    strikeUpdate  = {this.strikesUpdate}
                    foulUpdate    = {this.foulUpdate}
                    hit           = {this.hit}
        />
      </div>
    );
  }
}

export default App;
