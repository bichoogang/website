import React from 'react';
import hom from '../src/images/pep.png'
import { NavLink } from 'react-router-dom';

function Common(props) {
    return (
        <div>
             <div id="heading" className="d-flex align-items-center">
            <div className="row">
            <div className="container-fluid">
                <div className="col-10 mx-auto">
                    <div className="row  ">
                        <div className="col-md-6 col-12 pt-5 pt-lg-5 order-2 order-md-1 d-flex justify-content-center  flex-column ">
                        <h1>{props.title}
                          <strong className="brand_name"> WebWala</strong>
                          </h1>
                          <h3>We are the team of talented developers making website</h3>
                          <div className="my-3">
                              <NavLink exact to={props.link} className="btn-1">{props.nav}</NavLink>
                          </div>
                          
                        </div>
                        
                        <div className="col-md-6 order-1 order-lg-2 ">
                          <img src={props.imgsrc} className="img-fluid animated " />
                     </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Common
