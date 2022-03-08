import React from "react";
import FloatingLabel from "react-bootstrap-floating-label";
import FormControl from "react-bootstrap/FormControl";

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
            {/* <FloatingLabel 
                controlId={props.id}
                label={props.label}
            >
                <FormControl
                    className="form-control"
                    placeholder={props.placeholder}
                    type={props.type} 
                    value={props.value}
                    onChange={(e) => props.action(e)}
                    //or onChange={(e) => props.action(e.target.value)} e.target.value devient une string
                />
            </FloatingLabel> */}
        </div>
    )
}

export default TextInput;