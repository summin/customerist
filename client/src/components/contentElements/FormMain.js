import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { FormPanel } from './FormPanel'

const validationFeedback = {
    position: 'absolute',
    fontWeight: "800",
    fontize: "2ex",
    top: "35px"
}

const labelStyle = {
    minHeight: '2.5em'
}

const labelSpanStyle = {
    position: "absolute",
    bottom: "50px",
}

const FormMain = ({ ...props }) => {

    const [validated, setValidated] = useState(false)
    const { formFields, formData, buttonName, loading } = props

    const handleSubmit = event => {

        let data = {}
        Object.values(event.target).map((i) => {
            i.name && Object.assign(data, { [i.name]: i.value })
        })
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()

        }
        setValidated(true);

        if (form.checkValidity() !== false) {
            setValidated(false)
            event.preventDefault()
            console.log(data)
            props.onSubmit(data)
        }
    };

    const disabledFormSrc = (entry) => {
        const entries = {
            "dbRequestorFullName": props.user.firstName + " " + props.user.lastName,
            "dbRequestorEmployeeID": props.user.username,
            "dbDateofRequest": (new Date).toLocaleDateString('en-GB')
        }
        if (entries[entry])
            return entries[entry]
        else return false
    }

    const getGroups = (formConfig) => {
        let formGroups = []
        for (let key in formConfig) {
            if (formConfig[key].gr != formGroups[formGroups.length - 1])
                formGroups.push(formConfig[key].gr)
        }
        return formGroups
    }


    const getOptions = (string) => {
        let options = []
        options = string.split(", ")
        return options
    }

    return (
        <Form className="mb-4 pb-4" noValidate validated={validated} onSubmit={handleSubmit}>
            {getGroups(formFields).map((i) => (
                <Form.Row key={i}>
                    {Object.keys(formFields).map((j) => (
                        (formFields[j].gr == i) &&
                        <Form.Group  className={formFields[j].none && "d-none"} key={j} as={Col} sm={formFields[j].w} controlId={j}>
                            <Form.Label
                                style={labelStyle}>
                                <span className="mr-4" style={labelSpanStyle}><small><strong>{formFields[j].name}</strong></small></span></Form.Label>
                            <InputGroup>
                                {formFields[j].prepend &&
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">{formFields[j].prepend}</InputGroup.Text>
                                    </InputGroup.Prepend>}
                                {formFields[j].type == "text" &&
                                    <Form.Control
                                        type="text"
                                        name={j}
                                        defaultValue={formData && formData[j]}
                                        aria-describedby="inputGroupPrepend"
                                        required={false} />}
                                {formFields[j].type == "drop-down" &&
                                    <Form.Control
                                        as="select"
                                        name={j}
                                        required
                                        defaultValue={formData && formData[j]}>
                                        {getOptions(formFields[j].options).map((k) => (
                                            <option key={k}>{k}</option>
                                        ))}
                                    </Form.Control>}
                                <Form.Control.Feedback style={validationFeedback} type="invalid">
                                    Please provide a valid entry.
                                    </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    ))
                    }
                </Form.Row>
            ))}
            <FormPanel
                alert={alert}
                validated={validated}
                loading={loading}
                buttonName={buttonName} />
        </Form>
    );

}

export default FormMain