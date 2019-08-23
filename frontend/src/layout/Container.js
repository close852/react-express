import React from 'react'
import './Container.css'
import { LeftMenu } from './'
function Container({ children, isMain ,menu}) {

    return (
        <div className="main">
            <div className={isMain ? "container-wrapper" : "leftmenu_warpper"}>
                {!isMain && <LeftMenu menu={menu}/>}
                <div className={isMain ? "container-body" : "leftmenu-body"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container
