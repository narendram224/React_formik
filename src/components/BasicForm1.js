import React from 'react';
import '../App.css';
import {useFormik} from 'formik'
import PrimaryInput from './PrimaryInput';
const initialValues ={
  name:"",
  email:"",
  channel:""
}
function BasicForm1() {

  const onSubmit = values=>{
    console.log("values is ",values);
  }
  const validate = values =>{
 
      // values.name values.email values.channel
      let errors={}
      if (!values.name) {
        errors.name="Required name"
      }
      if (!values.email) {
        errors.email="Required email"
      }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email="Invalid email address"
      }
  
       if (!values.channel) {
        errors.channel="Required channel"
      }
      return errors; 
  }
const formik = useFormik({initialValues,onSubmit,validate})
  return (
     
      <form className="Form" onSubmit={formik.handleSubmit}>
      <h1>Formik basic Form 1</h1>
       <PrimaryInput  name ="name" value={formik.values.name} handleBlur={formik.handleBlur}handleChange={formik.handleChange}
       error={formik.errors.name}touched={formik.touched.name} />
        <PrimaryInput  name ="email" value={formik.values.email} handleBlur={formik.handleBlur}handleChange={formik.handleChange}
       error={formik.errors.email}touched={formik.touched.email} />
        <PrimaryInput  name ="channel" value={formik.values.channel} handleBlur={formik.handleBlur}handleChange={formik.handleChange}
       error={formik.errors.channel}touched={formik.touched.channel} />
       <div><button type="submit">Submit</button></div>
      </form>
  );
}

export default BasicForm1;
