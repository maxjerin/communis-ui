import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'reactstrap';
import { authenticateUser } from '../actions/authenticationActions';
import { Redirect } from 'react-router-dom';
import { isExpired, setWebCookie } from './../utils/jwtTokenUtils';

class AuthPage extends React.Component {
  handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/signup');
    }
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  handleLoginSubmit = authentication => {
    this.props.dispatch(authenticateUser('admin@communis.com', 'A@12word'));
    //this.props.dispatch(authenticateUser(authentication.username, authentication.password));
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (
      nextProps.authentication &&
      !isExpired(nextProps.authentication.token)
    ) {
      setWebCookie(nextProps.authentication.token);
    }
  }

  render() {
    const { authentication, router, match } = this.props;

    if (authentication.token) {
      let redirectUrl = match.url == '/login' ? '/' : router.location.pathname;
      return (
        <Redirect
          to={{
            pathname: redirectUrl,
            state: { from: match.url },
          }}
        />
      );
    }

    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm
              authentication={this.props.authentication}
              authState={this.props.authState}
              onChangeAuthState={this.handleAuthState}
              onLogoClick={this.handleLogoClick}
              handleLoginSubmit={this.handleLoginSubmit}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(store) {
  return {
    authentication: store.authentication,
    router: store.router,
  };
}

export default connect(mapStateToProps)(AuthPage);
