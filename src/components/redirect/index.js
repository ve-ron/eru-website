import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { INVITE_URL, TOPGG_URL, SUPPORT_SERVER_URL } from '../../constant'

const CRedirect = () => {
    const { pathname } = useLocation();
    
    useEffect(()=>{
        switch (pathname) {
            case "/invite":
                window.location.replace(INVITE_URL);
                break;
            // case "/vote":
            //     window.location.replace(TOPGG_URL);
            //     break;
            // case "/support":
            //     window.location.replace(SUPPORT_SERVER_URL);
            //     break;
            default:
                break;
        }
        
    },[pathname])
    let path = ((pathname)=>{
        switch (pathname) {
            case "/invite":
                return INVITE_URL
            // case "/vote":
            //     return TOPGG_URL
            // case "/support":
            //     return SUPPORT_SERVER_URL
            default:
                return '';   
        }
    })(pathname)

    return (
        <>
        <div className="relative overflow-x-hidden h-full  container flex flex-1 justify-center items-center mx-auto">
            <div className="container opacity-95 justify-between flex-auto h-full p-4 my-2 mx-2 md:mx-auto rounded-lg bg-rose-200 overflow-hidden">
                Please click <a className="text-pink-800 hover:underline" href={path}>here</a> if you are not redirected withing a few seconds.
            </div>
        </div>
        </>
    )
};

export default CRedirect;