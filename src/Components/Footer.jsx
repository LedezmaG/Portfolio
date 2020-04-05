import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        
        <footer className="page-footer bg-dark">
            <div className="row">

                <div className="col-5 Footer__Title ">
                    David Israel <br/>
                    Ledezma Gurrola 
                </div>
                <div className="col-3 Footer__Content ">
                    Menu
                    <ul className="Footer__Menu">
                        <li>
                            <Link to="/AboutMe" className="Footer__Menu-item">About Me</Link>
                        </li>
                        <li>
                            <Link to="/" className="Footer__Menu-item">Projets</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-4 Footer__Icons">
                    <div className="Footer__Icon">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-github-alt fa-2x text-white"></i>
                            {/* <p className="" id="msgG">LedezmaG</p> */}
                        </a>
                    </div>
                    <div className="">
                        <i class="fa fa-envelope fa-2x text-white"></i>
                    </div>
                    <div className="">
                        <i class="fa fa-whatsapp fa-2x text-white"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer