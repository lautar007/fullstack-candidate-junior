import React from "react";
import { useState } from "react";

export default function SubCardJob({title, type, salary, city, created, department, hours, shift, summary}){
    const date1 = new Date().getTime();
    const date2 = new Date(created).getTime();
    const diff = date1 - date2;
    const ago = Math.floor(diff/(1000*60*60*24*7));
    
    const[drop, setDrop] = useState ({
        action: false, jobs:[]
    })

    function handleDetail (e){
        setDrop({
            action: !drop.action,
        })
    }

    return(
        <div>
            <div id="cont-subjob">
                <div>
                    <hr/>
                    <button className="btn-job" onClick={(e)=> handleDetail(e)}>{title}</button>
                    <p className="btn-job-p">{type} | ${salary[0]} - ${salary[1]} an hour | {city}</p>
                </div>
                <div>
                    <p id="card-date">{ago} weeks ago</p>
                </div>
            </div>
                {
                     drop.action === true ?
                    <div id="cont-apart">
                        <div id='cont-aparT'>
                          <div id="apart">
                            <h4>Departments:</h4>
                            <p>{department[0]}, {department[1]}, {department[2]}, {department[3]}, {department[4]}</p>
                          </div>
                          <div id="apart">
                            <h4>Hours / shift:</h4>
                            <p>{hours} / {shift} </p>
                          </div>
                          <div id="apart">
                            <h4>Summary:</h4>
                            <p>{summary}</p>
                          </div>
                        </div>
                        <div id="apart-btn">
                            <button>Job details</button>
                            <button>Save job</button>
                        </div>
                    </div>
                     :
                     null
                }
        </div>
    )
}