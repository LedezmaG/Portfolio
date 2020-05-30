import React from 'react';
import { Link } from "react-router-dom";
import ProjetItem from "./../Components/projetItem";

function Home() {
    return(
        
        <>
            <div className="row">
                <div className="col-3">
                    <p className="Home__page-title">
                        WO<br/>
                        RK.
                    </p>
                </div>
                <div className="col-9">
                    <ProjetItem id="1" name="Rick and morty" tec="html/css, React.js" link="" />
                    <ProjetItem id="2" name="WeatherApp" tec="html/css, React.js" link="" />
                    <ProjetItem id="3" name="Badges" tec="html/css, React.js" link="" />
                </div>
            </div>
            
        </>
    
    );
}

export default Home