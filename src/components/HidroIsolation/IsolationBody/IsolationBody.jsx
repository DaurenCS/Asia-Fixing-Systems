import React from "react";
import { Outlet } from "react-router-dom";
import IsolationHeader from "../IsolationHeader/Header";
export default function IsolationBody(){
    return(
        <>
        <IsolationHeader/>
        <Outlet />
        
        </>
    )
}