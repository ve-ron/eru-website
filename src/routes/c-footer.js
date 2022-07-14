import React from "react";
import { Link } from 'react-router-dom'

import { E_NAME, E_NAME_NOSPACE } from "../constant";

const CFooter = () => {
    return (
        <>
        <footer className="p-4 mt-auto justify-between items-center bg-c_nav-pink-light sm:p-6 ">
            <div className="container md:flex flex-wrap justify-between items-center md:mx-auto ">
                <div className="mb-6 md:mb-0">
                    <Link to="/#" className="flex items-center">
                        <img src="/logo512.png" className="mr-3 h-8 rounded-full" alt="{E_NAME}" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-c_normal-light hover:text-c_focus-light">{E_NAME}</span>
                    </Link>
                    <span className="flex items-center text-c_normal-light">Invite Eru today.</span>
                    <span className="flex items-center text-sm text-c_normal-light">© 2022 {E_NAME_NOSPACE}. All rights reserved.</span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-2 text-base font-bold  uppercase text-c_focus-light">About</h2>
                        <ul className="text-c_normal-light">
                            <li className="mb-2">
                                <Link to="/#" className="hover:underline">About Eru</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/policy#contact-us" className="hover:underline">Developers</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/policy#contact-us" className="hover:underline">Contact us.</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-2 text-base font-bold  uppercase text-c_focus-light">Follow Us</h2>
                        <ul className="text-c_normal-light">
                            <li className="mb-2">
                                <Link to="/invite" className="hover:underline ">Invite</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/support" className="hover:underline">Discord</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/vote" className="hover:underline">Top.gg</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-2 text-base font-bold  uppercase text-c_focus-light">Legal</h2>
                        <ul className="text-c_normal-light">
                            <li className="mb-2">
                                <Link to="/policy" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/tos" className="hover:underline">Terms and Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default CFooter;