import React from 'react'
import {Link,NavLink } from 'react-router-dom';
function Footer (){
    /* Un fragment React permet de retourner une collection d'éléments
    * JSX, <> est équivant à <React.Fragment>
    */
    return <>
     <Link to='/' className='navbar'>Home</Link>
      <Link to='/form' className='navbar'>Form</Link>
      <NavLink activeClassName='navlink' to='/props' className='navbar'>Props</NavLink>
      <NavLink activeClassName='navlink' to='/tresr' className='navbar'>Props</NavLink>
    </>
}

export default Footer;