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
import AuditWidget from '../Common/AuditWidget';

export default class SaveOrUpdateOrganization extends CommunisComponent {
  state = {
    form: {
      name: null,
      address: null,
    },
  };

  componentWillReceiveProps(nextProps) {
    const organization = nextProps.organization ? nextProps.organization : {};
    this.setState({ form: organization });
  }

  handleAddressUpdate = address => {
    if (address) {
      let form = this.state.form;
      form['address'] = address;
      this.setState({ form });
      console.log(this.state);
    }
  };

  render() {
    const organization = this.props.organization ? this.props.organization : {};
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle()}>
          {this.state.form.id
            ? 'Update Organization - ' + this.state.form.name
            : 'Create New Organization'}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="missionRegionName" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="organizationName"
                  id="organizationName"
                  placeholder="Enter Organization Name"
                  value={this.state.form.name}
                  onChange={e => this.updateFormState('name', e)}
                />
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
            <FormGroup>
              <Label for="missionRegionName" sm={2}></Label>
              <Col sm={10}>
                <AuditWidget entity={this.state.form} />
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
