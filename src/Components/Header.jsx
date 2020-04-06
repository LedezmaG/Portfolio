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
                    
                    <p className="Top__Menu nav navbar-nav navbar-right">
                        Menu
                        <ul class="nav navbar-nav navbar-right ">
                            <li>
                                <Link to="/Projets" >Projets</Link>
                            </li>
                            <li>
                                <Link to="/AboutMe" >About Me</Link>
                            </li>
                        </ul>
                    </p>
                </div>
            </nav>
        </header>
    );
}

export default Header