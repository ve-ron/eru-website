import React from "react";
import { EMAIL, WEBSITE, E_NAME } from "../../constant";

import { Link } from "react-router-dom";

// import { EMAIL } from "../../constant";

const ToS = () => {
    return (
        <>
        <div className="container flex flex-wrap justify-center items-center mx-auto ">
            <div className="container opacity-95 justify-between  my-2 mx-2 md:mx-auto rounded-lg bg-rose-200 overflow-hidden">



                <div className="text-3xl text-pink-800 m-4">
                    Terms and Conditions
                </div>
                <div id="privacy-policy" className="text-left m-4">
                    <div className="">
                        {/* <h1 className="text-xl font-semibold ml-2" >Introduction </h1> */}
                        
                        <div className="m-2">
                            <h1 className="font-bold  ">Introduction</h1>

                            <p>
                                Welcome to {E_NAME}. These terms of service (the "Terms of Service" or "Terms") are a binding contract between you and {E_NAME} (referred to as "{E_NAME}", the "Company", "we", "us", or "our"). These Terms of Service describe the rules and conditions that govern your use of our website(s), product(s), bot(s), and related services (collectively, "{E_NAME}" or the "Services"), and hereby incorporate our Privacy Policy located at <Link to="/policy" className="text-pink-800 hover: ">{WEBSITE}/privacy</Link> (the "Privacy Policy").
                            </p>
                            <p>
                                
                                By accepting these Terms of Service, or using or accessing our Services, you agree (i) that you are 13 years of age, (ii) if you are the age of majority in your jurisdiction, that you have read, understood, and agree to be legally bound by these Terms and Privacy Policy, and (iii) if you are under the age of majority in your jurisdiction, that your legal guardian has reviewed and agreed to the Terms and Privacy Policy. If you object to any of these terms, please do not use the Services.

                            </p>
                        </div>
                        <div className="m-2">
                            <h1 className="font-bold  ">Branding</h1>

                            <p>
                                Eru is a character from an anime named "Hyouka", we don't own any of these arts, all legals diricts goes to the authors of the anime. We edit these arts to fit the website design, but we didn't made them by ourself.

                            </p>
                        </div>

                        <div className="m-2">
                            <h1 className="font-bold  " >Acceptable Use</h1>
                            <p>
                                The Services may only be used within the scope of what they are provided for, under these Terms and applicable law. By accessing the Services, you agree that you shall not use the Services in a manner that:
                            </p>
                            <ul type="circle" className="list-inside list-disc">
                                <li>violates these Terms, or any applicable laws, regulations, or contractual agreements, including, when relevant, the Discord Terms of Service, which can be found at <a href="https://discord.com/terms" className="text-pink-800 hover: ">https://discord.com/terms</a>.</li>
                                <li>infringes on the intellectual property rights of any party (including HFYM);</li>
                                <li>is threatening, harassing, defamatory, libelous, deceptive, fraudulent, malicious, obscene, or otherwise objectionable.</li>
                                <li>is threatening, harassing, defamatory, libelous, deceptive, fraudulent, malicious, obscene, or otherwise objectionable;</li>
                                <li>attempts, in any manner, to obtain passwords, accounts, or other private information from other users</li>
                                <li>interferes or attempts to interrupt the proper operation of the Services;</li>
                                <li>exploits or publicly informs other members of any error or bug which gives an unintended advantage;</li>
                                <li>involves programs or operations designed to falsely resemble or impersonate the Services to deceive other users;</li>
                                <li>involves the development, distribution, or use of unacceptable software programs (as listed below);</li>
                                <li>involves the unapproved exchange of Virtual Currency or Virtual Goods (as defined below) outside the Services.or</li>
                                <li>condones, benefits from, or is otherwise in connection with any person who violates these Terms.</li>

                            </ul>
                            <p>
                                We reserve the right to terminate or suspend your access to the Services immediately, without prior notice, and under our sole discretion, for any or no reason whatsoever, including, without limitation, a violation of any of the foregoing, any other behavior deemed a violation of the Terms of Service, or sufficient reason to believe you have willingly and knowingly supported or condoned behavior from another user that violated the Terms of Service.
                            </p>
                            <p>
                                If you are unsure whether an action may violate the Terms of Service, please <Link to="/policy#contact-us" className="text-pink-800 hover:underline ">contact</Link> the Company for pre-approval.
                            </p>
                        </div>


                        <div className="m-2">
                            <h1 className="font-bold  ">Disclaimer of Warranty</h1>

                            <p>
                                The services are provided on an "AS IS" basis, without warranties of any kind, either express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement, or that use of the services will be secure or error-free or that the services will always function without delays, disruptions, or imperfections. Your use of the services is at your sole risk. The foregoing disclaimers shall apply to the extent permitted by applicable law.

                            </p>
                        </div>
                        <div className="m-2">
                            <h1 className="font-bold  ">Limitation of Liability</h1>

                            <p>
                                To the maximum extent permitted by applicable law, under no circumstances shall the company be liable to you for any indirect, incidental, special, punitive, exemplary, or consequential damages, including lost profits, loss of data, or goodwill, service interruption, computer damage, or system failure or the cost of substitute services, arising out of or in connection with these terms. In no event will our total liability arising out of or in connection with these terms or from the use of or inability to use the services or content exceed one hundred united states dollars ($100).
                            </p>
                        </div>
                        <div className="m-2">
                            <h1 className="font-bold  ">Indemnification</h1>
                            {/* <ul type="circle" className="list-inside list-disc">
                                <li>Bot stores guild ids. Bot doesn't have any power over managing the guild and members unless and until permissions are given by moderators or owner of the server. </li>
                                <li>Guild id is stored to save server configurations for better experience. </li>
                                <li>Data is not shared with any third party/ external companies. </li>
                            </ul> */}
                            <p>
                                You agree to indemnify and hold the Company harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorney's fees) arising from or in any way related to any claims relating to (i) your use of the Services (including any actions taken by a third party using your account), and (ii) your violation of these Terms.

                            </p>
                        </div>

                        <div className="m-2">
                            <h1 className="font-bold  ">Changes to These Terms</h1>
                            <p>
                                The Company reserves the right to update these Terms of Service at any time. If our Terms change, we will post a notice on our site located at <Link to="/policy" className="text-pink-800 hover: ">{WEBSITE}</Link> and/or notify you by email or other means. Unless we state otherwise, your continued use of the Services after we post modifications to the Terms constitutes your agreement to those changes. If you object to the changes, please do not continue using the Services.
                            </p>

                        </div>
                        <div className="m-2">
                            <h1 className="font-bold  ">Contact Us</h1>
                            <p>
                            If you have any questions about these Terms and Conditions, You can contact us: By email: <a href={"mailto:"+EMAIL} className="text-pink-800 hover:underline">{EMAIL}</a> 
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default ToS;
