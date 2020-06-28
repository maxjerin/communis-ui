import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Card, Col, Row } from 'reactstrap';
import { FaRegAddressBook } from 'react-icons/fa';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from './../../utils/constants';

class WorkersList extends React.Component {
  componentWillReceiveProps(nextProps, nextContext) {}

  componentDidMount() {
    /* fetch worker list */
  }

  addWorker = () => this.props.history.push('/add-worker');

  render() {
    return (
      <Row>
        <Col md={12} lg={12}>
          <Card body>
            <Row>
              <Col md={9}>
                <h3>
                  <FaRegAddressBook /> Worker Profile
                </h3>
              </Col>
              <Col md={{ size: 2, offset: 1 }}>
                <ButtonGroup className="mr-3 mb-3">
                  <Button onClick={this.addWorker}>Add Worker</Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
              <Col>{/* Worker List Grid */}</Col>
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
    workers: store.workers,
    router: store.router,
  };
}

export default connect(mapStateToProps)(WorkersList);
