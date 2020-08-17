import Page from 'components/Page';
import React from 'react';
import {
  Card,
  Container,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Form,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class PersonalDetails extends React.Component {
  persistField = (e, fieldName) =>
    this.props.persist({ [fieldName]: e.target.value });

  render() {
    const { details, previous, next } = this.props;

    return (
      //<Page title="Personal Details & Contact Information" breadcrumbs={[{ name: '', active: false }]>
      <Page>
        <Container>
          <Row>
            <Col xl={6} md={12} lg={12}>
              <Row>
                <Card>
                  <CardHeader>Personal Details</CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                          onChange={e => this.persistField(e, 'firstName')}
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Required"
                          value={details.firstName}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="middleName">Middle Name</Label>
                        <Input
                          onChange={e => this.persistField(e, 'middleName')}
                          type="text"
                          name="middleName"
                          id="middleName"
                          placeholder="Middle Name/Middle Initial (Optional)"
                          value={details.middleName}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                          onChange={e => this.persistField(e, 'lastName')}
                          ype="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Optional"
                          value={details.lastName}
                        />
                      </FormGroup>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="dateOfBirth">Date of Birth</Label>
                            <Input
                              onChange={e =>
                                this.persistField(e, 'dateOfBirth')
                              }
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
                    </Form>
                  </CardBody>
                </Card>
              </Row>
            </Col>

            <Col xl={6} md={12} lg={12}>
              <Row>
                <Card>
                  <CardHeader>Contact Information</CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="cellPhone">Cell Phone</Label>
                            <Input
                              onChange={e => this.persistField(e, 'cellPhone')}
                              type="text"
                              name="cellPhone"
                              id="cellPhone"
                              placeholder="Preferred"
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
                              placeholder="Optional"
                              value={details.homePhone}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="workPhone">Work Phone</Label>
                        <Input
                          onChange={e => this.persistField(e, 'workPhone')}
                          type="text"
                          name="workPhone"
                          id="workPhone"
                          placeholder="Optional"
                          value={details.workPhone}
                        />
                      </FormGroup>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="email">Primary Email</Label>
                            <Input
                              onChange={e => this.persistField(e, 'email')}
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Preferred"
                              value={details.email}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label for="secondaryEmail">Secondary Email</Label>
                            <Input
                              type="email"
                              name="secondaryEmail"
                              id="secondaryEmail"
                              placeholder="Optional"
                              onChange={e =>
                                this.persistField(e, 'secondaryEmail')
                              }
                              value={details.secondaryEmail}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
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
                          <option>Cell Phone</option>
                          <option>Home Phone</option>
                          <option>Work Phone</option>
                          <option>Primary Email</option>
                          <option>Secondary Email</option>
                        </Input>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xl={6} md={12} lg={12}>
              <Row>
                <Col />
                <Col>
                  {previous} {next}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Page>
    );
  }
}

export default withRouter(PersonalDetails);
