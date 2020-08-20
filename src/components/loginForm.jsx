//imrc
import React, { Component } from 'react'





class LoginForm extends Component {

userName=React.createRef()



  handleSubmet = (e) => {
    e.preventDefault()

    //call the server 

    const userName=this.userName.current.value

    console.log(userName)
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmet}>
          <div className='form-group'>
            <label htmlFor='username'>Email address</label>
            <input autoFocus ref={this.userName} type='text' className='form-control' id='username' />
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
