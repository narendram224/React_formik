import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorTextDiv from '../ErrorMessage';

function Select(props) {
    const {label,options,name,...rest}  =props;
    return (
        <div className="form-control">
            <label htmlFor={name} >{label}</label>
            <Field as="select" name={name} id={name} {...rest}  >
                {options.map((item,index)=>{
                    return(
                        <option key={index} value={item.value} >{item.label}</option>
                    )
                })}
                </Field> 
                <ErrorMessage component={ErrorTextDiv} name={name} />
        </div>
    )
}

export default Select
