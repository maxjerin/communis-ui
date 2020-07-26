import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

export default class CommunisComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldFireCallback(form) {
    return true;
  }

  updateFormState = (key, event) => {
    let form = this.state.form;
    form[key] = event.target.value;
    this.setState({ form });
    if (this.props.onUpdateCallback && this.shouldFireCallback(form)) {
      this.props.onUpdateCallback(form);
    }
  };

  handleException() {
    if (this.props.error && this.props.error.isError) {
      const { exception } = this.props.error;
      switch (exception.status) {
        case 400:
          exception.errors.map(err => {
            return (
              <UncontrolledAlert color="primary">
                {err.objectName} : {err.field} {err.defaultMessage}
              </UncontrolledAlert>
            );
          });
          break;
        default:
        //return null;
      }
    }
  }
}
