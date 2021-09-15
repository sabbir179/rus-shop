import React, { Children } from "react";
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import useStyles from "../utils/style";


const Layout = ({children}) => {
    const classes = useStyles();
    return ( 
        <div>
            <Head>
                <title> RuS shop</title>
            </Head>
            <AppBar position="static" className={classes.navbar} >
                <Toolbar>
                    <Typography>RuS Shop</Typography>
                </Toolbar>
            </AppBar>

            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All rights resevered. RuS shop
                </Typography>
            </footer>
        </div>
     );
}
 
export default Layout;