import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorTextDiv from '../ErrorMessage'

function RadioButton({label,name,options,...rest}) {

    return (
        <div className="form-control">
            <label htmlFor={name} >{label}</label>
            <Field id={name} name={name} {...rest} >
            {
                ({field})=>{
                    console.log("the field value",field);
                    return (
                        options.map((option,index) =>{
                            console.log("option value",field.value,option.value);
                            return (
                                <React.Fragment key={index}>
                                    <input type="radio" id={option.value} {...field} value={option.value} checked={field.value===option.value} />
                                    <label htmlFor={option.value}>{option.label}</label>
                                </React.Fragment>
                            )
                        })
                    )
                }
                
            }
            </Field>
           <ErrorMessage component={ErrorTextDiv} name={name} />
        </div>
    )
}

export default RadioButton
