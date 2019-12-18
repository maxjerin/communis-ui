import AuthForm, {STATE_LOGIN} from 'components/AuthForm';
import React from 'react';
import {connect} from 'react-redux';
import {Card, Col, Row} from 'reactstrap';
import {authenticateUser} from '../actions/authenticationActions';
import {Redirect} from "react-router-dom";

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

    handleLoginSubmit = (authentication) => {
        this.props.dispatch(authenticateUser(authentication.username, authentication.password));
    }

    render() {
        const {
            authentication,
            router,
            match
        } = this.props;

        if(authentication.token){
            debugger;
            return <Redirect
                to={{
                    pathname: router.location.pathname,
                    state: { from : match.url}
                }}
            />
        }

        return (
            <Row
                style={{
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Col md={6} lg={4}>
                    <Card body>
                        <AuthForm
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
    debugger;
    return {
        authentication: store.authentication,
        router: store.router
    }
}

export default connect(mapStateToProps)(AuthPage);
