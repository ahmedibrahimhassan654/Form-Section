//imrc
import React, { Component } from 'react'

import Input from './common/input'

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  }

  validate = () => {
    const errors = {}
    const { account } = this.state
    if (account.username.trim() === '') errors.username = 'username is required'
    if (account.password.trim() === '') errors.password = 'password is required'

    return Object.keys(errors).length === 0 ? null : errors
  }
  handleSubmet = (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors })
    if (errors) return
    console.log(errors)
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
          <Input
            name='username'
            label='Email Address'
            value={account.username}
            onChange={this.handleChange}
          />

          <Input
            name='password'
            label='password'
            value={account.password}
            onChange={this.handleChange}
          />

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
