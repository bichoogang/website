import React from 'react';
import pep from '../src/images/about.png'
import Common from './Common';

const About =()=> {
        return (
            <div>
                
                <Common title="This is About page of" imgsrc={pep} nav="Get Started" link="/contact"/>
            </div>
        );
    }


export default About;