import React from "react";

import { Link } from "react-router-dom";

import { EMAIL } from "../../constant";

const PP = () => {
    return (
        <>
        <div className="container flex flex-wrap justify-center items-center mx-auto ">
            <div className="container opacity-95 justify-between  my-2 mx-2 md:mx-auto rounded-lg bg-rose-200 overflow-hidden">
                <div className="text-3xl text-pink-800 m-4">
                    Privacy Policy
                </div>
                <div id="privacy-policy" className="text-left m-4">
                    <div className="">
                        <div className="m-2 font-semibold ml-2">
                            Last updated: June 29, 2022
                        </div>
                        <h1 className="text-xl font-semibold ml-2" >What information do we collect? </h1>
                        
                        <div className="m-2">
                            <h1 className="font-bold underline">Guild Information</h1>
                            <ul type="circle" className="list-inside list-disc">
                                <li>Bot stores guild ids. Bot doesn't have any power over managing the guild and members unless and until permissions are given by moderators or owner of the server. </li>
                                <li>Guild id is stored to save server configurations for better experience. </li>
                                <li>Data is not shared with any third party/ external companies. </li>
                            </ul>
                        </div>
                        
                        <div className="m-2">
                            <h1 className="font-bold underline" >Personal Information</h1>
                            <ul type="circle" className="list-inside list-disc">
                                <li>Messages received for debug purpose and anti-spam filters. </li>
                                <li>Data regarding your interaction with the bot which includes command executed, time, guild, channel of execution.</li>
                                <li>Information you give voluntary to the bot via commands. </li>
                                <li>Data is not shared with any third party/ external companies. </li>
                            </ul>
                        </div>

                        <div className="m-2">
                            <h1 className="font-bold underline">What we do with your data?</h1>
                            <ul type="circle" className="list-inside list-disc">
                                <li>Message content is solely used for proper functioning of moderative actions, and is not stored permanantly. </li>
                                <li>We retain data for as long as is necessary to provide you with your requested service. Data is removed when the reason for its collection is no longer applicable.</li>
                                <li>To remove your data contact us <Link className="text-pink-800 hover:underline" to={'/support'}>here</Link>. Do note user wont be able to interact with some part of our bot hence after.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-left m-4">
                    <div className="">
                        <h1 className="text-xl font-semibold ml-2" >Website Policy </h1>
                        <div id="website-policy" className="m-2">
                            <h1 className="font-bold underline">What information do we collect?</h1>
                            <ul className="list-inside list-disc">
                                <li>Eru does not request, share or sell your personal information. The amount of data collected is minimal for proper functioning of certain commands which require such vital information.</li>
                                <li>We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.</li>
                            </ul>
                        </div>


                        <div className="m-2">
                            <h1 className="font-bold underline">What we do with your data?</h1>
                            <h1>We use the information we collect in various ways, including to:</h1>
                            <ul className="list-inside list-disc">
                                <li>Provide, operate, and maintain our website</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Find and prevent fraud</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="text-left m-4">
                    <div className="">
                        <h1 className="text-xl font-semibold ml-2" >Right to access your data and delete it </h1>
                        <div id="your-data" className="m-2">
                            <h1 className="font-bold underline">Access your data</h1>
                            <p>You can contact us on our <Link className="text-pink-800 hover:underline" to={'/support'}>Discord support server</Link> at anytime to request your data and request deletion.
                            </p>
                            <p>In case you need it, you can also contact support at <a className="text-pink-800 hover:underline" href={"mailto:"+EMAIL}>{EMAIL}</a>
                            </p>
                            <p>We will get back to you with a report of all data we have on you.
                            </p>

                        </div>
                        <div id="delete-your-data" className="m-2">
                            <h1 className="font-bold underline">Delete your data</h1>
                            <p>You can request data deletion by <Link className="text-pink-800 hover:underline" to={'/policy#contact-us'}>contacting us</Link>. We will automatically (and without looking at that data) erase it permanently from all our databases. Do note user wont be able to interact with some part of our bot hence after.
                            </p>


                        </div>

                    </div>
                </div>
                <div className="text-left m-4">
                    <div className="">
                        <h1 className="text-xl font-semibold ml-2" >Contact Us. </h1>
                        <div id="contact-us" className="m-2">
                            <h1 className="font-bold underline">You can contact us on following platforms.</h1>
                            <ul className="list-inside list-disc">
                                <li><Link className="text-pink-800 hover:underline" to={'/support'}>Discord</Link></li>
                                <li><a className="text-pink-800 hover:underline" href={"mailto:"+EMAIL}>Email us</a></li>
                                <li><Link className="text-pink-800 hover:underline" to={'/support'}>GitHub</Link></li>
                                
                                
                                
                            </ul>
                        </div>


                    </div>
                </div>


            </div>
            
        </div>
        </>    
    )
}

export default PP;