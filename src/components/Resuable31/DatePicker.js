import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ErrorTextDiv from "../ErrorMessage";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerView = (props) => {
    const {name,label,...rest} = props;
  const [startDate, setStartDate] = useState(null);
  return (
      <div className="form-control">
          <label htmlFor={name}>{label}</label>
          <Field name={name} >
              {
                  ({field,form})=>{
                      const {setFieldValue} = form
                      const {value} =field
                      return(
                        // <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                         <DatePicker id={name} name={name} {...field} {...rest}  selected={value} onChange={(date) => setFieldValue(name,date)} /> 
                      )
                  }
              }
          </Field>
          <ErrorMessage name={name} component={ErrorTextDiv} />
      </div>
  );
};
export default  DatePickerView;