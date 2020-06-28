import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, ButtonGroup, Card, Col, Row } from 'reactstrap';
import { FaRegAddressBook } from 'react-icons/fa';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from './../../utils/constants';
import PersonalDetails from '../../components/Worker/AddWorkerWorkflow/PersonalDetails';
import Address from '../../components/Worker/AddWorkerWorkflow/Address';
import Testimony from '../../components/Worker/AddWorkerWorkflow/Testimony';
import Summary from '../../components/Worker/AddWorkerWorkflow/Summary';
import Family from '../../components/Worker/AddWorkerWorkflow/Family';

const NOTIFICATION_TIMEOUT_IN_MILLI_SEC = 1500;

class AddWorker extends React.Component {
  componentDidMount() {
    /* fetch worker list */
  }

  exitWorkflow = () => this.props.history.push('/workers');

  render() {
    const { currentScreen } = this.props;
    const isCurrentWorkflowScreen = selectedScreen =>
      currentScreen === selectedScreen;

    return (
      <Row>
        <Col xl={12} md={12} lg={12}>
          <Card body>
            <Row>
              <Col md={9}>
                <h3>
                  <FaRegAddressBook /> Workflow Breadcrumb
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                {isCurrentWorkflowScreen('family') ? <Family /> : null}
                {isCurrentWorkflowScreen('personalDetail') ? (
                  <PersonalDetails />
                ) : null}
                {isCurrentWorkflowScreen('address') ? <Address /> : null}
                {isCurrentWorkflowScreen('testimony') ? <Testimony /> : null}
                {isCurrentWorkflowScreen('summary') ? <Summary /> : null}
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this.exitWorkflow}>Cancel</Button>
              </Col>
              <Col>
                <Button onClick={this.exitWorkflow}>Next</Button>
              </Col>
            </Row>

            <NotificationSystem
              dismissible={false}
              ref={notificationSystem =>
                (this.notificationSystem = notificationSystem)
              }
              style={NOTIFICATION_SYSTEM_STYLE}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(store) {
  return {
    router: store.router,
    worker: store.workerWorkflow.worker,
    currentScreen: store.workerWorkflow.currentScreen,
  };
}

export default connect(mapStateToProps)(AddWorker);
