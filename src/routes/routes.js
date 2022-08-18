import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom" 

import Faqs from "../components/faqs";
import Commands from "../components/commands";
import About  from "../components/about";
import CRedirect from '../components/redirect'
import PP from "../components/privacy-policy";
import Status from "../components/status";
import ToS from "../components/ToS";
import Error from "../components/error";

import ProtectedRoute from "../utils/protectedRoute";
import NavBar from "./c-nav-bar"
import CFooter from "./c-footer";



const CRoutes = ()  => {
    /*
    - All routes are handled here.
    - 
    */

    return (
        <BrowserRouter>
            {/* navbar here */}
            < NavBar />
            {/* Routes */}
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/home" element={<About />} />

                <Route path="/commands/" element={<Commands />} />
                <Route path="/faqs" element={<Faqs />} />

                <Route path="/invite" element={<CRedirect />} />
                <Route path="/support" element={<CRedirect />} />
                <Route path="/vote"element={<CRedirect />} />
                <Route path="/topgg"element={<CRedirect />} />
                <Route path="/botlist"element={<CRedirect />} />

                <Route path="/policy" element={<PP />} />
                <Route path="/status" element={<Status />} />
                <Route path="/tos" element={<ToS />} />  

                <Route path="/login" element={<CRedirect />} />
                <Route path="/profile" element={<ProtectedRoute isAllowed={''} redirectPath="/" />} > 
                    <Route path="" element={''} />
                </Route>

                <Route path="*" element={<Error />} />
            </Routes>
            {/* footer */}
            < CFooter />
        </BrowserRouter> 
    )

}


export default CRoutes;