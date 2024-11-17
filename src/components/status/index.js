import React from "react";
// import { Link } from "react-router-dom";

import img from '../../images/eru-stats-2.png'

const Status = (props) => {

    return (
        <>
        <div className="relative overflow-x-hidden h-full  container flex flex-1 justify-center items-center mx-auto ">
            <div className="container opacity-95 justify-between h-full  my-2 mx-2 md:mx-auto rounded-lg bg-rose-200 overflow-hidden">
                <div className="my-5">
                    <span className="text-pink-800 text-3xl">Status</span><br/>
                    Stats are not updated immediately.
                </div>
                <div className="flex flex-col md:flex-row rounded-lg bg-gradient-to-r from-rose-300/75 via-purple-400/65 to-violet-200 md:mx-12 mx-2  justify-center">
                    <img alt="status" className="h-96 object-contain" src={img}>
                    </img>
                    <div className=" md:self-end mb-10">
                        <div className=" text-base justify-center my-10">
                            <span className="text-pink-800 text-4xl md:text-6xl">
                                Status:&nbsp;
                            </span>
                            <span>
                                <svg xmlns="https://www.w3.org/2000/svg" className="h-10 w-10 align-text-bottom inline-block text-green-600" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg> 
                            </span> 
                            <span className="text-3xl md:text-5xl">
                                Online.
                            </span>
                        </div>
                        <div className=" text-base justify-center my-10">
                            <span className="text-pink-800 text-4xl md:text-6xl">
                                Latency:&nbsp;
                            </span>
                            <span>
                                <svg xmlns="https://www.w3.org/2000/svg" className="h-10 w-10 align-text-bottom inline-block text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </span> 
                            <span className="text-3xl md:text-5xl ">
                                {}
                            </span>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-around text-xl text-pink-800 font-semibold">
                    <div className="md:w-full rounded-lg my-5 mx-2 md:m-12 p-2 bg-rose-300">
                        <div className="">
                            Usage
                        </div>
                        <div className="text-lg text-rose-50">
                            {}
                        </div>
                    </div>
                    <div className="md:w-full rounded-lg my-5 mx-2 md:m-12  p-2 bg-rose-300 ">
                        <div className="">
                            Users
                        </div>
                        <div className="text-lg text-rose-50">
                            {}
                        </div>
                    </div>
                    <div className="md:w-full rounded-lg my-5 mx-2 md:m-12 p-2  bg-rose-300">
                        <div className="">
                            Servers
                        </div>
                        <div className="text-lg text-rose-50 ">
                            {}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>    
    )
}

export default Status;