//imrc
import React, { Component } from 'react'

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  }

  handleSubmet = (e) => {
    e.preventDefault()

    //call the server
    console.log('submitted')
  }
  handleChange = (e) => {
    const account = { ...this.state.account }
    account.username = e.currentTarget.value
    this.setState({ account })
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmet}>
          <div className='form-group'>
            <label htmlFor='username'>Email address</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              type='text'
              className='form-control'
              id='username'
            />
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
