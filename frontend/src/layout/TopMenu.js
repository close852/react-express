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
                <NavLink to="/a" activeClassName="selected" onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}><li>FAQs</li></NavLink>
                <NavLink to="/b" activeClassName="selected" onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}><li>FAQs</li></NavLink>
                <NavLink to="/c" activeClassName="selected" onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}><li>FAQs</li></NavLink>
                <NavLink to="/e" activeClassName="selected" onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}><li>FAQs</li></NavLink>
                <NavLink to="/f" activeClassName="selected" onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}><li>FAQs</li></NavLink>
            </div>
        </div>
    )
}

export default TopMenu
