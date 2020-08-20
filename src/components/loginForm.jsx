//imrc
import React, { Component } from 'react'
class LoginForm extends Component {
  handleSubmet = (e) => {
    e.preventDefault()

    console.log('submeted')
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmet}>
          <div className='form-group'>
            <label htmlFor='username'>Email address</label>
            <input type='text' className='form-control' id='username' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' id='password' />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
