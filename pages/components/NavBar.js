import React from "react";

export default function NavBar(){

    return(
        <div id="cont-navBar">
            <h3 id="titulo-navBar">Health Explore</h3>
            <div id="cont-buttons-navBar">
               <button id="but-navBar">profile</button> 
               <button id="but-navBar">Jobs</button> 
               <button id="but-navBar">professional Network</button> 
               <button id="but-navBar">Lounge</button> 
               <button id="but-navBar">Salary</button> 
            </div>
            <div id="cont-profile">
                <button id="create-navBar">create job</button>
                <p>Logo</p>
                <button id="but-navBar">logout</button>
            </div>
        </div>
    )
}


