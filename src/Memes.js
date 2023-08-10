import React, { Component } from 'react'

export class Memes extends Component {
  render() {
    return (
      <div>
        <>
        <img src={this.props.Url} alt='img'/>
        </>
      </div>
    )
  }
}

export default Memes
