import React from 'react';
import Page from 'components/Page';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Address extends React.Component {
  persistField = (e, fieldName) =>
    this.props.persist({ [fieldName]: e.target.value });

  render() {
    const { countries, details, previous, next } = this.props;

    return (
      <Page>
        <Row>
          <Col xl={6} md={12} lg={12}>
            <Row>
              <Card>
                <CardHeader>Addresses</CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="addressLine1">Address Line 1</Label>
                      <Input
                        type="text"
                        name="addressLine1"
                        id="addressLine1"
                        placeholder="Required"
                        onChange={e => this.persistField(e, 'addressLine1')}
                        value={details.addressLine1}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="addressLine2">Address Line 2</Label>
                      <Input
                        type="text"
                        name="addressLine2"
                        id="addressLine2"
                        placeholder="Optional"
                        onChange={e => this.persistField(e, 'addressLine2')}
                        value={details.addressLine2}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="city">City</Label>
                      <Input
                        onChange={e => this.persistField(e, 'city')}
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Required"
                        value={details.city}
                      />
                    </FormGroup>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="state">State</Label>
                          <Input
                            onChange={e => this.persistField(e, 'state')}
                            type="text"
                            name="state"
                            id="state"
                            placeholder="Required"
                            value={details.state}
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label for="areaCode">Area Code</Label>
                          <Input
                            onChange={e => this.persistField(e, 'areaCode')}
                            type="text"
                            name="areaCode"
                            id="areaCode"
                            placeholder="Required"
                            value={details.areaCode}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label for="country">Country</Label>
                      <Input
                        onChange={e => this.persistField(e, 'country')}
                        type="select"
                        name="country"
                        id="country"
                        value={details.country}
                      >
                        <option value="">Select Country</option>
                        {countries.map(country => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            {previous} {next}
          </Col>
        </Row>
      </Page>
    );
  }
}

export default withRouter(Address);
