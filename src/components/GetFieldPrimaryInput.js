import React from 'react'
function GetFieldPrimaryInput({name,error,touched,...props}) {
    return (
        <>
         <label htmlFor="name">{name}</label>
        <input type="text" id="name" name={name} {...props} />
        {error&&touched?<div>{error}</div>:null}
        </>
    )

}
export default GetFieldPrimaryInput