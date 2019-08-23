import React from 'react'
import { Header, TopMenu, Container, Footer } from './'
function Layout({ history, location, children, isMain }) {
    return (
        <div>
            <Header />
            <TopMenu />
            <Container isMain={isMain}>
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout
