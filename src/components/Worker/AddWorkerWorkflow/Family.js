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

class Family extends React.Component {
  render() {
    return (
      <Row>
        <Col xl={12} md={12} lg={12}>
          <Row>
            <Card>
              <CardHeader>Family Relationship</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="familyName">Family Name</Label>
                      <Input type="text" name="familyName" id="familyName" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="relationshipType">Relationship Type</Label>
                      <Input
                        type="select"
                        name="relationshipType"
                        id="relationshipType"
                      >
                        <option>Husband</option>
                        <option>Wife</option>
                        <option>Son</option>
                        <option>Daughter</option>
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

export default withRouter(Family);
