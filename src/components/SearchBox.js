import React from "react";

const SearchBox = ({ handleSubmit, handleChange }) => {
    return (
        // <div className='pa2'>
        //     <input
        //         className='pa3 ba b--green bg-lightest-blue'
        //         type='search'
        //         placeholder='160-0022'
        //     />
        // </div>
        <div>
            <form onSubmit={handleSubmit}>
                <label className="pr3">
                    Post Code
                </label>
                <input
                    className=""
                    type="text"
                    onChange={handleChange}
                />
                <input
                    className=""
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default SearchBox;