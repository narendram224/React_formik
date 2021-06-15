import React, { useState } from 'react'
import {ErrorMessage, Field, Form, Formik,FieldArray} from 'formik'
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
    social:{
        facebook:"",
        twitter:"",
    },
    phoneNumber:["",""],
    phNumbers:['']
  }
  const savedData = {
      name:"Shubh maury",
      email:"narendram224@gmail.com",
      channel:"my channle",
      comments:"my comment",
      address:"my address",
      social:{
        facebook:"faldada",
        twitter:"tweww",
    },
    phoneNumber:["ddw23","131313"],
    phNumbers:['1231311']
  }
  const onSubmit = (values,onSubmit)=>{
    console.log("values is ",values);
    console.log("the submit form",onSubmit);
    onSubmit.setSubmitting(false);
    onSubmit.resetForm();
  }
  
  const validateComment = value=>{
      console.log("the value is",value);
        let error;
        if(!value){
            error="Required"
        }
        return error;
  }
function SaveLoadData() {
const [formValues, setformValues] = useState(null)
  
// const formik = useFormik({initialValues,onSubmit,validationSchema:BasicFormValidator})

    return (
        <Formik initialValues={formValues ||initialValues} onSubmit={onSubmit}
         validationSchema={BasicFormValidator}
         enableReinitialize
         
         >
             {
                 formik=>{
                     return (
          <Form className="Form" >
          <h1>Yup Nested Object Example vid:20 (ValidateOnChange ValidateOnBlue)</h1>
       <FieldComponent  name ="name"  />
        <FieldComponent  name ="email" />
        <FieldComponent  name ="channel"  />
        <label htmlFor ="comments">Comments</label>
        <Field name="comments" as="textarea" id="comments"  validate={validateComment} />
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

        {/* group input fiels */}
        <FieldComponent  name ="social.facebook"  id="facebook" />
        <FieldComponent  name ="social.twitter" id="twitter"  />

            {/* array field form example */}
        <FieldComponent   name ="phoneNumber[0]"  id="PP" />
        <FieldComponent  name ="phoneNumber[1]" id="SP"  />
            
            <label htmlFor="List">List of phone Number</label>
            <FieldArray name ="phNumbers" >
                {
                    (props)=>{
                        const {push,remove,form } =props;
                        const {values} = form;
                        const {phNumbers} = values;
                        return <div>
                            {phNumbers.map((phNum,index)=>{
                                return <div key={index}>
                                <Field  name={`phNumbers[${index}]`}   />

                                   {index>0&& <button type="button" onClick={()=>remove(index)} >-</button>}
                                    <button type="button" onClick={()=>push("")} >+</button>

                                </div>
                            })}
                        </div>
                    }
                }
            </FieldArray>


       <div>
       <button type="button" onClick={()=>formik.validateField('comments')}> Validate comment</button>
       <button type="button"onClick={()=>formik.validateForm()} >Validate All</button>

       <button type="button" onClick={()=>formik.setFieldTouched('comments')}> Visited comment</button>
       <button type="button"onClick={()=>formik.setTouched({name:true,comments:true,email:true,channel:true})} >Visited All Field</button>
           <button type="submit" disabled={!formik.isValid||formik.isSubmitting} >Submit</button>
           <button type="button" onClick={()=>setformValues(savedData)}>Save load Dtaa</button>

           </div>
      </Form>
                     )
                 }
             }
   
      </Formik>

    )
}

export default SaveLoadData
