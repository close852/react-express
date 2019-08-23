import React from 'react'
import { Header, TopMenu, Container, Footer } from './'
function Layout({ children }) {
    return (
        <div>
            <Header />
            <TopMenu />
            <Container>
                {children}
            </Container>
            <Footer />

        </div>
    )
}

export default Layout
