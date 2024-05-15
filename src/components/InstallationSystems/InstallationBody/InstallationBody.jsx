import React from "react";
import { Outlet } from "react-router-dom";
import InstallationHeader from "../Header/Header";

export default function InstallationBody(){
    return(
        <>
        <InstallationHeader/>
        <Outlet />
        </>
    )
}