import React, { useState } from "react";
import { Link } from "react-router-dom";

const Faqs = (props) => {

    const [visible, setVisible] = useState('');

    const handleVisible = (id) => {
        if (visible === id ) {
            setVisible('')
            return
        }
        setVisible(id)        
    }


    return (
        <>
        <div className="container flex flex-wrap justify-center items-center mx-auto ">
            <div className="container opacity-95 justify-between  my-2 mx-2 md:mx-auto rounded-lg bg-rose-200 overflow-hidden">
                <div className="md:m-10 ">
                    <div className="flex flex-col">
                        {/* Questions here */}


                        <div className="m-5">
                            <div className="p-2 px-4 bg-rose-100 border-c_focus-light border-2 rounded-lg ">
                                <button className="container flex justify-between text-left" id="q1"  onClick={(e)=>{handleVisible(e.currentTarget.id)}}>
                                        <div className="break-words font-semibold text-lg">
                                            Is Eru free to use?
                                        </div>
                                        <div className="text-red-500" >
                                            <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6 text-c_focus-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                </button>
                                <hr className={(visible === "q1")?"border-c_nav-pink-light my-2 duration-300":"hidden"}></hr>
                                <div className={(visible === "q1")?"break-words text-left duration-300":"hidden"}>
                                    Yes, Currently Eru is totally free to use, and can be added in any server. 
                                    You can invite Eru with this <Link className="text-pink-800 hover:underline" to={'/invite'}>link</Link>.
                                </div>
                            </div>
                        </div>


                        
                        <div className="m-5">
                            <div className="p-2 px-4 bg-rose-100 border-c_focus-light border-2 rounded-lg">
                                <button className="container flex justify-between text-left" id="q2"  onClick={(e)=>{handleVisible(e.currentTarget.id)}}>
                                        <div className="break-words font-semibold text-lg">
                                            Can I change the prefix?

                                        </div>
                                        <div className="text-red-500" >
                                            <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6 text-c_focus-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                </button>
                                <hr className={(visible === "q2")?"border-c_nav-pink-light my-2 ":"hidden"}></hr>
                                <div className={(visible === "q2")?"break-words text-left":"hidden"}>
                                    Yes. you can change prefix for eru.<br/>
                                    Use <span className="bg-rose-50 rounded-md p-1 shadow-inner whitespace-pre-line">eru prefix e!</span> <br/>
                                    Eru can have 2 prefixs, <span className="bg-rose-50 rounded-md p-1 shadow-inner whitespace-pre-line">Eru or eru</span>,
                                    and <span className="bg-rose-50 rounded-md p-1 shadow-inner whitespace-pre-line">e!</span> by default. <br/> <span className="bg-rose-50 rounded-md p-1 shadow-inner whitespace-pre-line">e!</span> can be changed to any default characters
                                </div>
                            </div>
                        </div>



                        
                        <div className="m-5">
                            <div className="p-2 px-4 bg-rose-100 border-c_focus-light border-2 rounded-lg">
                                <button className="container flex justify-between text-left" id="q3"  onClick={(e)=>{handleVisible(e.currentTarget.id)}}>
                                        <div className="break-words font-semibold text-lg">
                                            Can Eru be added in small servers?
                                        </div>
                                        <div className="text-red-500" >
                                            <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6 text-c_focus-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                </button>
                                <hr className={(visible === "q3")?"border-c_nav-pink-light my-2 ":"hidden"}></hr>
                                <div className={(visible === "q3")?"break-words text-left":"hidden"}>
                                    Yes, Eru can be added in any server you want. There's no minimum member required.
                                </div>
                            </div>
                        </div>


                        <div className="m-5">
                            <div className="p-2 px-4 bg-rose-100 border-c_focus-light border-2 rounded-lg">
                                <button className="container flex justify-between text-left" id="q4"  onClick={(e)=>{handleVisible(e.currentTarget.id)}}>
                                        <div className="break-words font-semibold text-lg">
                                            How to setup Eru?
                                        </div>
                                        <div className="text-red-500" >
                                            <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6 text-c_focus-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                </button>
                                <hr className={(visible === "q4")?"border-c_nav-pink-light my-2 ":"hidden"}></hr>
                                <div className={(visible === "q4")?"break-words text-left":"hidden"}>
                                    To setup eru bot use <span className="bg-rose-50 rounded-md p-1 shadow-inner whitespace-pre-line">eru help games</span>.<br/>
                                    If you still have issues join our support server <span className="bg-rose-50 rounded-md p-1 shadow-inner whitespace-pre-line">eru support</span>, 
                                    you can also join via this <Link className="text-pink-800 hover:underline" to={'/support'}>link.</Link> 
                                </div>
                            </div>
                        </div>


                        <div className="m-5">
                            <div className="p-2 px-4 bg-rose-100 border-c_focus-light border-2 rounded-lg">
                                <button className="container flex justify-between text-left" id="q5"  onClick={(e)=>{handleVisible(e.currentTarget.id)}}>
                                        <div className="break-words font-semibold text-lg">
                                            What are our Privacy Policies?
                                        </div>
                                        <div className="text-red-500" >
                                            <svg xmlns="https://www.w3.org/2000/svg" className="h-6 w-6 text-c_focus-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                </button>
                                <hr className={(visible === "q5")?"border-c_nav-pink-light my-2 ":"hidden"}></hr>
                                <div className={(visible === "q5")?"break-words text-left":"hidden"}>
                                    You can read our Privacy Policies <Link className="text-pink-800 hover:underline" to={'/policy'}>here</Link>.
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Faqs