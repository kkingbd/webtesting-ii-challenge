import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <>
        <h2> Dashboard : </h2>
        <div id ="strike"> Strikes : {this.props.strike}</div>
        <div id ="ball"> Balls : {this.props.ball} </div>
      </>
    )
  }
}
