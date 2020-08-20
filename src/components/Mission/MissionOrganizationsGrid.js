import React from 'react';
import { Button, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class MissionOrganizationsGrid extends React.Component {
  onRegionSelect = mission => {
    let path = '/mission-region';
    this.props.history.push({
      pathname: path,
      search: '?query=abc',
      state: { region: mission },
    });
  };

  render() {
    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th scope="col">Organization</th>
            <th scope="col">Address</th>
            <th scope="col">Last Modified Date</th>
            <th scope="col">Last Modified By</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.organizations.map(organization => (
            <tr>
              <th scope="row">{organization.name}</th>
              <td>
                {organization.address.state}, {organization.address.country}
              </td>
              <td>{organization.lastModifiedDate}</td>
              <td>{organization.lastModifiedBy}</td>
              <td>
                <Button
                  color="link"
                  size="sm"
                  onClick={() => this.props.onOrganizationSelect(organization)}
                >
                  view
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default withRouter(MissionOrganizationsGrid);
