import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Col, Row } from 'reactstrap';
import { FaRegAddressBook } from 'react-icons/fa';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from './../../utils/constants';
import PersonalDetails from '../../components/Worker/AddWorkerWorkflow/PersonalDetails';
import Address from '../../components/Worker/AddWorkerWorkflow/Address';
import Testimony from '../../components/Worker/AddWorkerWorkflow/Testimony';
import Summary from '../../components/Worker/AddWorkerWorkflow/Summary';
import Family from '../../components/Worker/AddWorkerWorkflow/Family';
import {
  addAddress as dispatchAddAddress,
  addFamily as dispatchAddFamily,
  addPersonalDetails as dispatchAddPersonalDetails,
  addTestimony as dispatchAddTestimony,
  addWorker as dispatchAddWorker,
  resetWorkerWorkflow as dispatchResetWorkerWorkflow,
  setCurrentWorkflowPage as dispatchSetCurrentWorkflowPage,
  setWorkflowState,
} from '../../actions/workerActions';

const findFirstPage = workflowPages =>
  workflowPages.filter(page => page.previous === null)[0].name;

const findPage = (workflowPages, pageName) =>
  workflowPages.filter(page => page.name === pageName)[0];

class AddWorker extends React.Component {
  previousPage = () => {
    const {
      setCurrentWorkflowPage,
      currentWorkflowPage,
      workflowState,
      resetWorkerWorkflow,
      worker,
    } = this.props;
    const page = findPage(workflowState, currentWorkflowPage);
    let action, name;
    if (page.previous === null) {
      action = () => {
        resetWorkerWorkflow();
        this.props.history.push('/workers');
      };
      name = 'Cancel';
    } else {
      action = () => setCurrentWorkflowPage(page.previous);
      name = 'Previous';
    }
    return <Button onClick={action}>{name}</Button>;
  };

  nextPage = () => {
    const {
      addWorker,
      setCurrentWorkflowPage,
      currentWorkflowPage,
      workflowState,
      worker,
    } = this.props;
    const page = findPage(workflowState, currentWorkflowPage);
    let action, name;
    if (page.next === null) {
      action = () => {
        addWorker(worker);
        this.props.history.push('/workers');
      };
      name = 'Finish';
    } else {
      action = () => setCurrentWorkflowPage(page.next);
      name = 'Next';
    }
    return <Button onClick={action}>{name}</Button>;
  };

  render() {
    const {
      currentWorkflowPage,
      countries,
      setCurrentWorkflowPage,
      workflowState,
      addPersonalDetails,
      addFamily,
      addTestimony,
      addAddress,
      worker,
    } = this.props;

    if (currentWorkflowPage === null && workflowState !== null) {
      const firstPage = findFirstPage(workflowState);
      setCurrentWorkflowPage(firstPage);
    }
    const isCurrentWorkflowPage = selectedWorkflowPage =>
      selectedWorkflowPage === currentWorkflowPage;

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
                {isCurrentWorkflowPage('family') ? (
                  <Family
                    persist={addFamily}
                    previous={this.previousPage()}
                    next={this.nextPage()}
                    details={worker.family}
                  />
                ) : null}
                {isCurrentWorkflowPage('personalDetails') ? (
                  <PersonalDetails
                    persist={addPersonalDetails}
                    previous={this.previousPage()}
                    next={this.nextPage()}
                    details={worker.personalDetails}
                  />
                ) : null}
                {isCurrentWorkflowPage('address') ? (
                  <Address
                    persist={addAddress}
                    previous={this.previousPage()}
                    next={this.nextPage()}
                    countries={countries}
                    details={worker.address}
                  />
                ) : null}
                {isCurrentWorkflowPage('testimony') ? (
                  <Testimony
                    persist={addTestimony}
                    previous={this.previousPage()}
                    next={this.nextPage()}
                    details={worker.testimony}
                  />
                ) : null}
                {isCurrentWorkflowPage('summary') ? (
                  <Summary
                    summary={worker}
                    hasFamily={workflowState.hasFamily}
                    previous={this.previousPage()}
                    next={this.nextPage()}
                  />
                ) : null}
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
    currentWorkflowPage: store.workerWorkflow.workflow.currentWorkflowPage,
    workflowState: store.workerWorkflow.workflow.state,
    countries: store.metaData.countries,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setWorkflowState: dispatch(setWorkflowState(ownProps.hasFamilyPage)),
    setCurrentWorkflowPage: page =>
      dispatch(dispatchSetCurrentWorkflowPage(page)),
    resetWorkerWorkflow: () => dispatch(dispatchResetWorkerWorkflow()),
    addPersonalDetails: personalDetails =>
      dispatch(dispatchAddPersonalDetails(personalDetails)),
    addAddress: address => dispatch(dispatchAddAddress(address)),
    addFamily: family => dispatch(dispatchAddFamily(family)),
    addTestimony: testimony => dispatch(dispatchAddTestimony(testimony)),
    addWorker: worker => dispatch(dispatchAddWorker(worker)),
  };
}

AddWorker.defaultProps = {
  hasFamilyPage: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWorker);
