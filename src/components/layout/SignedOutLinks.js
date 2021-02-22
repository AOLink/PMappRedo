import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        //jsx template
        <ul className="right">
                <li><NavLink to='/'>Signup</NavLink></li>                
                <li><NavLink to='/'>Login</NavLink></li>                

            
        </ul>
        
    )
}

export default SignedOutLinks ;