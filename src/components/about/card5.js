import React from "react";

import img from '../../images/welcomer-f-1.png'

const Card5 = () => {

    return (
        <>
        <div className="md:flex md:flex-wrap flex-col justify-between  md:h-96 [500px] p-5 md:p-10 w-full my-10 rounded-lg bg-gradient-to-r from-c_nav-pink-light/75 via-pink-400/75 to-violet-400/75 hover:from-c_nav-pink-light/95 hover:via-pink-400/95 hover:to-violet-400/75  hover:shadow-2xl">
            <div className=" text-left text-xl md:text-2xl  lg:text-3xl flex font-semibold text-pink-800 flex-[1_1_50%] md:w-3/5">
                <h2 className="my-5 md:self-end md:pr-10">Server commands</h2>
            </div>
            <img className="flex-[1_1_100%] mb-5 md:my-auto float-right md:w-2/5 object-contain md:order-1" src={img} alt="welcomer"></img>
            <div className="text-lg md:flex lg:text-base text-left flex-[1_1_50%] md:w-3/5 ">
                <span className="my-3 md:pr-6">
                    Disable commands channel wise to prevent spams.
                    Check user detailed profiles of users. 
                </span>
            </div>
        </div>
        </>
    )
}

export default Card5