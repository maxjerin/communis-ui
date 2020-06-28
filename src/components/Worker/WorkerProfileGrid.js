import React from 'react';
import { Button, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class WorkerProfileGrid extends React.Component {
  onViewWorkerProfile = worker => {
    let path = '/worker-profile';
    this.props.history.push({
      pathname: path,
      search: '?query=abc',
      state: { worker: worker },
    });
  };

  render() {
    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {this.props.workers.map(worker => (
            <tr>
              <td>{worker.firstName}</td>
              <td>{worker.middleName}</td>
              <td>{worker.lastName}</td>
              <td>{worker.dateOfBirth}</td>
              <td>{worker.gender}</td>
              <td>{worker.address}</td>
              <td>
                <Button
                  color="link"
                  size="sm"
                  onClick={() => this.onViewWorkerProfile(worker)}
                >
                  View Profile
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default withRouter(WorkerProfileGrid);
