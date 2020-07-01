import React from 'react';
import {
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

class PersonalDetails extends React.Component {
  persistField = (e, fieldName) =>
    this.props.persist({ [fieldName]: e.target.value });

  render() {
    const { previous, next } = this.props;

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
                      <Input
                        onChange={e => this.persistField(e, 'firstName')}
                        type="text"
                        name="firstName"
                        id="firstName"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="middleName">Middle Name</Label>
                      <Input
                        onChange={e => this.persistField(e, 'middleName')}
                        type="text"
                        name="middleName"
                        id="middleName"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="lastName">Last Name</Label>
                      <Input
                        onChange={e => this.persistField(e, 'lastName')}
                        ype="text"
                        name="lastName"
                        id="lastName"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="dateOfBirth">Date of Birth</Label>
                      <Input
                        onChange={e => this.persistField(e, 'dateOfBirth')}
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="gender">Gender</Label>
                      <Input
                        onChange={e => this.persistField(e, 'gender')}
                        type="select"
                        name="gender"
                        id="gender"
                      >
                        <option></option>
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
                      <Input
                        onChange={e => this.persistField(e, 'cellPhone')}
                        type="text"
                        name="cellPhone"
                        id="cellPhone"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="homePhone">Home Phone</Label>
                      <Input
                        onChange={e => this.persistField(e, 'homePhone')}
                        type="text"
                        name="homePhone"
                        id="homePhone"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="workPhone">Work Phone</Label>
                      <Input
                        onChange={e => this.persistField(e, 'workPhone')}
                        type="text"
                        name="workPhone"
                        id="workPhone"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        onChange={e => this.persistField(e, 'email')}
                        type="text"
                        name="email"
                        id="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="secondaryEmail">Secondary Email</Label>
                      <Input
                        type="text"
                        name="secondaryEmail"
                        id="secondaryEmail"
                        onChange={e => this.persistField(e, 'secondaryEmail')}
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
                        onChange={e =>
                          this.persistField(e, 'primaryContactType')
                        }
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
          <Row>
            <Col>{previous}</Col>
            <Col>{next}</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default withRouter(PersonalDetails);
