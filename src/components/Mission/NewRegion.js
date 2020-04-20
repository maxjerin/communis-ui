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

export default class EditMissionRegion extends CommunisComponent {
  state = {
    form: {
      missionRegionName: null,
      state: null,
      country: null,
    },
  };
  render() {
    debugger;
    let countries = this.props.metaData.countries.map(country => (
      <option key={country.code} value={country.code}>
        {country.name}
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
            <FormGroup row>
              <Label for="state" sm={2}>
                State
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  onChange={e => this.updateFormState('state', e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="country" sm={2}>
                Country
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="country"
                  id="country"
                  onChange={e => this.updateFormState('country', e)}
                >
                  {countries}
                </Input>
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
