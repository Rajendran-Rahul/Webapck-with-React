import React, { Children } from "react";
import { Link } from "react-router-dom";
import { Header, Container, Divider, Icon } from "semantic-ui-react"
import { pullRight, heading1, container } from "./Layout.module.css"

const Layout = ({ children }) => {
    return (
        <Container className={container}>
            <Link to={"/"}>
                <Header as="h1" className={heading1}>
                    Webpack for React
                </Header>
            </Link>
            {children}
            <Divider />
            <p className={pullRight}>
                Made with <Icon name="heart" color="red" /> by Rahul Rajendran
            </p>
        </Container>
    )
}
export default Layout