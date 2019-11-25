import React, { Component, Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../_actions'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import FormMain from './contentElements/FormMain'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import formLoginConfig from './contentConfig/FormLogin.json'
import formRegisterConfig from './contentConfig/FormRegister.json'

const Login = ({ ...props }) => {
    const [tab, setTab] = useState("login")
    const { loggingIn, loggedIn, alert, registering } = props
    const onClick = (e) => {
        setTab(e.target.value)
    }

    return (
        <Container>
            <div className="d-flex flex-column mb-5">
                <ButtonGroup size="lg" aria-label="" block>
                    <Button onClick={onClick} value="login" variant="info">Login</Button>
                    <Button onClick={onClick} value="register" variant="info">Register</Button>
                </ButtonGroup>
            </div>
            <Row>
                {tab == "login" &&
                    <Col className="mr-auto ml-auto" lg={4}>
                        <h1 className="display-4 text-center">Login</h1>
                        <FormMain
                            formFields={formLoginConfig}
                            formData=""
                            loading={loggingIn}
                            buttonName="Anmelden"
                            onSubmit={props.login} />
                    </Col>}

                {tab == "register" &&
                    <Col className="mr-auto ml-auto" lg={8}>
                        <h1 className="display-4 text-center">Register</h1>
                        <FormMain
                            formFields={formRegisterConfig}
                            formData=""
                            loading={registering}
                            buttonName="Registrieren"
                            onSubmit={props.register} />
                    </Col>}
            </Row>
        </Container>
    );
}

function mapState(state) {
    const { registering } = state.registration;
    const { alert } = state;
    const { loggingIn } = state.authentication;
    const loggedIn = state.authentication.loggedIn;
    return { loggingIn, loggedIn, alert, registering };
}

const actionCreators = {
    register: userActions.register,
    login: userActions.login,
    logout: userActions.logout
};

const connectedLogin = connect(mapState, actionCreators)(Login);
export { connectedLogin as Login };