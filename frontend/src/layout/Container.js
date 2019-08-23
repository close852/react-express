import React from 'react'
import './Container.css'
function Container({ children }) {
    return (
        <div className="main">
            <div className="container-wrapper">
                {children}
            </div>
        </div>
    )
}

export default Container
