import Page from 'components/Page';
import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Label,
  Row,
  Input,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Summary extends React.Component {
  render() {
    const {
      previous,
      next,
      summary: { personalDetails, address, testimony, family },
      hasFamily,
    } = this.props;
    const {
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      gender,
      cellPhone,
      homePhone,
      email,
      secondaryEmail,
      primaryContactType,
    } = personalDetails;
    const {
      addressLine1,
      addressLine2,
      city,
      state,
      areaCode,
      country,
    } = address;
    const { familyName, relationshipType } = family;

    return (
      <Page>
        <Row>
          <Col xl={6} md={12} lg={12}>
            <Card>
              <CardHeader>Personal Details</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="firstName">First Name:</Label>
                      <Col>
                        <Label name="firstName" id="firstName">
                          {firstName}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="middleName">Middle Name:</Label>
                      <Col>
                        <Label name="middleName" id="middleName">
                          {middleName}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="lastName">Last Name:</Label>
                      <Col>
                        <Label name="lastName" id="lastName">
                          {lastName}
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
                          {dateOfBirth}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="gender">Gender:</Label>
                      <Col>
                        <Label name="gender" id="gender">
                          {gender}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={6} md={12} lg={12}>
            <Card>
              <CardHeader>Contact</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="cellPhone">Cell Phone:</Label>
                      <Col>
                        <Label name="cellPhone" id="cellPhone">
                          {cellPhone}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="homePhone">Home Phone:</Label>
                      <Col>
                        <Label name="homePhone" id="homePhone">
                          {homePhone}
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
                          {email}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="secondaryEmail">Secondary Email:</Label>
                      <Col>
                        <Label name="secondaryEmail" id="secondaryEmail">
                          {secondaryEmail}
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
                          {primaryContactType}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={6} md={12} lg={12}>
            <Card>
              <CardHeader>Address</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="addressLine1">Address Line 1:</Label>
                      <Col>
                        <Label name="addressLine1" id="addressLine1">
                          {addressLine1}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="addressLine2">Address Line 2:</Label>
                      <Col>
                        <Label name="addressLine2" id="addressLine2">
                          {addressLine2}
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
                          {city}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="state">State:</Label>
                      <Col>
                        <Label name="state" id="state">
                          {state}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup row>
                      <Label for="areaCode">Area Code:</Label>
                      <Col>
                        <Label name="areaCode" id="areaCode">
                          {areaCode}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Label for="country">Country:</Label>
                      <Col>
                        <Label name="country" id="country">
                          {country}
                        </Label>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={6} md={12} lg={12}>
            <Card>
              <CardHeader>Testimony</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Col>
                        <Input
                          type="textarea"
                          name="testimony"
                          rows="20"
                          disabled
                          placeholder={testimony}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={6} md={12} lg={12}>
            <Row>
              {hasFamily && (
                <Card>
                  <CardHeader>Family</CardHeader>
                  <CardBody>
                    <Row>
                      <Col>
                        <FormGroup row>
                          <Label for="familyName">Family Name:</Label>
                          <Col>
                            <Label name="familyName" id="familyName">
                              {familyName}
                            </Label>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup row>
                          <Label for="relationshipType">
                            Relationship Type:
                          </Label>
                          <Col>
                            <Label
                              name="relationshipType"
                              id="relationshipType"
                            >
                              {relationshipType}
                            </Label>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              )}
            </Row>
            <Row>
              <Col>{previous}</Col>
              <Col>{next}</Col>
            </Row>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default withRouter(Summary);
