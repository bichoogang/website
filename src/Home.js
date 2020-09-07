import React from 'react';
import hom from '../src/images/pep.png'
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home =()=> {
        return (
           <Common title="Grow your buisness with" imgsrc={hom} nav="Get Started" link="/services"/>
        );
    }


export default Home;