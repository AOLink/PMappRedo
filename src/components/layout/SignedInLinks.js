import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        //jsx template
         <ul className="right">
             <li><NavLink to='/'>New Project </NavLink></li>
             <li><NavLink to='/'>Log Out</NavLink></li>
             <li><NavLink to='/' className="btn btn-floating brown lighten-1" >DO</NavLink></li>
   
         </ul>
        
    )
}

export default SignedInLinks ;