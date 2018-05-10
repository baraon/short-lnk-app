import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from "react-router-dom";

class Links extends React.Component {
  render() {
    return (
      <div>
        <h1>Link Component Here</h1>
        <button onClick={() => {
          this.props.history.push('/signup');
        }}>Log-out</button>
        <Link to={{
        pathname: '/'}}>Have an account?</Link>
      </div>
    );
  }
}

export default withRouter(Links);
