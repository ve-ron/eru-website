import React from "react";

import './about.css'

import img from '../../images/eru-automod.png'

const Card2 = () => {

    return (
        <>
        <div className="fadeIn md:flex md:flex-wrap flex-col justify-between  md:h-96 [500px] p-5 lg:p-10 w-full my-10 rounded-lg bg-gradient-to-r from-c_nav-pink-light/75 via-pink-400/75 to-violet-400/75 hover:from-c_nav-pink-light/95 hover:via-pink-400/95 hover:to-violet-400/75  hover:shadow-2xl">
            <div className=" text-left text-xl md:text-2xl  lg:text-3xl md:order-1 flex font-semibold text-pink-800 flex-[1_1_50%] md:w-3/5">
                <h2 className="my-5 md:pl-10 md:self-end md:pr-10">Auto moderation to protect your server.</h2>
            </div>
            <img className="flex-[1_1_100%] mb-5 md:my-auto float-right md:w-2/5 object-contain " src={img} alt="welcomer"></img>
            <div className="text-lg md:flex lg:text-base text-left flex-[1_1_50%] md:w-3/5 md:order-1">
                <span className="my-3 md:pr-6 md:pl-10">
                    Auto Moderation to protect your servers. 
                    Eru has raid protection, spam protection, mention spam protection. 
                    Words filtering can be set for all messages.
                </span>
            </div>
        </div>
        </>
    )
}

export default Card2