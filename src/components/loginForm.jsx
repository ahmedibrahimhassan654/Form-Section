//imrc
import React, { Component } from 'react'

import Input from './common/input'
import joi from 'joi-browser'
class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  }

  schema = {
    username: joi.string().required().label('Username'),
    password: joi.string().required().label('Password'),
  }

  validate = () => {
    const options = { abortEarly: false }
    const { error } = joi.validate(this.state.account, this.schema, options)

    if (!error) return null
    const errors = {}
    for (let item of error.details) errors[item.path[0]] = item.message
    return errors
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = { [name]: this.schema[name] }
    const { error } = joi.validate(obj, schema)
    return error ? error.details[0].message : null
  }

  handleSubmet = (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return
    console.log(errors)
    //call the server
    console.log('submitted')
  }
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const account = { ...this.state.account }
    account[input.name] = input.value

    this.setState({ account, errors })
  }

  render() {
    const { account, errors } = this.state
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmet}>
          <Input
            name='username'
            label='Email Address'
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name='password'
            label='password'
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
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
