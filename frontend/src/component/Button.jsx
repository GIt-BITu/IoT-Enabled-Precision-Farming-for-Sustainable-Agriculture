import React from "react"


function Button({children,className,onClick}){
    return(<>
        <button className={`py-1.5 px-3  border-none rounded-md  cursor-pointer
        transition-all duration-200 ease-linear ${className}`} onClick={onClick}>{children}</button>
    </>)

}
export default Button;