import React from "react";
import { useState } from 'react';
import CardJob from "./CardJob";

export default function JobPage ({filters, jobs}) {

    //the 'jobS' constant contain an array with the 20 companies and their jobs.
    const jobS = jobs.jobs;
    console.log(jobS)

    //in this input will appear the results of the SearchBar search.
    const [input, setInput] = useState([]);
    const [sort, setSort] = useState([]);

    //The next function handle the searchBar. It filter jobs by title, keyword or company, then push the results on the 'input' array as an object with the necesary information.
    function handleSearchBar(e){
        if(e.target.value.length > 1){
        let titleFilter = jobS.map(j => {
            return j.items.filter((it)=> it.job_title.toUpperCase().includes(e.target.value.toUpperCase()))
        })
        let companyFilter = jobS.map(j => {
            return j.items.filter((it)=> it.name.toUpperCase().includes(e.target.value.toUpperCase()))
        })

        let resultInput = [];

        titleFilter.map((job)=>{ job.map((it)=>{
            resultInput.push(
                {
                    title: it.job_title,
                    company: it.name,
                    state: it.state,
                    department: it.department,
                    education: it.required_credentials,
                    experience: it.experience
                }
            )
        })
        })

        companyFilter.map((com)=>{com.map((it)=>{
            resultInput.push(
                {
                    title: it.job_title,
                    company: it.name,
                    state: it.state,
                    department: it.department,
                    education: it.required_credentials,
                    experience: it.experience
                }
            );
        })
        })

        setInput(resultInput);
        console.log(input);
    }
    else setInput([]);
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
            resultFilter.push({
                title: it.job_title,
                company: it.name,
                state: it.state,
                department: it.department,
                education: it.required_credentials,
                experience: it.experience
            })
          })
        });
        setInput(resultFilter);
    }

    //The next function handle the order sorts. They works combined with each other and the filters. 
    function handleSorts (e){
        if(e.target.name === 'rol'){
            if(e.target.value === 'Dis'){
                setInput([]);
            }
            if(e.target.value === 'Asc'){
                input.sort(function(a,b){
                    return a.title > b.title ? 1:-1
                })
                setSort([]);
            }
            if(e.target.value === 'Desc'){
                input.sort(function(a,b){
                    return a.title > b.title ? -1:1
            })
            setSort([]);
            }
        }
        if(e.target.name === 'loc'){
            if(e.target.value === 'Dis'){
                setInput([]);
            }
            if(e.target.value === 'Asc'){
                input.sort(function(a,b){
                        return a.state > b.state? 1: -1
                })
                console.log(input);
                setSort([]);
            }
            if(e.target.value === 'Desc'){
                input.sort(function(a,b){
              return a.state > b.state? -1 : 1
            })
            console.log(input);
            setSort([]);
            }
        }
        if(e.target.name === 'edu'){
            if(e.target.value === 'Dis'){
                setInput([]);
            }
            if(e.target.value === 'Asc'){
                input.sort(function(a,b){
                  return a.education[0] > b.education[0] ? 1: -1
            })
            console.log(input);
            setSort([]);
            }
            if(e.target.value === 'Desc'){
                input.sort(function(a,b){
                  return a.education[0] > b.education[0] ? -1: 1
            })
            console.log(input);
            setSort([]);
            }
        }
        if(e.target.name === 'exp'){
            if(e.target.value === 'Dis'){
                setInput([]);
            }
            if(e.target.value === 'Asc'){
                input.sort(function(a,b){
                  let valorA;
                  let valorB;
                  if(a.experience === 'Internship'){
                      valorA = 1
                  }
                  if(a.experience === 'Junior'){
                    valorA = 2
                  }
                  if(a.experience === 'Intermediate'){
                    valorA = 3
                  }
                  if(a.experience === 'Senior'){
                    valorA = 4
                  }

                  if(b.experience === 'Internship'){
                    valorB = 1
                  }
                  if(b.experience === 'Junior'){
                    valorB = 2
                  }
                  if(b.experience === 'Intermediate'){
                    valorB = 3
                  }
                  if(b.experience === 'Senior'){
                    valorB = 4
                  }

                  return valorA > valorB ? 1: -1 
            })
            console.log(input);
            setSort([]);
            }
            if(e.target.value === 'Desc'){
                input.sort(function(a,b){
                    let valorA;
                    let valorB;
                    if(a.experience === 'Internship'){
                        valorA = 1
                    }
                    if(a.experience === 'Junior'){
                      valorA = 2
                    }
                    if(a.experience === 'Intermediate'){
                      valorA = 3
                    }
                    if(a.experience === 'Senior'){
                      valorA = 4
                    }
  
                    if(b.experience === 'Internship'){
                      valorB = 1
                    }
                    if(b.experience === 'Junior'){
                      valorB = 2
                    }
                    if(b.experience === 'Intermediate'){
                      valorB = 3
                    }
                    if(b.experience === 'Senior'){
                      valorB = 4
                    }
  
                    return valorA > valorB ? -1: 1 
              })
              console.log(input);
              setSort([]);
            }
        }
        if(e.target.name === 'dep'){
            if(e.target.value === 'Dis'){
                setInput([]);
            }
            if(e.target.value === 'Asc'){
                input.sort(function(a,b){
                  return a.department[0] > b.department[0] ? 1: -1
            })
            console.log(input);
            setSort([]);
            }
            if(e.target.value === 'Desc'){
                input.sort(function(a,b){
                  return a.department[0] > b.department[0] ? -1: 1
            })
            console.log(input);
            setSort([]);
            }
        }
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
                            <div id="sort-label">
                                <label>location</label>
                                <select name="loc" onChange={(e)=> handleSorts(e)}>
                                    <option>Dis</option>
                                    <option>Asc</option>
                                    <option>Desc</option>
                                </select>
                            </div>
                            <div id="sort-label">
                                <label>rol</label>
                                <select name="rol" onChange={(e)=> handleSorts(e)}>
                                    <option>Dis</option>
                                    <option>Asc</option>
                                    <option>Desc</option>
                                </select>
                            </div>
                            <div id="sort-label">
                                <label>department</label>
                                <select name="dep" onChange={(e)=> handleSorts(e)}>
                                    <option>Dis</option>
                                    <option>Asc</option>
                                    <option>Desc</option>
                                </select>
                            </div>
                            <div id="sort-label">
                                <label>education</label>
                                <select name="edu" onChange={(e)=> handleSorts(e)}>
                                    <option>Dis</option>
                                    <option>Asc</option>
                                    <option>Desc</option>
                                </select>
                            </div>
                            <div id="sort-label">
                                <label>experience</label>
                                <select name="exp" onChange={(e)=> handleSorts(e)}>
                                    <option>Dis</option>
                                    <option>Asc</option>
                                    <option>Desc</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {
                     input.length > 0 ? input.map((job)=>{
                         return(
                             <div id={Math.random()}>
                                 <CardJob
                                 title = {job.title}
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