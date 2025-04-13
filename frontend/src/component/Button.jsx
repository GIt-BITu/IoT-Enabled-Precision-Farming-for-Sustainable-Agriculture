import React from "react"


function Button({children,className}){
    return(<>
        <button className={`py-1.5 px-3 text-white border-none rounded-md  cursor-pointer
        transition-all duration-200 ease-linear ${className}`}>{children}</button>
    </>)

}
export default Button;