import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isValidToken } from './../utils/jwtTokenUtils';
import { fetchMetaData } from '../actions/metaDataActions';
import metaData from '../reducers/metaData';

const AuthModalPage = React.lazy(() => import('./../pages/AuthModalPage'));

const withAuthContext = WrappedComponent => {
  class HOC extends React.Component {
    state = {
      isAuthenticated: false,
    };

    componentWillMount() {
      if (isValidToken()) {
        if (!this.props.metaData.metadataLoaded) {
          this.props.dispatch(fetchMetaData());
        }
        this.setState({ ...this.state, isAuthenticated: true });
      }
    }

    render() {
      return this.state.isAuthenticated ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: this.props.match.url },
          }}
        />
      );
    }
  }

  return HOC;
};

function mapStateToProps(store) {
  return {
    metaData: store.metaData,
  };
}

export default compose(connect(mapStateToProps, null), withAuthContext);
