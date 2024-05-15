import React from "react";
import "./Contacts.css"
export default function Contacts(){

    return(
        <div id="contacts" className="Contacts">
            <h1 >
                <span>Contacts</span>
            </h1>
            <h3>
                Phone: 87476756477
            </h3>
            <h3>
                Email: d_kozhakhmetov@kbtu.kz
            </h3>
            <h3>
                <address>
                    Almaty, Kazakhstan
                </address>
            </h3>
            <button>
                Call me
            </button>

        </div>
    )
}