import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''

    };
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      console.log('Login callback: ', err);
    });
  }

  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button>Log in</button>
        </form>

        <Link to="/">Haev an account?</Link>
      </div>
    );
  }
}

export default withRouter(Login);
