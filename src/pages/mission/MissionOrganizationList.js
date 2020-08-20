import React from 'react';
import { connect } from 'react-redux';
import {
  fetchRegions,
  createRegion,
  fetchRegionTiers,
  fetchOrganizations,
  createOrganization,
  updateOrganization,
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
import MissionOrganizationsGrid from '../../components/Mission/MissionOrganizationsGrid';
import SaveOrUpdateOrganization from '../../components/Mission/SaveOrUpdateOrganization';

class MissionOrganizationList extends React.Component {
  state = {
    modal: false,
    organization: null,
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.mission.organizationUpdated) {
      setTimeout(() => {
        if (!this.notificationSystem) {
          return;
        }

        this.notificationSystem.addNotification({
          title: <FaGlobeAsia />,
          message: 'Organization added successfully!!',
          level: 'info',
        });
      }, 1500);

      this.setState({
        modal: !this.state.modal,
      });
    }
  }

  componentDidMount() {
    const { organizations } = this.props.mission;
    if (organizations && organizations.length == 0) {
      this.props.dispatch(fetchOrganizations());
    }
  }

  handleSubmit = form => {
    form.id
      ? this.props.dispatch(updateOrganization(form))
      : this.props.dispatch(createOrganization(form));
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
        organization: {},
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  onOrganizationSelect = organization => {
    this.setState({ ...this.state, organization, modal: !this.state.modal });
  };

  render() {
    const { organizations } = this.props.mission;

    return (
      <Row>
        <Col md={12} lg={12}>
          <Card body>
            <Row>
              <Col md={9}>
                <h3>
                  <FaGlobeAsia /> Mission Organizations
                </h3>
              </Col>
              <Col md={{ size: 2, offset: 1 }}>
                <ButtonGroup className="mr-3 mb-3">
                  <Button onClick={this.toggle()}>New Organization</Button>
                </ButtonGroup>
              </Col>
            </Row>

            <SaveOrUpdateOrganization
              modal={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
              metaData={this.props.metaData}
              mission={this.props.mission}
              handleSubmit={this.handleSubmit}
              organization={this.state.organization}
            ></SaveOrUpdateOrganization>

            <Row>
              <Col>
                <MissionOrganizationsGrid
                  organizations={organizations}
                  onOrganizationSelect={this.onOrganizationSelect.bind(this)}
                />
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
  };
}

export default connect(mapStateToProps)(MissionOrganizationList);
