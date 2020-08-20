import React from 'react';
import { Badge, CardBody } from 'reactstrap';

export default class AuditWidget extends React.Component {
  render() {
    const entity = this.props.entity ? this.props.entity : {};
    return (
      <div>
        {entity.lastModifiedDate ? (
          <Badge color="success" pill className="mr-1">
            LAST UPDATED ON : {entity.lastModifiedDate}
          </Badge>
        ) : null}
        {entity.lastModifiedBy ? (
          <Badge color="info" pill className="mr-1">
            LAST UPDATED BY : {entity.lastModifiedBy}
          </Badge>
        ) : null}
      </div>
    );
  }
}
