import React from "react";

const Ticker = () => {

    return (
        <>
        <div className="mx-2 my-2 md:mx-auto w-full py-0.5 rounded-lg items-center  text-xl text-c_normal-light bg-c_nav-pink-light overflow-hidden">
            <div className="px-5 border-dashed border-y-4 border-c_focus-light">
                <div className=" relative flex overflow-x-hidden">
                    <div className="w-full py-1 animate-marquee whitespace-nowrap">
                        Eru Website is up, hurrayy..
                    </div>
                    <div className="absolute top-0 py-1 w-full animate-marquee2 whitespace-nowrap">
                        Eru Website is up, hurrayy..
                    </div>
                </div>
            </div>

        </div>

        </>
    )

}

export default Ticker;