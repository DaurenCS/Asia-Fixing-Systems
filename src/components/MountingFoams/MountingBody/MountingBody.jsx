import React from "react";
import { Outlet } from "react-router-dom";
import MountingHeader from "../MountingHeader/Header";

export default function MountingBody(){
    return(
        <>
        <MountingHeader/>
        <Outlet />
        
        </>
    )
}