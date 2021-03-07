import React, { Component } from 'react'
import {Link } from 'react-router-dom';
export class Login extends Component {

   onSubmit = ()  =>{
    alert('');
  }

    render() {
        return (
            <div>
                <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
</form>
{/* <Link to='/Product'>
<button >Btn</button>
</Link> */}
            </div>
        )
    }
}

export default Login
