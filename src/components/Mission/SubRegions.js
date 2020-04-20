import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import CardHeader from 'reactstrap/es/CardHeader';
import { IoMdAdd } from 'react-icons/io';
import { createRegion } from '../../actions/missionActions';
import CommunisComponent from '../CommunisComponent';

class SubRegions extends CommunisComponent {
  state = {
    modal: false,
    form: {
      missionRegionName: null,
      state: null,
      country: null,
    },
  };

  handleSubmit = form => {
    debugger;
    form.state = this.props.region.state;
    form.country = this.props.region.country;
    //this.props.dispatch(createRegion(form));
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
    debugger;
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
                  <th scope="row">{region.missionRegionName}</th>
                  <td>{region.tier}</td>
                  <td>
                    <Button
                      color="link"
                      size="sm"
                      onClick={this.onRegionSelect}
                    >
                      view
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle()}>Create New Region</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="missionRegionName" sm={2}>
                  Region Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="missionRegionName"
                    id="missionRegionName"
                    placeholder="Enter Region/Mission Station Name"
                    onChange={e => this.updateFormState('missionRegionName', e)}
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.handleSubmit(this.state.form)}
            >
              Save
            </Button>
            <Button color="secondary" onClick={this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

export default withRouter(SubRegions);
