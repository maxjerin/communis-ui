import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  FormGroup,
  Label,
  Row,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FaRegAddressBook } from 'react-icons/fa';

class PersonalDetails extends React.Component {
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
                    <FormGroup>
                      <Label for="firstName">First Name</Label>
                      <Input type="text" name="firstName" id="firstName" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="middleName">Middle Name</Label>
                      <Input type="text" name="middleName" id="middleName" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="lastName">Last Name</Label>
                      <Input type="text" name="lastName" id="lastName" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="dateOfBirth">Date of Birth</Label>
                      <Input type="date" name="dateOfBirth" id="dateOfBirth" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="gender">Gender</Label>
                      <Input type="select" name="gender" id="gender">
                        <option>Male</option>
                        <option>Female</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>

          <Row>
            <Card>
              <CardHeader>Contact Information</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="cellPhone">Cell Phone</Label>
                      <Input type="text" name="cellPhone" id="cellPhone" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="homePhone">Home Phone</Label>
                      <Input type="text" name="homePhone" id="homePhone" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="workPhone">Work Phone</Label>
                      <Input type="text" name="workPhone" id="workPhone" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input type="text" name="email" id="email" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="secondaryEmail">Secondary Email</Label>
                      <Input
                        type="text"
                        name="secondaryEmail"
                        id="secondaryEmail"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="primaryContactType">
                        Primary Contact Type
                      </Label>
                      <Input
                        type="select"
                        name="primaryContactType"
                        id="primaryContactType"
                      >
                        <option>Cell Phone</option>
                        <option>Home Phone</option>
                        <option>Work Phone</option>
                        <option>Email</option>
                        <option>Secondary Email</option>
                      </Input>
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

export default withRouter(PersonalDetails);
