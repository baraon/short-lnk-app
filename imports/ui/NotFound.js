import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <p>Page Not Not Found</p>
    );
  }
}

export default withRouter(NotFound);
