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

class Family extends React.Component {
  persistField = (e, fieldName) =>
    this.props.persist({ [fieldName]: e.target.value });

  render() {
    const { details, previous, next } = this.props;

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
                      <Input
                        onChange={e => this.persistField(e, 'familyName')}
                        type="text"
                        name="familyName"
                        id="familyName"
                        value={details.familyName}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="relationshipType">Relationship Type</Label>
                      <Input
                        onChange={e => this.persistField(e, 'relationshipType')}
                        type="select"
                        name="relationshipType"
                        id="relationshipType"
                        value={details.relationshipType}
                      >
                        <option value="">Select a Relationship</option>
                        <option value="HUSBAND">Husband</option>
                        <option value="WIFE">Wife</option>
                        <option value="SON">Son</option>
                        <option value="DAUGHTER">Daughter</option>
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

export default withRouter(Family);
