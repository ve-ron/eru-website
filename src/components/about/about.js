import React from 'react';

import Jumbo from './jumbotron';

const About = () => {
    
    return (
        <>
        <div className='container flex flex-wrap justify-center items-center mx-auto'>
            {/* Jumbotron */}
            < Jumbo />
            {/* news */}
            {/* card 1 */}
            {/* card 2 */}
            {"HELLO WORLD".repeat(2000)}
        </div>
        </>
    )

}

export default About;