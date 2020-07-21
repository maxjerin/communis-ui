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
  addWorker as dispatchAddWorker,
} from '../../actions/workerActions';
import { deserializeWorker } from '../../transformers/workerTransfomer';
import { initialState } from '../../reducers/workerWorkflow';

class WorkerProfile extends React.Component {
  state = {
    selectedTab: 'personalDetails',
    selectedWorker: initialState.worker,
  };

  componentDidMount() {
    const { workers } = this.props;
    const workerId = this.props.match.params.id;
    const worker = _.filter(workers, ['id', workerId]);
    if (worker && worker.length) {
      this.setState({ selectedWorker: deserializeWorker(worker[0]) });
    }
  }

  render() {
    const { selectedTab, selectedWorker } = this.state;
    const {
      addPersonalDetails,
      addFamily,
      addTestimony,
      addAddress,
      countries,
    } = this.props;
    const isCurrentWorkflowPage = selectedWorkflowPage =>
      selectedWorkflowPage === selectedTab;

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
                {isCurrentWorkflowPage('family') ? (
                  <Family
                    persist={addFamily}
                    showNavigation={false}
                    details={selectedWorker.family}
                  />
                ) : null}
                {isCurrentWorkflowPage('personalDetails') ? (
                  <PersonalDetails
                    persist={addPersonalDetails}
                    showNavigation={false}
                    details={selectedWorker.personalDetails}
                  />
                ) : null}
                {isCurrentWorkflowPage('address') ? (
                  <Address
                    persist={addAddress}
                    showNavigation={false}
                    countries={countries}
                    details={selectedWorker.address}
                  />
                ) : null}
                {isCurrentWorkflowPage('testimony') ? (
                  <Testimony
                    persist={addTestimony}
                    showNavigation={false}
                    details={selectedWorker.testimony}
                  />
                ) : null}
              </Col>
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
    countries: store.metaData.countries,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPersonalDetails: personalDetails =>
      dispatch(dispatchAddPersonalDetails(personalDetails)),
    addAddress: address => dispatch(dispatchAddAddress(address)),
    addFamily: family => dispatch(dispatchAddFamily(family)),
    addTestimony: testimony => dispatch(dispatchAddTestimony(testimony)),
    addWorker: worker => dispatch(dispatchAddWorker(worker)),
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(WorkerProfile);
