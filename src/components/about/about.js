import React from 'react';

import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';
import Ticker from './newticker'
import Jumbo from './jumbotron';



const About = () => {
    
    return (
        <>
        <div className='container flex flex-wrap justify-center items-center mx-auto'>
            {/* Jumbotron */}
            < Jumbo />
            {/* news */}
            < Ticker />
            
            <section className='container m-2 md:m-auto md:px-14'>
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card5 />
            </section>
            

            {/* {"HELLO WORLD".repeat(2000)} */}
        </div>
        </>
    )

}

export default About;