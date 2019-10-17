import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import * as Users from './users/userController'
const User = require('./users/userModel');

export class registerPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);

    this.state = {
      name: '',
      password: '',
    }
  }

  handleSubmit = event => {
    if (event != null) {
        let userToUpdate = new User ({
          name: this.state.name,
          password: this.state.password
        });
        console.log(userToUpdate);
        Users.register(userToUpdate);
    }
  }

  handleChangeN(event) {
    this.setState({name: event.target.value});
  }

  handleChangeP(event) {
    this.setState({password: event.target.value});
  }

  render() {
    let {handleSubmit} = this.props;
    return(
      <div className="loginbox">
          <h1>Login Here</h1>
           <form name='form' onSubmit={this.handleSubmit}>
              <p>Username</p>
              <input type="text" value={this.state.name} onChange={this.handleChangeN} name="name" placeholder="Enter Username"/>
              <p>Password</p>
              <input type="password" value={this.state.password} onChange={this.handleChangeP} name="password" placeholder="Enter Password"/>
              <input type="submit" name="" value="Login"/>
          </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'form', // a unique identifier for this form
})(registerPage)
