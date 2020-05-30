import React from 'react'

const projetItem = ( { id, name, tec, link }) => {
    return(
        <>
            <div className="Home__Item ">
                <a to="Project" className="Home__Link">
                    <p className="Home__Title">
                        <span className="Home__Number" >#{ id }</span>
                        { name }
                        <span className="Projet__item"> { tec } </span>
                    </p>
                    <a href={ link } className="btn btn__xl btn-Home vibrate">Demo</a>
                    <hr className="Home__Line" />
                </a>
            </div>
        </>
    )
}
export default projetItem
