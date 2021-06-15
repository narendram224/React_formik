import *as yup from 'yup';
export const BasicFormValidator = yup.object({
    name:yup.string().required("Name is required"),
    email:yup.string().required("Email is required").email("Email address is invalid"),
    channel:yup.string().required("Channel is required"),
    address:yup.string().required("Address is required"),
});