import React from "react";
import { Link } from "react-router-dom";

const Error = (props) => {


    return (
        <>
        <div className="relative overflow-x-hidden h-full  container flex flex-1 justify-center items-center mx-auto ">
            <div className="container opacity-95 justify-between h-full  my-2 mx-2 md:mx-auto rounded-lg bg-rose-200 overflow-hidden">
                <div className="flex flex-col p-4 pt-0 pb-10">
                    <div className="text-rose-50 text-[10rem] md:text-[15rem] font-bold">
                        404.
                    </div>
                    {/* <div className="flex-col justify-center"> */}
                        <p className="text-pink-800 pb-3">The webpage not found.</p>
                        <button className="self-center bg-pink-500 hover:bg-c_focus-light text-c_normal-light w-4/5 text-xl py-2 rounded-md sm:w-2/6  sm:mr-5 sm:px-5 sm:py-3 md:rounded-lg md:text-base md:mr-2 md:p-4 md:py-2 lg:text-xl lg:mr-5 lg:px-5 xl:text-2xl xl:p-3 xl:px-6 xl:mr-8 duration-300"><Link to='/home' className="">Back to Home</Link></button>
                    {/* </div> */}

                </div>
            </div>
        </div>
        </>
    )
}

export default Error;