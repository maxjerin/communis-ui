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
  CardHeader,
} from 'reactstrap';
import { FaGlobeAsia } from 'react-icons/fa';
import SubRegions from './../../components/Mission/SubRegions';

class MissionRegion extends React.Component {
  componentWillMount() {
    const { region } = this.props.location.state;
    this.props.dispatch(fetchSubRegions(region.id));
  }

  render() {
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
                  <FaGlobeAsia /> {region.missionRegnameionName} |{' '}
                  {region.state}{' '}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col sm={7}>
                <Card>
                  <CardBody></CardBody>
                </Card>
              </Col>
              <Col>
                <SubRegions
                  region={region}
                  metaData={metaData}
                  subRegionList={subRegionList}
                />
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
    metaData: store.metaData,
    mission: store.mission,
  };
}

export default connect(mapStateToProps)(MissionRegion);
