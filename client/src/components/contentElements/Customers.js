import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormMain from './FormMain'
import TableCustomers from './TableCustomers'
import formCustomersConfig from '../contentConfig/FormCustomers.json'
import formCustomersEditConfig from '../contentConfig/FormCustomersEdit.json'
import { customersActions, alertActions } from '../../_actions'

const Customers = ({ ...props }) => {

    const [tab, setTab] = useState("recentCustomers")
    const [title, setTitle] = useState()
    const {
        focus,
        submit,
        get,
        modify,
        clear,
        customers
    } = props;

    const onClick = (e) => {
        setTab(e.target.value)
        console.log(e.target.value)
        setTitle(e.target.value ==
            "recentCustomers" ? "Recent" : e.target.value ==
                "newCustomer" ? "Add New" : "")
        e.target.value == "recentCustomers" && get("")
        clear()
    }

    const editEntry = (id) => {
        setTab("editCustomer")
        setTitle("Modify")
        clear()
        get(id)
    }

    const handleSearch = (e) => {
        setTab("searchCustomers")
        setTitle("Search Results")
        clear()
        e.preventDefault()
        get(e.target[1].selectedOptions[0].value + "=" + e.target[0].value)
    }

    return (
     <Container>
                <Row>

                    <Button className="m-2" onClick={onClick} value="newCustomer" size="sm" variant="dark">New</Button>
                    <Button className="m-2" onClick={onClick} value="recentCustomers" size="sm" variant="dark">Recent</Button>

                    <Form className="m-2 ml-auto" inline onSubmit={handleSearch}>
                        <InputGroup>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2 bg-dark" />

                            <InputGroup.Text className="p-0 px-2 text-white bg-secondary text-dark" id="inputGroupPrepend">
                                by:
                                        <Form.Control className="h-75 p-0 m-0 bg-secondary" as="select">
                                    <option value="lastName">Last Name</option>
                                    <option value="ref">AR Ref</option>
                                </Form.Control>
                            </InputGroup.Text>

                            <Button variant="outline-success" type="submit">Search</Button>
                        </InputGroup>
                    </Form>

                </Row>

                <h3 className="text-center"> {title} </h3>

                {tab == "newCustomer" &&
                    <FormMain
                        formFields={formCustomersConfig}
                        formData=""
                        loading=""
                        buttonName="Submit"
                        onSubmit={submit} />}

                {tab == "editCustomer" &&
                    <FormMain
                        formFields={formCustomersEditConfig}
                        formData={customers.entries && customers.entries[0]}
                        loading=""
                        buttonName="Modify"
                        onSubmit={modify} />}

                {tab == "recentCustomers" &&
                    <TableCustomers customers={customers} editEntry={editEntry} />
                }
                {tab == "searchCustomers" &&
                    <TableCustomers customers={customers} editEntry={editEntry} />
                }
            </Container>
    );
}

function mapState(state) {
    const { focus } = state.content
    const { customers } = state
    return { focus, customers }
}

const actionCreators = {
    submit: customersActions.submit,
    get: customersActions.get,
    modify: customersActions.modify,
    clear: alertActions.clear
};

const connectedCustomers = connect(mapState, actionCreators)(Customers);
export { connectedCustomers as Customers };