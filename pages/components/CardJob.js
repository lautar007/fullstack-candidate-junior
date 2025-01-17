import React from "react";
import { useState } from 'react';
import SubCardJob from "./SubCardJob";

export default function CardJob ({title, company, itemsCount, jobs }){
    const[drop, setDrop] = useState ({
        action: false, jobs:[]
    })

    function handleCompany (e){
        setDrop({
            action: !drop.action,
            jobs: jobs
        })
    }

return(
    <div>
        {
            company ?
            <div id="header-company">
            <h3>{company.toUpperCase().slice(0, 2)}</h3>
            <button className="btn-job-comp" onClick={(e)=> handleCompany(e)}>{itemsCount} jobs for {company}</button>
            </div>
            :
            null
        }
        <div>
            {
                drop.action === true ?
                drop.jobs.map(job=>{
                    return (
                        <div key={Math.random()}>
                            <SubCardJob
                            title = {job.job_title}
                            type = {job.job_type}
                            salary = {job.salary_range}
                            city = {job.city}
                            created = {job.created.slice(0, 10)}
                            department = {job.department}
                            hours = {job.hours}
                            shift = {job.work_schedule}
                            summary = {job.description}
                            />
                        </div>
                    )
                })
                :
                null
            }
        </div>
    </div>
)
}