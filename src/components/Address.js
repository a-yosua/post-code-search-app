import React from "react"

const Address = ({ address }) => {
    return (
        <div>
            {
                address.map(postcode => {
                    return (
                        <p className='f3' key={postcode.postcode}>
                            {postcode.pref}, {postcode.city}, {postcode.town}
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Address;