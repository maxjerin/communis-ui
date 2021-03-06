import React from 'react';
import { connect } from 'react-redux';
import {
  fetchRegions,
  createRegion,
  fetchRegionTiers,
  fetchOrganizations,
} from './../../actions/missionActions';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'reactstrap';
import { FaGlobeAsia } from 'react-icons/fa';
import CreateOrUpdateRegion from '../../components/Mission/CreateOrUpdateRegion';
import MissionRegionGrid from '../../components/Mission/MissionRegionsGrid';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from './../../utils/constants';

class MissionRegionList extends React.Component {
  state = {
    modal: false,
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.modal && nextProps.mission.newRegion) {
      setTimeout(() => {
        if (!this.notificationSystem) {
          return;
        }

        this.notificationSystem.addNotification({
          title: <FaGlobeAsia />,
          message: 'Region added successfully!!',
          level: 'info',
        });
      }, 1500);

      this.setState({
        modal: !this.state.modal,
      });
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchRegionTiers());
    const { organizations, regions } = this.props.mission;
    if (regions && regions.length == 0) {
      this.props.dispatch(fetchRegions());
    }
    if (organizations && organizations.length == 0) {
      this.props.dispatch(fetchOrganizations());
    }
  }

  handleSubmit = form => {
    this.props.dispatch(createRegion(form));
  };
  '';
  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  render() {
    const { regions } = this.props.mission;

    return (
      <Row>
        <Col md={12} lg={12}>
          <Card body>
            <Row>
              <Col md={9}>
                <h3>
                  <FaGlobeAsia /> Mission Regions
                </h3>
              </Col>
              <Col md={{ size: 2, offset: 1 }}>
                <ButtonGroup className="mr-3 mb-3">
                  <Button onClick={this.toggle()}>New Region</Button>
                </ButtonGroup>
              </Col>
            </Row>

            <CreateOrUpdateRegion
              modal={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
              metaData={this.props.metaData}
              mission={this.props.mission}
              error={this.props.error}
              handleSubmit={this.handleSubmit}
            ></CreateOrUpdateRegion>

            <Row>
              <Col>
                <MissionRegionGrid regions={regions} />
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
    mission: store.mission,
    router: store.router,
    metaData: store.metaData,
    error: store.error,
  };
}

export default connect(mapStateToProps)(MissionRegionList);
