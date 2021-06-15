import React from 'react'


function PrimaryInput({name,value,handleBlur,handleChange,error,touched}) {
    return (
        <>
         <label htmlFor="name">{name}</label>
        <input type="text" id="name" name={name} onBlur={handleBlur} onChange={handleChange} value={value} />
        {error&&touched?<div>{error}</div>:null}
        </>
    )

}

export default PrimaryInput
