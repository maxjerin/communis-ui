import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Label,
  Row,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Summary extends React.Component {
  render() {
    return (
      <Row>
        <Col xl={6} md={12} lg={12}>
          <Row>
            <Card>
              <CardHeader>Personal Details</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="firstName">First Name:</Label>
                      <Col>
                        <Label name="firstName" id="firstName">
                          Jerin
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="middleName">Middle Name:</Label>
                      <Col>
                        <Label name="middleName" id="middleName">
                          {' '}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="lastName">Last Name:</Label>
                      <Col>
                        <Label name="lastName" id="lastName">
                          Mathew
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="dateOfBirth">Date of Birth:</Label>
                      <Col>
                        <Label name="dateOfBirth" id="dateOfBirth">
                          01/01/2020
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="gender">Gender:</Label>
                      <Col>
                        <Label name="gender" id="gender">
                          Male
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Contact</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="cellPhone">Cell Phone:</Label>
                      <Col>
                        <Label name="cellPhone" id="cellPhone">
                          555-555-5555
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="homePhone">Home Phone:</Label>
                      <Col>
                        <Label name="homePhone" id="homePhone">
                          555-555-5555
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="primaryEmail">Primary Email:</Label>
                      <Col>
                        <Label name="primaryEmail" id="primaryEmail">
                          abc@abc.com
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="secondaryEmail">Secondary Email:</Label>
                      <Col>
                        <Label name="secondaryEmail" id="secondaryEmail">
                          abc@abc.com
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="primaryContactType">
                        Primary Contact Type:
                      </Label>
                      <Col>
                        <Label
                          name="primaryContactType"
                          id="primaryContactType"
                        >
                          Cell Phone
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Address</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="addressLine1">Address Line 1:</Label>
                      <Col>
                        <Label name="addressLine1" id="addressLine1">
                          123 Some Street
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="addressLine2">Address Line 2:</Label>
                      <Col>
                        <Label name="addressLine2" id="addressLine2">
                          Behind other street
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="city">City:</Label>
                      <Col>
                        <Label name="city" id="city">
                          Bilaspur
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="state">State:</Label>
                      <Col>
                        <Label name="state" id="state">
                          Chhattisgarh
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="areaCode">Area Code:</Label>
                      <Col>
                        <Label name="areaCode" id="areaCode">
                          07003
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Testimony</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="testimony">Testimony:</Label>
                      <Col>
                        <Label name="testimony" id="testimony">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Summary);
