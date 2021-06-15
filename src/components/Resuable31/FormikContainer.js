import { Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import FormikControl from './FormikControl'

const optionArray =[
    {value:"value1",label:"label1"},
    {value:"value2",label:"label2"},
    {value:"value3",label:"label3"},
    {value:"value4",label:"label4"},
    {value:"value5",label:"label5"},
    {value:"value6",label:"label6"},
    {value:"value7",label:"label7"},
    {value:"value8",label:"label8"},
]
const checkBoxOptions =[
    {key:"option 1",value:"coption 1"},
    {key:"option 2",value:"coption 2"},
    {key:"option 3",value:"coption 3"},
    {key:"option 4",value:"coption 4"},
]
function FormikContainer() {
    const initialValues ={
        email:'',
        description:'',
        selectOption:'',
        radioOption:'',
        checkboxOption:[],
        birthDate:null
    }
    const validationSchema = yup.object({
        email:yup.string().required("required"),
        description:yup.string().required('required description'),
        selectOption:yup.string().required('Select is required'),
        radioOption:yup.string().required('Radio option is required'),
        checkboxOption:yup.array().required("checkbox option is required"),
        birthDate:yup.date().required("required date" ).nullable()
        
}) 

    const onSubmit = values=>{
        console.log("the Values is",values);
    }
    return (
       <Formik initialValues={initialValues}validationSchema={validationSchema} onSubmit={onSubmit} > 
        {
         formik=>{
         return(
             
                <Form>
                    <FormikControl control="input" type="email" label="Email" name="email" />
                    <FormikControl control="textarea" label="Description" name="description" />
                    <FormikControl control="select" label="Select a topic" name="selectOption" options={optionArray} />
                    <FormikControl control="radio" label="Select any option" name="radioOption" options={optionArray} />
                    <FormikControl control="checkbox" label="chekcbox input form" name="checkboxOption" options={checkBoxOptions} />
                    <FormikControl control="date" label="Select the date" name="birthDate" />


                    <button type="submit">Submit</button>
                </Form>
            )
         }
        }
       </Formik>
    )
}

export default FormikContainer
