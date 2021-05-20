import React from 'react';
import { Button, ButtonGroup, Card, Col, Row } from 'reactstrap';
import Family from '../../components/Worker/AddWorkerWorkflow/Family';
import PersonalDetails from '../../components/Worker/AddWorkerWorkflow/PersonalDetails';
import Address from '../../components/Worker/AddWorkerWorkflow/Address';
import Testimony from '../../components/Worker/AddWorkerWorkflow/Testimony';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  addAddress as dispatchAddAddress,
  addFamily as dispatchAddFamily,
  addPersonalDetails as dispatchAddPersonalDetails,
  addTestimony as dispatchAddTestimony,
  updateWorker as dispatchUpdateWorker,
  setSelectedWorker as dispatchSetSelectedWorker,
} from '../../actions/workerActions';
import { deserializeWorker } from '../../transformers/workerTransfomer';

class WorkerProfile extends React.Component {
  state = {
    selectedTab: 'personalDetails',
    originalWorkerProfile: null,
  };

  componentDidMount() {
    const { workers } = this.props;
    const workerId = this.props.match.params.id;
    const worker = _.filter(workers, ['id', workerId]);
    this.props.setSelectedWorker(deserializeWorker(worker[0]));
    this.setState({ originalWorkerProfile: deserializeWorker(worker[0]) });
  }

  render() {
    const { selectedTab, originalWorkerProfile } = this.state;
    const {
      addPersonalDetails,
      addFamily,
      addTestimony,
      addAddress,
      countries,
      selectedWorker,
      updateWorker,
    } = this.props;

    const updateEnabled = _.isEqual(originalWorkerProfile, selectedWorker);

    const isCurrentTab = currentTab => currentTab === selectedTab;

    return (
      <Row>
        <Col md={12} lg={12}>
          <Card body>
            <Row>
              <Col>
                <ButtonGroup>
                  <Button
                    onClick={() =>
                      this.setState({ selectedTab: 'personalDetails' })
                    }
                  >
                    Personal Details
                  </Button>
                  <Button
                    onClick={() => this.setState({ selectedTab: 'address' })}
                  >
                    Address
                  </Button>
                  <Button
                    onClick={() => this.setState({ selectedTab: 'family' })}
                  >
                    Family
                  </Button>
                  <Button
                    onClick={() => this.setState({ selectedTab: 'testimony' })}
                  >
                    Testimony
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                {isCurrentTab('family') ? (
                  <Family
                    persist={addFamily}
                    showNavigation={false}
                    details={selectedWorker.family}
                  />
                ) : null}
                {isCurrentTab('personalDetails') ? (
                  <PersonalDetails
                    persist={addPersonalDetails}
                    showNavigation={false}
                    details={selectedWorker.personalDetails}
                  />
                ) : null}
                {isCurrentTab('address') ? (
                  <Address
                    persist={addAddress}
                    showNavigation={false}
                    countries={countries}
                    details={selectedWorker.address}
                  />
                ) : null}
                {isCurrentTab('testimony') ? (
                  <Testimony
                    persist={addTestimony}
                    showNavigation={false}
                    details={selectedWorker.testimony}
                  />
                ) : null}
              </Col>
            </Row>
            <Row>
              <Button disabled={updateEnabled} onClick={updateWorker}>
                Update
              </Button>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(store) {
  return {
    router: store.router,
    workers: store.worker.workers,
    selectedWorker: store.workerWorkflow.worker,
    countries: store.metaData.countries,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedWorker: selectedWorker =>
      dispatch(dispatchSetSelectedWorker(selectedWorker)),
    addPersonalDetails: personalDetails =>
      dispatch(dispatchAddPersonalDetails(personalDetails)),
    addAddress: address => dispatch(dispatchAddAddress(address)),
    addFamily: family => dispatch(dispatchAddFamily(family)),
    addTestimony: testimony => dispatch(dispatchAddTestimony(testimony)),
    updateWorker: () => dispatch(dispatchUpdateWorker()),
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(WorkerProfile);
