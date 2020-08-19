//imrc
import React, { Component } from 'react';
class LoginForm extends Component {
   
    render() { 
        return ( 
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
         );
    }
}
 
export default LoginForm;