import React from 'react';
import trex from '../Assets/Img/T-rex.png';

function AboutMe() {
    return(
        <>
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="About__Title">
                        Hello
                    </div>
                    <div className="About__Content">
                        Im a web developer based in mexico. 
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    
                </div>
                
                {/* <div className="col-12 col-md-5 About__Content-Contact">
                    <div className="About__Title">Contact</div>
                    <div className="About__Contact">
                        <a href="https://github.com/LedezmaG" target="_blank" rel="noopener noreferrer" className="About__Icon">
                            <span className="About__Icon-Text">LedezmaG</span> 
                            <i class="fa fa-github-alt fa-2x "></i>
                        </a>
                    </div>
                    <div className="About__Contact">
                        <a href="mailto:israeledezmag@gmail.com" target="_blank" rel="noopener noreferrer" className="About__Icon">
                            <span className="About__Icon-Text">israeledezmaG@gmail.com </span>
                            <i class="fa fa-envelope fa-2x"></i>
                        </a>
                    </div>
                    <div className="About__Contact">
                        <a href="https://drive.google.com/file/d/1w7Bh4sLdY-8PH4hl4TULnGfwSI3zD5u3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="About__Icon">
                            <span className="About__Icon-Text">CV</span>
                            <i class="fa fa-file fa-2x"></i>
                        </a>
                    </div>
                    <div className="About__Contact">
                        <a href="tel:+523334424120" target="_blank" rel="noopener noreferrer" className="About__Icon">
                            <span className="About__Icon-Text">(33) 3442 4120</span>
                            <i class="fa fa-whatsapp fa-2x"></i>
                        </a>
                    </div>
                </div> */}
                
            </div>
            <div className="row">
                <div className="col-12 col-md-7 img-fluid center-center flicker img-content">
                    <p className="About__Img-Text">
                        Sorry, a t-rex ate this section
                    </p>
                    <img src={trex} alt="T rex" className="About__Img-custom " />
                </div>
            </div>
        </>
    )
}

export default AboutMe