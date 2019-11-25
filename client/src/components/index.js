import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { alertActions } from '../_actions'
import { Login } from './Login'
import Nav from './Nav'
import { Content } from './Content'


class App extends React.Component {
    render() {
        const { alert } = this.props;
        return (
            <Fragment>
                {this.props.loggedIn
                    ?
                    <Fragment>
                        <Nav />
                        <Content />
                    </Fragment>
                    :
                    <Login />
                }
            </Fragment>
        );
    }
}

function mapState(state) {
    const { loggedIn, user } = state.authentication
    const { loggingOut } = state.authentication
    return { loggingOut, loggedIn, user, focus }
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };