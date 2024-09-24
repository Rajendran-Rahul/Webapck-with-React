import React, { Children } from "react";
import { Link } from "react-router-dom";
import {Header, Container, Divider, Icon } from "semantic-ui-react"

import {pullRight, h1} from "./Layout.css"

const Layout = ({children}) => {
    return (
        <Container>
            <Link to={"/"}>
            <Header as="h1" className={h1}>
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