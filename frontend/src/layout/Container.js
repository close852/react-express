import React from 'react'
import './Container.css'
import { LeftMenu } from './'
function Container({ children, isMain }) {

    return (
        <div className="main">
            <div className={isMain ? "container-wrapper" : "leftmenu_warpper"}>
                {!isMain && <LeftMenu />}
                <div className="container-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container
