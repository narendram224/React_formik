import { Form, Formik } from 'formik'
import React from 'react'
import FormikControl from '../components/Resuable31/FormikControl'
import * as yup from 'yup'

function LoginForm () {

const initalValues = {
    email: '',
    password: ''
}
const onSubmit = values=>{
    console.log("The Values is:",values);
}

const LoginValidation = yup.object({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().required("Password is required")
})

    return (
       <Formik initialValues={initalValues} validationSchema={LoginValidation} onSubmit={onSubmit} >
          {
         formik=>{
         return(
                    <Form>
                        <FormikControl control="charkarainput" type="email" label="Email" name="email"   />
                        <FormikControl control="charkarainput" type="password"  label="Password" name="password"  />
                        <button type="submit" disabled={!formik.isValid} >Submit</button>
                    </Form>

                  )
              }
          }
       </Formik>
    )
}

export default LoginForm
