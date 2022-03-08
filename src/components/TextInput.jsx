import React from "react";

const TextInput = (props) => {
    return (
        <div className="form-floating">
            <input
                type={props.type} 
                className="form-control" 
                id={props.id} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={(e) => props.action(e)}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default TextInput;