import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const FormPanel = ({ ...props }) => {

    let { validated, loading, buttonName, alert } = props

    return (
        <Fragment>
            <div className="mt-2">
                <div className="d-inline">
                    <Button type="submit" size="md" variant="secondary">{props.buttonName}</Button>
                </div>
                <div className="d-inline ml-3 text-danger">
                    {validated ? "Something's wrong!"
                        : alert.message ? alert.message
                            : ""}
                    {loading && <Spinner className="mt-1" animation="border" variant="secondary" size="sm" />}
                </div>
            </div>
        </Fragment>
    )
}
function mapState(state) {
    const { alert } = state;
    return { alert };
}

export const connectedFormPanel = connect(mapState)(FormPanel);
export { connectedFormPanel as FormPanel };