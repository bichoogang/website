import React from 'react';
import Cards from './Cards';
import Link from './Link';

const Services = () => {
    return (
        <div className="container">
        <div className="text-center my-3 ">
            <h1>Services</h1>
        </div>
            <div className="row gy-3 my-5">
                
                {
                    Link.map((val,index)=>{
                        return <Cards key={index} title={val.name} imgsrc={val.imgsrc}/>
                    })
                }
                </div>

            </div>
        );
    }


export default Services;