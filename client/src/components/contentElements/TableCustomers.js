import React, { Fragment, useState } from 'react'
import Table from 'react-bootstrap/Table'


const TableCustomers = ({ ...props }) => {

    const customers = props.customers
    const editEntry = props.editEntry


    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>AR Ref</th>
                    <th>Last Name</th>
                    <th className="d-md-table-cell d-none">First Name</th>
                    <th className="d-md-table-cell d-none">Gender</th>
                    <th className="d-md-table-cell d-none">Street</th>
                    <th className="d-md-table-cell d-none">Post Code</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {customers.entries && Object.values(customers.entries).map((i) => (
                    <tr className="cursorPointer" onClick={() => editEntry(i._id)}>
                        <td>{i.ref}</td>
                        <td>{i.lastName}</td>
                        <td className="d-md-table-cell d-none">{i.firstName}</td>
                        <td className="d-md-table-cell d-none">{i.gender}</td>
                        <td className="d-md-table-cell d-none">{i.street}</td>
                        <td className="d-md-table-cell d-none">{i.postCode}</td>
                        <td>{i.city}</td>
                    </tr>))
                }
            </tbody>
        </Table>
    );
}

export default TableCustomers;