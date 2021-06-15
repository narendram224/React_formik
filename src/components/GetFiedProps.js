import React from 'react'
import {useFormik} from 'formik'
import PrimaryInput from './PrimaryInput';
import { BasicFormValidator } from './validators/FormValidationSchema';
import GetFieldPrimaryInput from './GetFieldPrimaryInput';
const initialValues ={
    name:"",
    email:"",
    channel:""
  }
function GetFieldPropsComp() {
    const onSubmit = values=>{
        console.log("values is ",values);
      }
const formik = useFormik({initialValues,onSubmit,validationSchema:BasicFormValidator})

    return (
        <form className="Form" onSubmit={formik.handleSubmit}>
      <h1>Yup and Get Field props method used Basic form 3</h1>
       <GetFieldPrimaryInput  name ="name" {...formik.getFieldProps('name')}
       error={formik.errors.name}touched={formik.touched.name} />
        <GetFieldPrimaryInput  name ="email" {...formik.getFieldProps('email')}
       error={formik.errors.email}touched={formik.touched.email} />
        <GetFieldPrimaryInput  name ="channel" {...formik.getFieldProps('channel')}
       error={formik.errors.channel}touched={formik.touched.channel} />
       <div><button type="submit">Submit</button></div>
      </form>
    )
}

export default GetFieldPropsComp
