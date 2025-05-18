import React from "react";

function Input({className, type, placeholder, value}) {
    return (
        <>
            <input className={className} type={type} placeholder={placeholder} value={value} required={true} />
        </>
    )
}

export default Input;