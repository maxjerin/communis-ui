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
    const { details, showNavigation, previous, next } = this.props;

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
                        value={details.firstName}
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
                        value={details.middleName}
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
                        value={details.lastName}
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
                        value={details.dateOfBirth}
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
                        value={details.gender}
                      >
                        <option value="">Select Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
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
                        value={details.cellPhone}
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
                        value={details.homePhone}
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
                        value={details.workPhone}
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
                        value={details.email}
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
                        value={details.secondaryEmail}
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
                        value={details.primaryContactType}
                      >
                        <option value={''}>Select Primary Contact Type</option>
                        <option value={'CELL_PHONE'}>Cell Phone</option>
                        <option value={'HOME_PHONE'}>Home Phone</option>
                        <option value={'WORK_PHONE'}>Work Phone</option>
                        <option value={'EMAIL'}>Email</option>
                        <option value={'SECONDARY_EMAIL'}>
                          Secondary Email
                        </option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
          {showNavigation ? (
            <Row>
              <Col>{previous}</Col>
              <Col>{next}</Col>
            </Row>
          ) : null}
        </Col>
      </Row>
    );
  }
}

PersonalDetails.defaultProps = {
  firstName: '',
  middleName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  cellPhone: '',
  homePhone: '',
  workPhone: '',
  email: '',
  secondaryEmail: '',
  primaryContactType: '',
  showNavigation: true,
};

export default withRouter(PersonalDetails);
