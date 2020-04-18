import React from 'react';
import { connect } from 'react-redux';
import { fetchSubRegions } from './../../actions/missionActions';
import {
  Row,
  Col,
  Card,
  CardGroup,
  FormGroup,
  Label,
  Form,
  CardBody,
} from 'reactstrap';
import { FaGlobeAsia } from 'react-icons/fa';
import SubRegions from './../../components/Mission/SubRegions';

class MissionRegion extends React.Component {
  componentWillMount() {
    const { region } = this.props.location.state;
    this.props.dispatch(fetchSubRegions(region.id));
  }

  render() {
    debugger;
    const { region } = this.props.location.state;

    const { metaData, mission } = this.props;

    const subRegionList = mission.subRegions[region.id]
      ? mission.subRegions[region.id]
      : [];

    return (
      <Row>
        <Col md={12} lg={12}>
          <Card body>
            <Row>
              <Col md={12}>
                <h3>
                  <FaGlobeAsia /> {region.missionRegionName} | {region.state}{' '}
                </h3>
              </Col>
            </Row>{' '}
            <Row>
              <Col>
                <CardGroup>
                  <Card>
                    <CardBody>
                      <Form>
                        <FormGroup row>
                          <Label
                            for="exampleEmail"
                            sm={3}
                            className="text-primary"
                          >
                            Region Name{' '}
                          </Label>{' '}
                          <Label sm={9}>
                            <p> Test </p>
                          </Label>{' '}
                        </FormGroup>{' '}
                        <FormGroup row>
                          <Label
                            for="exampleEmail"
                            sm={3}
                            className="text-primary"
                          >
                            Region Name{' '}
                          </Label>{' '}
                          <Label sm={9}>
                            <p> Test </p>
                          </Label>{' '}
                        </FormGroup>{' '}
                        <FormGroup row>
                          {' '}
                          <Label
                            for="exampleEmail"
                            sm={3}
                            className="text-primary"
                          >
                            Region Name{' '}
                          </Label>{' '}
                          <Label sm={9}>
                            <p> Test </p>
                          </Label>{' '}
                        </FormGroup>{' '}
                        <FormGroup row>
                          {' '}
                          <Label
                            for="exampleEmail"
                            sm={3}
                            className="text-primary"
                          >
                            Region Name{' '}
                          </Label>{' '}
                          <Label sm={9}>
                            <p> Test </p>
                          </Label>{' '}
                        </FormGroup>{' '}
                      </Form>{' '}
                    </CardBody>{' '}
                  </Card>{' '}
                  <SubRegions
                    region={region}
                    metaData={metaData}
                    subRegionList={subRegionList}
                  />
                </CardGroup>{' '}
              </Col>{' '}
            </Row>{' '}
          </Card>{' '}
        </Col>{' '}
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
