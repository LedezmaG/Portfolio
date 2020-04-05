import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav class="navbar navbar-inverse bg-transparent">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Link to="/" className="navbar-brand Top__Title">
                            David Israel <br/>
                            Ledezma Gurrola
                        </Link>
                    </div>
                    
                    <ul class="nav navbar-nav navbar-right ">
                        <li>
                            <a href="" className="Top__Menu">
                                Menu
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header