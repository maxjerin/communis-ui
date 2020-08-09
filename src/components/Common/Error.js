import React from 'react';
import { Badge, CardBody, UncontrolledAlert } from 'reactstrap';

export default class Error extends React.Component {
  render() {
    if (this.props.error && this.props.error.isError) {
      const { error } = this.props.error.exception;
      switch (error.status) {
        case 'BAD_REQUEST':
          return (
            <div>
              {error.errors.map(err => (
                <UncontrolledAlert color="danger">{err}</UncontrolledAlert>
              ))}
            </div>
          );
          break;
        default:
          return null;
      }
    } else {
      return null;
    }
  }
}
