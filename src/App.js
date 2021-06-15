import './App.css';
import ArrayFormInput from './components/ArrayFieldForm';
import BasicForm1 from './components/BasicForm1'
import DynamicArrayField from './components/DyanmicArrayField';
import FormComponent from './components/FormComponent';
import GetFieldPropsComp from './components/GetFiedProps';
import NestedObject from './components/NestedObj20';
import YupSchemaForm from './components/YupSchemaForm';
import FieldLevelValidation from './components/FieldLevelValidation'
import ManualCallValidation from './components/ManualCalVal';
import SaveLoadData from './components/SaveLoadData';
import FormikContainer from './components/Resuable31/FormikContainer';
import Login from './Practical/LoginForm';
import Registration from './Practical/Registration';
import { ChakraProvider, theme } from "@chakra-ui/react"
import CharkaInput from './Practical/CharkaInput';
function App() {

  return (
    <ChakraProvider theme={theme}>

    <div className="App">
     {/* <BasicForm1 /> */}
     {/* <YupSchemaForm /> */}
     {/* <GetFieldPropsComp /> */}
     {/* <FormComponent /> */}
     {/* < NestedObject /> */}
     {/* <ArrayFormInput /> */}
     {/* <DynamicArrayField /> */}
     {/* <FieldLevelValidation /> */}
     {/* <ManualCallValidation /> */}
     {/* <SaveLoadData /> */}
     {/* <FormikContainer /> */}
     <Login /> 
     {/* <Registration /> */}
     {/* <CharkaInput /> */}
    
    </div>
    </ChakraProvider>
  );
}

export default App;
