import React from 'react';
import dam_p from '../dam_p.jpg';
import sea_p1 from '../sea_p1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars}  from '@fortawesome/free-solid-svg-icons';
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container" >

                <a className="navbar-brand" href="#"><img className="logo" src= { dam_p } alt="my image" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon= {faBars} style= {{color:'#fff'}} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Me</a>
                    </li>       
                    <li className="nav-item">
                        <a className="nav-link" href="#">education</a>
                    </li>       
                    <li className="nav-item">
                        <a className="nav-link" href="#">contact</a>
                    </li>       
                    
                    </ul>     
                </div>
            </div>
        </nav>

    
    )
}

export default Navbar;