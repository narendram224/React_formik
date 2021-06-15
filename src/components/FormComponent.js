import React from 'react'
import {ErrorMessage, Field, Form, Formik, useFormik} from 'formik'
import PrimaryInput from './PrimaryInput';
import { BasicFormValidator } from './validators/FormValidationSchema';
import FieldComponent from './FieldComponent';
import ErrorTextDiv from './ErrorMessage'
const initialValues ={
    name:"",
    email:"",
    channel:"",
    comments:"",
    address:"",
  }
function FormComponent() {
    const onSubmit = values=>{
        console.log("values is ",values);
      }
// const formik = useFormik({initialValues,onSubmit,validationSchema:BasicFormValidator})

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={BasicFormValidator}>
        <Form className="Form" >
          <h1>Yup formik Formik,Form,Field,ErrorMessage component</h1>
       <FieldComponent  name ="name"  />
        <FieldComponent  name ="email" />
        <FieldComponent  name ="channel"  />
        <label htmlFor ="comments">Comments</label>
        <Field name="comments" as="textarea" id="comments" />
        {/* custom error message component */}
        <ErrorMessage name="comments" component={ErrorTextDiv}  />
        {/* basicaly used for custom forms */}
        <label htmlFor ="address">address</label>
        <Field name="address" as="textarea" id="address" >
            {
                (props)=>{
                    const {field,form,meta} = props;
                    return <input type="text" {...field} />
                }
            }
        </Field>
        {/* render props pattent to show custom error message */}
        <ErrorMessage name="address"  >
            {errorMessage=><div className="error">{errorMessage}</div>}
        </ErrorMessage>


       <div><button type="submit">Submit</button></div>
      </Form>
      </Formik>

    )
}

export default FormComponent
