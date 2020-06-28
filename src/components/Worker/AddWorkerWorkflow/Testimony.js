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

class Testimony extends React.Component {
  render() {
    return (
      <Row>
        <Col xl={12} md={12} lg={12}>
          <Row>
            <Card>
              <CardHeader>Testimony</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="testimony">Testimony</Label>
                      <Input type="textarea" name="testimony" id="testimony" />
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

export default withRouter(Testimony);
