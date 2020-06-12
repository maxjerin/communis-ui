import React from 'react';
import CommunisComponent from '../CommunisComponent';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import SaveOrUpdateAddress from '../Address/SaveOrUpdateAddress';

export default class EditMissionRegion extends CommunisComponent {
  state = {
    form: {
      name: null,
      address: null,
    },
  };

  handleAddressUpdate = address => {
    if (address) {
      let form = this.state.form;
      form['address'] = address;
      this.setState({ form });
      console.log(this.state);
    }
  };

  render() {
    let organizations = this.props.mission.organizations.map(organization => (
      <option key={organization.id} value={organization.id}>
        {organization.name}
      </option>
    ));
    let tiers = this.props.mission.tiers.map(tier => (
      <option key={tier} value={tier}>
        {tier}
      </option>
    ));
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle()}>
          Create New Region
        </ModalHeader>
        <ModalBody>
          {this.handleException()}
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
                  onChange={e => this.updateFormState('organization', e)}
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
                  onChange={e => this.updateFormState('tier', e)}
                >
                  {tiers}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <SaveOrUpdateAddress
                  countries={this.props.metaData.countries}
                  onUpdateCallback={this.handleAddressUpdate}
                  address={this.state.form.address}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => this.props.handleSubmit(this.state.form)}
          >
            Save
          </Button>
          <Button color="secondary" onClick={this.props.toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
