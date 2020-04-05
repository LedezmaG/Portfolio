import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return(
        
        <>
            <div className="Home__Item ">
                <a to="Project" className="Home__Link">
                    <p className="Home__Title">
                        <span className="Home__Number" >#1</span>
                        Projet 1
                    </p>
                    <a href="/" className="btn btn__xl btn-Home vibrate">Demo</a>
                    <hr className="Home__Line" />
                </a>
            </div>
            <div className="Home__Item ">
                <a to="Project" className="Home__Link">
                    <p className="Home__Title">
                        <span className="Home__Number" >#2</span>
                        Projet 2
                    </p>
                    <a href="/" className="btn btn__xl btn-Home vibrate">Demo</a>
                    <hr className="Home__Line" />
                </a>
            </div>
            <div className="Home__Item ">
                <a to="Project" className="Home__Link">
                    <p className="Home__Title">
                        <span className="Home__Number" >#3</span>
                        Projet 3
                    </p>
                    <a href="/" className="btn btn__xl btn-Home vibrate">Demo</a>
                    <hr className="Home__Line" />
                </a>
            </div>
            
            
        </>
    
    );
}

export default Home