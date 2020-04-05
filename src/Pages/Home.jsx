import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return(
        
        <>
            <div className="Home__Item">
                <Link to="Project" className="Home__Link">
                    <p className="Home__Title">
                        <span className="Home__Number" >#1</span>
                        Projet 1
                    </p>
                    <hr className="Home__Line" />
                </Link>
            </div>
            <div className="Home__Item">
                <Link to="Project" className="Home__Link">
                    <p className="Home__Title">
                        <span className="Home__Number" >#2</span>
                        Projet 1
                    </p>
                    <hr className="Home__Line" />
                </Link>
            </div>
            <div className="Home__Item">
                <Link to="Project" className="Home__Link">
                    <p className="Home__Title">
                        <span className="Home__Number" >#3</span>
                        Projet 1
                    </p>
                    <hr className="Home__Line" />
                </Link>
            </div>
            
            
        </>
    
    );
}

export default Home