import React from "react";

import './jumbotron.css'


const Jumbo = () => {


    return(
        <>
        <div className="custom-bg items-center h-96 md:flex overflow-hidden bg-gradient-to-r from-pink-400/75 to-purple-400/75 hover:from-pink-400/90 hover:to-purple-400/90 hover:shadow-2xl mx-2 my-4 rounded-lg md:mx-auto md:my-4">
            {/* <img className="hidden md:block w-0 md:w-1/2 sm:order-1" alt='eru img' src="/images/833-8330548_zoku-touken-ranbu-trick-or-treat-anime.png"></img> */}
            <div className="" style={{backgroundImage:"url('%PUBLIC_URL%/images/833-8330548_zoku-touken-ranbu-trick-or-treat-anime.png')"}}></div>
            <div className="text-left px-10" >
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-pink-800">A bot for every server.</h1>
                <p className="text-base md:text-base lg:text-xl mt-4">A multi-purpose bot with hundreds of commands.<span className="text-success"> Setup welcomer to invite new members in a style.</span>Use AutoModeration to protect your servers. Search animes, movies etc directly on discord.</p>
                <h4>Popular Trending </h4>
                <div className="my-8">
                    <button className="bg-pink-500 hover:bg-c_focus-light text-c_normal-light rounded-lg md:text-base md:mr-2 md:p-4 md:py-2 lg:text-xl lg:mr-5 lg:px-5 xl:text-2xl xl:p-3 xl:px-6 xl:mr-8">
                        Add to Discord
                    </button>
                    <button className="bg-pink-500 hover:bg-c_focus-light text-c_normal-light rounded-lg md:text-base md:mr-2 md:p-4 md:py-2 lg:text-xl lg:mr-5 lg:px-5 xl:text-2xl xl:p-3 xl:px-6 xl:mr-8">
                        Support Server
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Jumbo