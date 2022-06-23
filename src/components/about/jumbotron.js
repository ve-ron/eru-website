import React from "react";
import './jumbotron.css'

import { Link } from "react-router-dom";

import img from '../../images/eru-jumbo-1.png'

const Jumbo = () => {
    return(
        <>
        <div className="custom-bg items-center h-5/6 md:h-96 md:flex overflow-hidden hover:shadow-2xl mx-2 my-4 rounded-lg md:mx-auto md:my-4">
            <img className="w-full h-48 object-cover md:block md:w-1/2 md:h-auto sm:order-1" alt='eru img' src={img}></img>
            <div className="text-left px-10" >
                <h1 className="text-3xl mt-4 sm:text-4xl sm:mt-10 md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-pink-800">A bot for every server.</h1>
                {/* <img className="md:hidden w-full h-48 object-cover" alt='eru img' src={img}></img> */}
                <p className="text-lg sm:mt-5 sm:text-xl md:text-base lg:text-xl mt-4">A multi-purpose bot with hundreds of commands.<span className="text-success"> Setup welcomer to invite new members in a style.</span>Use AutoModeration to protect your servers. Search animes, movies etc directly on discord.</p>
                {/* <h4>Popular Trending </h4> */}
                <div className="flex-col sm:flex-row my-8">
                    <button className="bg-pink-500 hover:bg-c_focus-light text-c_normal-light w-4/5 text-xl mb-3 py-2 rounded-md sm:w-auto sm:mr-5 sm:px-5 sm:py-3 md:mb-auto md:rounded-lg md:text-base md:mr-2 md:p-4 md:py-2 lg:text-xl lg:mr-5 lg:px-5 xl:text-2xl xl:p-3 xl:px-6 xl:mr-8 duration-300">
                        <Link to='/invite'>
                            Add to Discord
                        </Link>
                    </button>
                    <button className="bg-pink-500 hover:bg-c_focus-light text-c_normal-light w-4/5 text-xl py-2 rounded-md sm:w-auto  sm:mr-5 sm:px-5 sm:py-3 md:rounded-lg md:text-base md:mr-2 md:p-4 md:py-2 lg:text-xl lg:mr-5 lg:px-5 xl:text-2xl xl:p-3 xl:px-6 xl:mr-8 duration-300">
                        {/* <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div> */}
                        <Link className="" to='/support'>
                            Support Server
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Jumbo