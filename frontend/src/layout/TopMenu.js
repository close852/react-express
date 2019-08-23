import React from 'react'
import { NavLink } from 'react-router-dom'

import './TopMenu.css'
function TopMenu() {

    const menuMouseOver = (event) => {
        event.currentTarget.classList.add('on')
        // console.log('1', event.currentTarget.classList)
    }

    const menuMouseOut = (event) => {
        event.currentTarget.classList.remove('on')
        // console.log('1', event.currentTarget.classList)
    }

    return (
        <div className="inner_menu">
            <div className="menu-wrapper">
                <NavLink to="/app" activeClassName="selected" onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}><li>전자결재</li></NavLink>
                <NavLink to="/bbs" activeClassName="selected" onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}><li>게시판</li></NavLink>
                <NavLink to="/schedule" activeClassName="selected" onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}><li>일정관리</li></NavLink>
                <NavLink to="/community" activeClassName="selected" onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}><li>동아리</li></NavLink>
            </div>
        </div>
    )
}

export default TopMenu
