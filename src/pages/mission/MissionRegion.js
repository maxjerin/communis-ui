import React from 'react';
import { connect } from 'react-redux';
import {
  createSubRegion,
  fetchSubRegions,
  updateRegion,
} from './../../actions/missionActions';
import {
  Row,
  Col,
  Card,
  CardGroup,
  FormGroup,
  Label,
  Form,
  CardBody,
  CardHeader,
  Button,
  Input,
  ButtonGroup,
} from 'reactstrap';
import { FaGlobeAsia } from 'react-icons/fa';
import SubRegions from './../../components/Mission/SubRegions';
import { IoMdAdd } from 'react-icons/io';
import SaveOrUpdateAddress from '../../components/Address/SaveOrUpdateAddress';
import CommunisComponent from '../../components/CommunisComponent';
import { NOTIFICATION_SYSTEM_STYLE } from '../../utils/constants';
import NotificationSystem from 'react-notification-system';
import AuditWidget from '../../components/Common/AuditWidget';

class MissionRegion extends CommunisComponent {
  state = {
    form: {},
  };

  constructor(props) {
    super(props);
    this.state.form = this.props.location.state.region;
    this.props.dispatch(fetchSubRegions(this.props.location.state.region.id));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //Handle SubRegion Redirect
    if (
      nextProps.location.state.region &&
      nextProps.location.state.region.id != prevState.form.id
    ) {
      nextProps.dispatch(fetchSubRegions(nextProps.location.state.region.id));
      return {
        form: nextProps.location.state.region,
      };
    }

    let form = nextProps.mission.regions.filter(function (el) {
      return el.id == prevState.form.id;
    });
    form = form.length == 1 ? form[0] : {};
    return {
      form,
    };
  }

  updateRegion() {
    const region = this.state.form;
    this.props.dispatch(updateRegion(region));
  }

  handleSubRegionSubmit = form => {
    form.parentRegion = this.state.form.id;
    this.props.dispatch(createSubRegion(form));
  };

  /*componentWillReceiveProps(nextProps, nextContext){

        if (nextProps.mission.updatedRegion) {
            setTimeout(() => {
                if (!this.notificationSystem) {
                    return;
                }

                this.notificationSystem.addNotification({
                    title: <FaGlobeAsia />,
                    message: 'Region updated successfully!!',
                    level: 'info',
                });
            }, 1500);
            debugger;
        }
    }*/

  handleAddressUpdate = address => {
    if (address) {
      let form = this.state.form;
      form['address'] = address;
      this.setState({ form });
      console.log(this.state);
    }
  };

  render() {
    const region = this.state.form;
    const { metaData, mission } = this.props;
    const subRegionList = mission.subRegions[region.id]
      ? mission.subRegions[region.id]
      : [];
    let organizations = this.props.mission.organizations.map(
      (organization, idx) => (
        <option
          id={organization.id}
          value={organization.id}
          selected={idx == 0}
        >
          {organization.name}
        </option>
      ),
    );
    let tiers = this.props.mission.tiers.map((tier, idx) => (
      <option key={tier} value={tier} selected={idx == 0}>
        {tier}
      </option>
    ));

    return (
      <Row>
        <Col md={12} lg={12}>
          <Card body>
            <Row>
              <Col md={9}>
                <h3>
                  <FaGlobeAsia /> {region.name} | {region.address.state}
                  {region.state}{' '}
                </h3>
              </Col>
              <Col md={{ offset: 1 }}>
                <ButtonGroup>
                  <Button color="primary" onClick={() => this.updateRegion()}>
                    Update
                  </Button>
                  <Button color="secondary">Cancel</Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={5}>
                <Card>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="tier" sm={2}>
                          Organization
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="select"
                            name="organization"
                            id="organization"
                            value={this.state.form.organization}
                            onChange={e =>
                              this.updateFormState('organization', e)
                            }
                          >
                            {organizations}
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="missionRegionName" sm={2}>
                          Region Name
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Region/Mission Station Name"
                            value={this.state.form.name}
                            onChange={e => this.updateFormState('name', e)}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="tier" sm={2}>
                          Region Tier
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="select"
                            name="regionType"
                            id="tier"
                            value={this.state.form.tier}
                            onChange={e => this.updateFormState('tier', e)}
                          >
                            {tiers}
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col>
                          <SaveOrUpdateAddress
                            countries={metaData.countries}
                            onUpdateCallback={this.handleAddressUpdate}
                            address={this.state.form.address}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <AuditWidget entity={this.state.form} />
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
                <SubRegions
                  dispatch={this.props.dispatch}
                  region={region}
                  metaData={metaData}
                  mission={mission}
                  subRegionList={subRegionList}
                  handleSubRegionSubmit={this.handleSubRegionSubmit.bind(this)}
                />
              </Col>
              <Col></Col>
            </Row>
          </Card>
        </Col>
        <NotificationSystem
          dismissible={false}
          ref={notificationSystem =>
            (this.notificationSystem = notificationSystem)
          }
          style={NOTIFICATION_SYSTEM_STYLE}
        />
      </Row>
    );
  }
}

function mapStateToProps(store) {
  return {
    metaData: store.metaData,
    mission: store.mission,
  };
}

export default connect(mapStateToProps)(MissionRegion);
