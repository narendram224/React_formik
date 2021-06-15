import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorTextDiv from '../ErrorMessage'

function Input(props) {
    const {label,name,...rest} =props
    return (
        <div className="form_control">
                <label htmlFor={name}>{label}</label>
                <Field id={name} name={name} {...rest} />
                <ErrorMessage name={name} component={ErrorTextDiv} />
        </div>
    )
}

export default Input
