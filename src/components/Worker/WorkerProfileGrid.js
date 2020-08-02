import React from 'react';
import { Button, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { generateKey } from '../../utils/components';

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
          {this.props.workers.map((worker, index) => (
            <tr key={generateKey(index)}>
              <td key={generateKey(worker.firstName)}>{worker.firstName}</td>
              <td key={generateKey(worker.middleName)}>{worker.middleName}</td>
              <td key={generateKey(worker.lastName)}>{worker.lastName}</td>
              <td key={generateKey(worker.dateOfBirth)}>
                {worker.dateOfBirth}
              </td>
              <td key={generateKey(worker.gender)}>{worker.gender}</td>
              <td key={generateKey('profile')}>
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
