import React from 'react';
import PropTypes from 'prop-types';
import CommunisComponent from '../CommunisComponent';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

class SaveOrUpdateAddress extends CommunisComponent {
  countries = [];

  state = {
    form: {},
  };

  constructor(props) {
    super(props);
    this.countries = this.props.countries.map(country => (
      <option key={country.code} value={country.code}>
        {country.name}
      </option>
    ));
  }

  componentDidMount() {
    const address = this.props.address ? this.props.address : {};
    this.setState({ form: address });
  }

  shouldFireCallback(form) {
    if (
      form.street != null &&
      form.street != '' &&
      form.city != null &&
      form.city != '' &&
      form.state != null &&
      form.state != '' &&
      form.country != null &&
      form.country != '' &&
      form.zipcode != null &&
      form.zipcode != ''
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="street" sm={2}>
            Street Address
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="street"
              id="street"
              placeholder="Street Address"
              value={this.state.form.street}
              onChange={e => this.updateFormState('street', e)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="street2" sm={2}>
            Address Line 2
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="street2"
              id="street2"
              placeholder="Address Line 2"
              value={this.state.form.street2}
              onChange={e => this.updateFormState('street2', e)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="city" sm={2}>
            City
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={this.state.form.city}
              onChange={e => this.updateFormState('city', e)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="state" sm={2}>
            State
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="state"
              id="state"
              placeholder="State"
              value={this.state.form.state}
              onChange={e => this.updateFormState('state', e)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="country" sm={2}>
            Country
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="country"
              id="country"
              value={this.state.form.country}
              onChange={e => this.updateFormState('country', e)}
            >
              {this.countries}
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="state" sm={2}>
            Zip Code
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="zipcode"
              id="zipcode"
              placeholder="Zip Code"
              value={this.state.form.zipcode}
              onChange={e => this.updateFormState('zipcode', e)}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

SaveOrUpdateAddress.propTypes = {
  id: PropTypes.string,
  createdBy: PropTypes.string,
  createdDate: PropTypes.string,
  lastModifiedBy: PropTypes.string,
  lastModifiedDate: PropTypes.string,
  version: PropTypes.number,
  street: PropTypes.string,
  street2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipcode: PropTypes.string,
  country: PropTypes.string,
  primary: PropTypes.bool,
};

export default SaveOrUpdateAddress;
