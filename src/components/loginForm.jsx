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
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }
    account[input.name] = input.value
    this.setState({ account })
  }

  render() {
    const { account } = this.state
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmet}>
          <div className='form-group'>
            <label htmlFor='username'>Email address</label>
            <input
              value={account.username}
              name='username'
              onChange={this.handleChange}
              type='text'
              className='form-control'
              id='username'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              value={account.password}
              name='password'
              onChange={this.handleChange}
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
