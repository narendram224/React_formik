import React from 'react'

function ErrorTextDiv(props) {
    return (
        <div className="error">
          {props.children}  
        </div>
    )
}

export default ErrorTextDiv
