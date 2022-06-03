import React from "react";


const Jumbo = () => {


    return(
        <>
        <div className="items-center lg:flex overflow-hidden bg-gradient-to-r from-pink-400/75 to-purple-400/75 hover:from-pink-400/90 hover:to-purple-400/90 hover:shadow-2xl mx-2 my-4 rounded-lg md:mx-auto md:my-4">
            <img className="w-full  md:order-1  " alt='eru img' src="https://cdn.discordapp.com/icons/865852791171055626/916bd1b982f334f323c74211615d15b5.png?size=512"></img>
            <div className="text-left px-10" >
                <h1 className="text-6xl">Best fun bot ever   </h1>
                <p className="text-xl">Hyouka is a 2001 Japanese mystery novel written by Honobu Yonezawa. It is the first volume of the Classic Literature Club series.<span className="text-success">Five additional volumes have been published between 2002 and 2016.</span>  A manga adaptation drawn by Taskohna began serialization in the March 2012 issue of Kadokawa Shoten's Shōnen Ace.</p>
                <h4>Popular Trending </h4>
                <div className="my-8">
                    <button className="bg-pink-500  rounded-lg text-3xl p-4 mx-8">
                        INVITE
                    </button>
                    <button className="bg-pink-500 rounded-lg text-3xl p-4 mx-8">
                        SUPPORT SERVER
                    </button>
                </div>

            </div>
                
        </div>
        </>
    )
}

export default Jumbo