import React from "react";
import gif from './loader.gif'
import './Loader.css'

export default function Loader(){
    return(
        <>
        <section className="loader">
            <img src={gif} alt="" />
        </section>
        </>
    )
}