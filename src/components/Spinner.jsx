import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className='spinner d-flex justify-content-center align-items-center'>
        <img src='/loader.gif' alt='loading' />
      </div>
    )
  }
}

export default Spinner