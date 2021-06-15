import React from 'react'
import CheckBoxButton from './CheckBoxButton';
import Input from './Input';
import RadioButton from './RadioButton';
import Select from './Select';
import TextArea from './TextArea';
import DatePickerView from './DatePicker';
import CharkaInput from '../../Practical/CharkaInput';


function FormikControl(props) {
    const {control,...rest} = props;
   switch (control) {
       case 'input': return <Input {...rest} />
       case 'textarea': return <TextArea {...rest} />
       case 'select': return <Select {...rest} />
       case 'radio': return <RadioButton {...rest} />
       case 'checkbox': return <CheckBoxButton {...rest} />
       case 'date' : return <DatePickerView {...rest} />
       case 'charkarainput' : return <CharkaInput {...rest} />


        
       default: return null;

   }
}

export default FormikControl
