//imrc
import React, { Component } from 'react'
class LoginForm extends Component {
  render() {
    return (
      <div className='container'>
        <form>
          <div className='form-group'>
            <label htmlFor='username'>Email address</label>
            <input
              type='text'
              className='form-control'
              id='username'
             
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
            />
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
