import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom" 

import About  from "../components/about";

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
                <Route path="/" element={<About />}></Route>
            </Routes>
            {/* footer */}
            < CFooter />
        </BrowserRouter> 
    )

}


export default CRoutes;