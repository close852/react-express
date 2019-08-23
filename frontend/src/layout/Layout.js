import React from 'react'
import { Header, TopMenu, Container, Footer } from './'
function Layout({ history, location, children, isMain }) {
    let menu =location.pathname.split("/")[1];
    // console.log('menu>',menu[1])
    return (
        <div>
            <Header />
            <TopMenu />
            <Container isMain={isMain} menu={menu}>
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout
