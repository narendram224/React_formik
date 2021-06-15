import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorTextDiv from './ErrorMessage'
function FieldComponent({name,error,touched}) {
    return (
        <>
         <label htmlFor="name">{name}</label>
        <Field type="text" id="name" name={name}  />
        <ErrorMessage component={ErrorTextDiv} name={name} />
        </>
    )

}
export default FieldComponent