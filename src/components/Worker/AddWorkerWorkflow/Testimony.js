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

class Testimony extends React.Component {
  persistField = (e, fieldName) =>
    this.props.persist({ [fieldName]: e.target.value });

  render() {
    const { previous, next } = this.props;

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
                      <Input
                        onChange={e => this.persistField(e, 'testimony')}
                        type="textarea"
                        name="testimony"
                        id="testimony"
                      />
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

export default withRouter(Testimony);
