import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import * as Users from './users/userController.js'

export class registerPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = user => {
    if (user != null) {
           let userToUpdate = JSON.parse(JSON.stringify(user));
           Users.register(userToUpdate);
         }
  }

  render() {
    let {handleSubmit} = this.props;
    return(
      <div className="loginbox">
          <h1>Login Here</h1>
           <form name='form' onSubmit={handleSubmit}>
              <p>Username</p>
              <input type="text" name="name" placeholder="Enter Username"/>
              <p>Password</p>
              <input type="password" name="password" placeholder="Enter Password"/>
              <input type="submit" name="" value="Login"/>
          </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'form', // a unique identifier for this form
})(registerPage)
