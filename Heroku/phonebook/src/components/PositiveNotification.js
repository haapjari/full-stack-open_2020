import React from 'react'

const PositiveNotification = ( {message} ) => {

        if (message === null) {
                return null
        }

        return (
                <div className="success">
                        {message} 
                </div>
        )
}

export default PositiveNotification 


