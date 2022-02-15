import React from "react";
import { useState } from 'react';
import CardJob from "./CardJob";

export default function JobPage ({filters, jobs}) {

    console.log(filters)

    const jobS = jobs.jobs;
    console.log(jobS)

    const [input, setInput] = useState([])

    //console.log(jobS[0].items);
    //jobS[0].items.map((it)=>{
    //    const arr = Object.values(it);
    //    console.log(arr)
    //    console.log(arr.includes("Mammoth Hospital"))
    //    return arr
    //})

    function handleSearchBar(e){
        if(e.target.value.length > 2){
        let searchFilter = jobS.map(j => {
            return j.items.filter((it)=> it.job_title.toUpperCase().includes(e.target.value.toUpperCase()))
        })
        console.log(searchFilter)
        let resultSearch = [];
        searchFilter.map((job)=>{ job.map((it)=>{
            resultSearch.push(it.job_title)})
        })
        setInput(resultSearch);
        console.log(input)
    }
    else setInput('')
    }
    
    let tenDepart = filters.department.slice(0,10)

    return(
        <div id='cont-jobPage'>
            <div id = 'searchBar'>
                <input 
                type = 'text'
                placeholder = 'Search for any job, title, keywords or company'
                onChange = {(e) => handleSearchBar(e)}
                />
            </div>
            <div id='filters-jobs'>
                <div id='filters'>
                    <div id='cont-filt'>
                        <h2>job type</h2>
                        {
                            filters.job_type && filters.job_type.map((type) =>{
                                return(
                                    <div id='list-filt' key={type.doc_count}>
                                    <button>{type.key}</button>
                                    <p>{type.doc_count}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div id='cont-filt'>
                        <h2>departmen</h2>
                        {
                            tenDepart && tenDepart.map((depart) =>{
                                return(
                                    <div id='list-filt' key={depart.doc_count}>
                                    <button>{depart.key}</button>
                                    <p>{depart.doc_count}</p>
                                    </div>
                                )
                            })
                        }
                        <button>Show more</button>
                    </div>
                    <div id='cont-filt'>
                        <h2>work schedule</h2>
                        {
                            filters.work_schedule && filters.work_schedule.map((schedule) =>{
                                return(
                                    <div id='list-filt' key={schedule.doc_count}>
                                    <button>{schedule.key}</button>
                                    <p>{schedule.doc_count}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div id='cont-filt'>
                        <h2>experience</h2>
                        {
                            filters.experience && filters.experience.map((exp) =>{
                                return(
                                    <div id='list-filt' key={exp.doc_count}>
                                    <button>{exp.key}</button>
                                    <p>{exp.doc_count}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div id='jobs'>
                    <div id="job-postings">
                        {
                            input.length > 0 ?
                            <h3>{input.length}</h3>
                            :
                            <h3>0</h3>
                        }
                        <p>job postings</p>
                    </div>
                    {
                     input && input.map((job)=>{
                         return(
                             <div>
                                 <CardJob
                                 title = {job}
                                 />
                             </div>
                         )
                     })
                    }
                </div>
            </div>
        </div>
    )
}


