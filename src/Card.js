import React, { Component } from 'react'

export class Card extends Component {
  render() {

    const {name,age,place}=this.props
    return (
      
            <div className='container'>
              <h1>Name :{name}  </h1>
              <h1>Age  : {age} </h1>
              <h1>Place:  {place}</h1>

            </div>
      
    )
  }
}

export default Card
