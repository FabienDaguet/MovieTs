import * as React from 'react'

type SearchProps = {
    placeholder: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox: React.FC<SearchProps> = (props : SearchProps) => {
    return (
        <div>
            <form className="d-flex">
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder={props.placeholder} 
                    onChange={props.handleChange} 
                />
            </form>
        </div>
        
    )
}

export default SearchBox