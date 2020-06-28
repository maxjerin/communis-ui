import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Address extends React.Component {
  render() {
    const { previous, next } = this.props;

    return (
      <Row>
        <Col xl={6} md={12} lg={12}>
          <Row>
            <Card>
              <CardHeader>Addresses</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="addressLine1">Address Line 1</Label>
                      <Input
                        type="text"
                        name="addressLine1"
                        id="addressLine1"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="addressLine2">Address Line 2</Label>
                      <Input
                        type="text"
                        name="addressLine2"
                        id="addressLine2"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="city">City</Label>
                      <Input type="text" name="city" id="city" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="state">State</Label>
                      <Input type="text" name="state" id="state" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="areaCode">Area Code</Label>
                      <Input type="text" name="areaCode" id="areaCode" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="country">Country</Label>
                      <Input type="text" name="country" id="country" />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Col>{previous}</Col>
            <Col>{next}</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Address);
