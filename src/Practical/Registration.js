import { Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import FormikControl from '../components/Resuable31/FormikControl'

const options = [
    {value:'Email',label:'emailmoc'},
    {value:'Telephone',label:'telephonemoc'}
]
const genderoptions = [
    {value:'male',label:'male'},
    {value:'female',label:'female'}
]
const checkBoxOptions =[
    {key:"option 1",value:"coption 1"},
    {key:"option 2",value:"coption 2"},
    {key:"option 3",value:"coption 3"},
    {key:"option 4",value:"coption 4"},
]
const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phoneNumber: '',
    name: '',
    gender: '',
    dob:null,

}
const validationSchema = yup.object({
    email:yup.string().email("Email is not valid").required("Email is required"),
    password: yup.string().required("password is required"),
    name: yup.string().required("name is required"),
    dob:yup.date().required("Date of birth is required"),
    gender: yup.string().required("gender is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),""],"Password must match").required("Password is requried"),
    modeOfContact: yup.string().required("Mode of contact is required"),
    phoneNumber: yup.string().when('modeOfContact',{
        is:'Telephone',then:yup.string().required("Phone number is required")
    }) ,

})
const onSubmit = values=>{
    console.log("values",values);
}

const Registration = () => {
    return (
        <Formik initialValues={initialValues}validationSchema={validationSchema} onSubmit={onSubmit} >
            {
                formik=>{
                    return (
                        <Form>
                            <FormikControl name="name" label="name" type="text"  control="input"  />
                            <FormikControl name="email" label="email" type="email" control="input"   />
                            <FormikControl name="password" label="password" type="password" control="input"    />
                            <FormikControl name="confirmPassword" label="confirmPassword" type="text"  control="input"   />
                            <FormikControl name="modeOfContact" label="modeOfContact"  options={options} control="radio"  />
                            <FormikControl name="phoneNumber" label="phoneNumber" type="number" control="input"  />
                            <FormikControl name="gender" label="gender"  options={genderoptions} control="radio"  />
                             {/* <FormikControl control="radio" label="gender" name="gender" options={checkBoxOptions} /> */}

                            <FormikControl name="dob" label="Date of Birth" type="date" control="date"   />

                            <button type="submit" >Sumbit</button>




                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default Registration
