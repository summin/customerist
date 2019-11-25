import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Customers } from './contentElements/Customers'


const Content = ({ ...props }) => {

    const { focus } = props;
    return (
        <Fragment>
            <Customers />
        </Fragment>
    );

}

function mapState(state) {
    const { focus } = state.content
    return { focus }
}

const connectedContent = connect(mapState)(Content);
export { connectedContent as Content };

// {focus == "customers" ? <Customers /> : <h1 className="text-center"> Welcome </h1>}