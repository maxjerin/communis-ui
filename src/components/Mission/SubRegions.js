import React from 'react';
import { Button, Card, CardBody, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import CardHeader from 'reactstrap/es/CardHeader';
import { IoMdAdd } from 'react-icons/io';
import CommunisComponent from '../CommunisComponent';
import CreateOrUpdateRegion from './CreateOrUpdateRegion';
import { FaGlobeAsia } from 'react-icons/fa';
import { NOTIFICATION_SYSTEM_STYLE } from '../../utils/constants';
import NotificationSystem from 'react-notification-system';
import { fetchSubRegions } from '../../actions/missionActions';

class SubRegions extends CommunisComponent {
  state = {
    modal: false,
    form: {
      missionRegionName: null,
      state: null,
      country: null,
      subRegions: null,
    },
  };

  componentWillReceiveProps(nextProps, nextContext) {
    debugger;
    if (this.state.modal && nextProps.mission.newSubRegion) {
      this.props.dispatch(fetchSubRegions(this.props.region.id));
      setTimeout(() => {
        if (!this.notificationSystem) {
          return;
        }

        this.notificationSystem.addNotification({
          title: <FaGlobeAsia />,
          message: 'Sub Region added successfully!!',
          level: 'info',
        });
      }, 1500);

      this.setState({
        modal: !this.state.modal,
      });
    }
  }

  onRegionSelect = region => {
    let path = '/mission-region';
    this.props.history.push({
      pathname: path,
      search: '?query=' + region.id,
      state: { region: region },
    });
  };

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
    return (
      <Card>
        <CardHeader>
          <div>
            <div className="float-left">
              <h5>Sub Regions </h5>
            </div>
            <div className="float-right">
              <Button outline size="sm" color="primary" onClick={this.toggle()}>
                <IoMdAdd /> Sub Region
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Region</th>
                <th scope="col">Tier</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {this.props.subRegionList.map(region => (
                <tr>
                  <th scope="row">{region.name}</th>
                  <td>{region.tier}</td>
                  <td>
                    <Button
                      color="link"
                      size="sm"
                      onClick={() => this.onRegionSelect(region)}
                    >
                      view
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>

        <CreateOrUpdateRegion
          parentRegion={this.props.region}
          modal={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          metaData={this.props.metaData}
          mission={this.props.mission}
          error={this.props.error}
          handleSubmit={this.props.handleSubRegionSubmit}
        ></CreateOrUpdateRegion>
        <NotificationSystem
          dismissible={false}
          ref={notificationSystem =>
            (this.notificationSystem = notificationSystem)
          }
          style={NOTIFICATION_SYSTEM_STYLE}
        />
      </Card>
    );
  }
}

export default withRouter(SubRegions);
