import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorTextDiv from '../ErrorMessage'

function CheckBoxButton({label,name,options,...rest}) {

    return (
        <div className="form-control">
            <label htmlFor={name} >{label}</label>
            <Field id={name} name={name} {...rest} >
            {
                ({field})=>{
                    return (
                        options.map((option,index) =>{
                            console.log("option",option);
                            return (
                                <React.Fragment key={option.key}>
                                    <input type="checkbox" id={option.value} {...field} value={option.value} checked={field.value.includes(option.value)} />
                                    <label htmlFor={option.value}>{option.key}</label>
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

export default CheckBoxButton
