import React from 'react'

const SearchBox = (props) => {
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