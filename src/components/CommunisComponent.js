import React from 'react';

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
}
