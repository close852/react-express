import React from 'react'
import './LeftMenu.css'
import { NavLink } from 'react-router-dom'

function LeftMenu({menu}) {
    console.log(menu);
    const menuDiv = {
        "app":[
            {
                menuid:"intro",
                menuname:"대문",
                link:"/app"
            },  
            {
                menuid:"todolist",
                menuname:"미결함",
                link:"/app/todolist"
            },
            {
                menuid:"inglist",
                menuname:"진행함",
                link:"/app/inglist"
            },
            {
                menuid:"endlist",
                menuname:"완료함",
                link:"/app/endlist"
            },
            {
                menuid:"tempsave",
                menuname:"임시저장함",
                link:"/app/tempsave"
            }
        ]
        ,
        "bbs":[
            {
                menuid:"bbs01",
                menuname:"게시판",
                link:"/bbs"
            },
            {
                menuid:"bbs02",
                menuname:"자유게시판",
                link:"/bbs/free"
            }
        ]
    }

    const menuMap = menuDiv[menu].map(m=>(<Menu key={m.menuid} menuid={m.menuid} menuname={m.menuname} link={m.link}/>))

    return (
        <div className="leftMenuList">
            {menuMap}
        </div>
    )
}

function Menu({menuid,menuname,link}){

    return(
        <div className="leftMenu">
           <NavLink exact to={link} activeClassName="leftmenu_selected">{menuname}</NavLink>
        </div>
    )
}

export default LeftMenu
