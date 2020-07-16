import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class WorkerProfile extends React.Component {
  render() {
    return (
      <div>
        Worker profile page
        <Redirect
          to={{
            pathname: '/workers',
          }}
        />
      </div>
    );
  }
}

export default withRouter(WorkerProfile);
