import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <>
        <h2> Dashboard : </h2>
        <div data-testid ="strike"> Strikes : {this.props.strike}</div>
        <div data-testid ="ball"> Balls : {this.props.ball} </div>
      </>
    )
  }
}
