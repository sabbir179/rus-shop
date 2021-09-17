import React from "react";
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Container, Link, Toolbar, Typography } from "@material-ui/core";
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
                    <NextLink href="/" passHref> 
                        <Link>
                            <Typography className={classes.brand}>RuS Shop</Typography>
                        </Link>
                    </NextLink>

                    <div className={classes.grow}>  </div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
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