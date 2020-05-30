import React from 'react'
import phone from './../Assets/Img/phone.png';

const componentName = () => {
    return(
        <div className="row">
            <div className="col-8 mt-5">
                <span className="Contact__title">
                    Contact
                </span>
                <div className="row">
                    <p className="Contact__body mb-5"> For any question, or just to say hello.</p>
                </div>
                <div className="row">
                    <div className="col-6 my-3">
                        <span className="">
                            Send me a mail
                        </span> <br/>
                        <span className="">
                            <a href="mailto:israeledezmag@gmail.com" target="_blank" rel="noopener noreferrer" className="About__Icon">
                                israeledezmaG@gmail.com 
                            </a>
                        </span>
                    </div>
                    <div className="col-6 my-3">
                        <span className="">
                            Check my cv
                        </span> <br/>
                        <span className="">
                        <a href="https://drive.google.com/file/d/1w7Bh4sLdY-8PH4hl4TULnGfwSI3zD5u3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="About__Icon">
                            Les go!
                        </a>
                        </span>
                    </div>
                    <div className="col-6 my-3">
                        <span className="">
                            See my GitHub
                        </span> <br/>
                        <span className="">
                            <a href="https://github.com/LedezmaG" target="_blank" rel="noopener noreferrer" className="About__Icon">
                                @LedezmaG
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <img src={ phone } alt="" width="100%" className="wobble-hor-bottom" />
            </div>
        </div>
    )
}
export default componentName
