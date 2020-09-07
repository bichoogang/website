import React from 'react'
import { NavLink } from 'react-router-dom'

function Cards(props) {
    return (
        <>
        <div className="col-10 col-md-4 col-lg-4 mx-auto">
                    <div className="card " >
                        <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
                            </div>
                       </div>
                    </div>
        </>
    )
}

export default Cards
