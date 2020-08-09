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
import Error from '../Common/Error';

export default class CreateOrUpdateRegion extends CommunisComponent {
  constructor(props) {
    super(props);
    let region = {};
    if (this.props.parentRegion) {
      region = { ...this.props.parentRegion };
      region.id = null;
      region.subRegions = null;
      region.name = '';
    }
    this.state = {
      form: region,
    };
  }

  handleAddressUpdate = address => {
    if (address) {
      let form = this.state.form;
      form['address'] = address;
      this.setState({ form });
      console.log(this.state);
    }
  };

  createNewRegion = () => {
    let form = this.state.form;
    if (!form.organization) {
      const org = this.props.mission.organizations[0];
      form.organization = org.id;
    }
    this.props.handleSubmit(form);
  };

  render() {
    const isReadOnly = this.props.parentRegion ? true : false;
    let organizations = this.props.mission.organizations.map(
      (organization, idx) => (
        <option id={organization.id} value={organization.id}>
          {organization.name}
        </option>
      ),
    );
    let tiers = this.props.mission.tiers.map((tier, idx) => (
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
          <Error error={this.props.error} />
          <Form>
            <FormGroup row>
              <Label for="tier" sm={2}>
                Organization
              </Label>
              <Col sm={10}>
                <Input
                  disabled={isReadOnly}
                  type="select"
                  name="organization"
                  id="organization"
                  value={
                    this.state.form
                      ? this.state.form.organization
                      : organizations[0]
                  }
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
                  value={this.state.form.name}
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
                  countries={this.props.metaData.countries}
                  onUpdateCallback={this.handleAddressUpdate}
                  address={this.state.form.address}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.createNewRegion()}>
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
