import * as React from "react";

type InputProps = {
    type: string
    className: string
    id: string
    name: string
    placeholder: string
    value: string
    label: string
    action: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<InputProps> = (props: InputProps) => {
    return (
        <div className="form-floating row w-auto">
            <input
                type={props.type} 
                className={props.className}
                id={props.id} 
                name={props.name}
                placeholder={props.placeholder} 
                value={props.value}
                onChange={(event) => props.action(event)}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}
type AreaProps = {
    type: string
    className: string
    id: string
    name: string
    placeholder: string
    value: string
    label: string
    action: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const AreaInput: React.FC<AreaProps> = (props: AreaProps) => {
    return (
        <div className="form-floating row w-auto">
            <textarea
                className={props.className}
                id={props.id} 
                name={props.name}
                placeholder={props.placeholder} 
                value={props.value}
                onChange={(event) => props.action(event)}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default TextInput;