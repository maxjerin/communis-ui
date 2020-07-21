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
    const { details, showNavigation, previous, next } = this.props;

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
                        value={details}
                      />
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

Testimony.defaultProps = {
  testimony: '',
  showNavigation: true,
};

export default withRouter(Testimony);
