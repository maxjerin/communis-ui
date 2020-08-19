import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Testimony extends React.Component {
  persistField = (e, fieldName) =>
    this.props.persist({ [fieldName]: e.target.value });

  render() {
    const { details, previous, next } = this.props;

    return (
      <Page>
        <Row>
          <Col>
            <Row>
              <Card>
                <CardHeader>Testimony</CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Input
                        onChange={e => this.persistField(e, 'testimony')}
                        type="textarea"
                        name="testimony"
                        id="testimony"
                        cols="50"
                        rows="20"
                        placeholder="Please enter the testimony here"
                        value={details}
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            {previous} {next}
          </Col>
        </Row>
      </Page>
    );
  }
}

export default withRouter(Testimony);
