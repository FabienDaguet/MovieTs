import React from 'react'

type ButtonProps = {
    className: string,
    placeholder: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <>
            <button className={props.className} 
                    onClick={(event) => props.onClick(event)} 
            >
                    {props.placeholder}
            </button>
        </>
    )
}

export default Button