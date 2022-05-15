import React from 'react';
import Header from '../Header';
import {Container } from 'react-bootstrap';

/**
* @author
* @function Layout
**/

const Layout  = (props) => {
  return(
    <>
         <Header />
         {/* <h1>pravin</h1> */}

        {props.children}

         
         
    
    </>
   )

 }

 export default Layout;