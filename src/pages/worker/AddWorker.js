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
  resetWorkerWorkflow as dispatchResetWorkerWorkflow,
  setCurrentWorkflowPage as dispatchSetCurrentWorkflowPage,
  addPersonalDetails as dispatchAddPersonalDetails,
  addAddress as dispatchAddAddress,
  addFamily as dispatchAddFamily,
  addTestimony as dispatchAddTestimony,
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
      setCurrentWorkflowPage,
      currentWorkflowPage,
      workflowState,
      resetWorkerWorkflow,
    } = this.props;
    const page = findPage(workflowState, currentWorkflowPage);
    let action, name;
    if (page.next === null) {
      action = () => {
        resetWorkerWorkflow();
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
                  />
                ) : null}
                {isCurrentWorkflowPage('personalDetails') ? (
                  <PersonalDetails
                    persist={addPersonalDetails}
                    previous={this.previousPage()}
                    next={this.nextPage()}
                  />
                ) : null}
                {isCurrentWorkflowPage('address') ? (
                  <Address
                    persist={addAddress}
                    previous={this.previousPage()}
                    next={this.nextPage()}
                  />
                ) : null}
                {isCurrentWorkflowPage('testimony') ? (
                  <Testimony
                    persist={addTestimony}
                    previous={this.previousPage()}
                    next={this.nextPage()}
                  />
                ) : null}
                {isCurrentWorkflowPage('summary') ? (
                  <Summary
                    summary={worker}
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
  };
}

AddWorker.defaultProps = {
  hasFamilyPage: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWorker);
