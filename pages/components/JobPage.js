import React from "react";
import { useState } from 'react';
import CardJob from "./CardJob";

export default function JobPage ({filters, jobs}) {

    //the 'jobS' constant contain an array with the 20 companies and their jobs.
    const jobS = jobs.jobs;
    console.log(jobS)

    //in this input will appear the results of the SearchBar search.
    const [input, setInput] = useState([])

    const [filt, setFilt] = useState([])

    //the next function handle the searchBar. It filter jobs by title, keyword or company, then push the results on the 'input' array.
    function handleSearchBar(e){
        if(e.target.value.length > 2){
        let titleFilter = jobS.map(j => {
            return j.items.filter((it)=> it.job_title.toUpperCase().includes(e.target.value.toUpperCase()))
        })
        let companyFilter = jobS.map(j => {
            return j.items.filter((it)=> it.name.toUpperCase().includes(e.target.value.toUpperCase()))
        })
        
        let resultSearch = [];

        titleFilter.map((job)=>{ job.map((it)=>{
            resultSearch.push(it.job_title)})
        })

        companyFilter.map((com)=>{com.map((it)=>{
            resultSearch.push(it.job_title)})
        })

        setInput(resultSearch);
        console.log(input)
    }
    else setInput('')
    }

    //The next function handle all the filters and show only the jobs that achieve the requirement.
    function handleFilter(e){
        let filterType
        let resultFilter = []

        if(e.target.name === 'type'){
            filterType = jobS.map(j => {
                return j.items.filter((it)=> it.job_type === e.target.value)
            })
        }
        
        if(e.target.name === 'depart'){
            filterType = jobS.map(j => {
                return j.items.filter((it)=> it.department.includes(e.target.value))
            })
        }

        if(e.target.name === 'schedule'){
            filterType = jobS.map(j => {
                return j.items.filter((it)=> it.work_schedule === e.target.value)
            })
        }

        if(e.target.name === 'exp'){
            filterType = jobS.map(j => {
                return j.items.filter((it)=> it.experience === e.target.value)
            })
        }

        filterType.map((type)=>{type.map((it)=>{
            resultFilter.push(it.job_title)})
        });
        setInput(resultFilter);
    }
    
    //this variable allows show only the first ten values of the departments list of filters.
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
                                    <button
                                    name="type"
                                    value={type.key}
                                    onClick = {(e)=> handleFilter(e)}
                                    >{type.key}</button>
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
                                    <button
                                    name="depart"
                                    value={depart.key}
                                    onClick = {(e)=> handleFilter(e)}
                                    >{depart.key}</button>
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
                                    <button
                                    name="schedule"
                                    value={schedule.key}
                                    onClick = {(e)=> handleFilter(e)}
                                    >{schedule.key}</button>
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
                                    <button
                                    name="exp"
                                    value={exp.key}
                                    onClick = {(e)=> handleFilter(e)}
                                    >{exp.key}</button>
                                    <p>{exp.doc_count}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div id='jobs'>
                    <div id="sort-header">
                        <div id="job-postings">
                            {
                                input.length > 0  ?
                                <h3>{input.length}</h3>
                                :
                                <h3>7,753</h3>
                            }
                            <p>job postings</p>
                        </div>
                        <div id="job-sorts">
                            <p>Sort by</p>
                            <button>Location</button>
                            <button>Rol</button>
                            <button>Department</button>
                            <button>Education</button>
                            <button>Experience</button>
                        </div>
                    </div>
                    {
                     input.length > 0 ? input.map((job)=>{
                         return(
                             <div id={Math.random()}>
                                 <CardJob
                                 title = {job}
                                 />
                             </div>
                         )
                     })
                     :
                     jobS && jobS.map ((job)=>{
                         return (
                             <div id="header-company" key={job.name}>
                                 <h3>{job.name.toUpperCase().slice(0, 2)}</h3>
                                 <h4>{job.items.length} jobs for {job.name}</h4>
                             </div>
                         )
                     })
                    }
                </div>
            </div>
        </div>
    )
}


