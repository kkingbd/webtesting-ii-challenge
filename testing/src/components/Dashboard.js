import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <>
              <button onClick={this.props.strikeUpdate}> Strike </button>
              <button onClick={this.props.ballUpdate}> Ball </button>
              <button onClick={this.props.foulUpdate}> Foul </button>
              <button onClick={this.hit}> Hit </button>
          </>
        
      </div>
    )
  }
}
