import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav class="navbar navbar-inverse bg-transparent">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Link to="/AboutMe" className="navbar-brand Top__Title">
                            David Israel <br/>
                            Ledezma Gurrola
                        </Link>
                    </div>
                    <div className="d-flex">

                        <div className="mx-3 ">
                            <Link className="Footer__Menu-item" to="/" >Work</Link>
                        </div>
                        <div className="mx-3 text-dark">
                            <Link className="Footer__Menu-item" to="/AboutMe" >Profile</Link>
                        </div>
                        <div className="mx-3 text-dark">
                            <Link className="Footer__Menu-item" to="/Contact" >Contact</Link>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
}

export default Header