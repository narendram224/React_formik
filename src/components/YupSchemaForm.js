import React from 'react'
import {useFormik} from 'formik'
import PrimaryInput from './PrimaryInput';
import { BasicFormValidator } from './validators/FormValidationSchema';
const initialValues ={
    name:"",
    email:"",
    channel:""
  }
function YupSchemaForm() {
    const onSubmit = values=>{
        console.log("values is ",values);
      }
const formik = useFormik({initialValues,onSubmit,validationSchema:BasicFormValidator})

    return (
        <form className="Form" onSubmit={formik.handleSubmit}>
      <h1>Yup formik Basic form 2</h1>
       <PrimaryInput  name ="name" value={formik.values.name} handleBlur={formik.handleBlur}handleChange={formik.handleChange}
       error={formik.errors.name}touched={formik.touched.name} />
        <PrimaryInput  name ="email" value={formik.values.email} handleBlur={formik.handleBlur}handleChange={formik.handleChange}
       error={formik.errors.email}touched={formik.touched.email} />
        <PrimaryInput  name ="channel" value={formik.values.channel} handleBlur={formik.handleBlur}handleChange={formik.handleChange}
       error={formik.errors.channel}touched={formik.touched.channel} />
       <div><button type="submit">Submit</button></div>
      </form>
    )
}

export default YupSchemaForm
