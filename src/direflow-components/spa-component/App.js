import React from 'react';
import PropTypes from 'prop-types';

// import styles from './App.css';

import Agent from './Pages/Agent';
import Customer from './Pages/Customer';
import Employee from './Pages/Employee';

const App = (props) => {
  const pageRenderer = (userType) => {
    switch (userType) {
      case 'agent':
        return <Agent />;
      case 'customer':
        return <Customer />;
      case 'employee':
        return <Employee />;
      default:
        return <p>Invalid Props Passeds</p>;
    }
  };

  return (
    <React.Fragment>
      <h4>App ID: {props.appid}</h4>
      <h4>User Type: {props.usertype}</h4>

      {pageRenderer(props.usertype)}
    </React.Fragment>
  );
};

App.defaultProps = {
  appid: 'Spa Component',
  usertype: 'Spa Component'
};

App.propTypes = {
  appid: PropTypes.string,
  usertype: PropTypes.string
};

export default App;
