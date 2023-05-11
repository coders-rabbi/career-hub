import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faCalendarDay, faDollar } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const [job, setJob] = useState([])
    const dynamic = useParams()
    const routeId = dynamic.jobId;
    

   

    // const handleAppliedJob = (id) => {
    //     let AppliedJob ={};
    //     const previousAppliedJob = JSON.parse(localStorage.getItem("AppliedJob"));
    //     if (previousAppliedJob) {
    //         toast("Already applied this job");
    //     }
    //     else {
    //         localStorage.setItem("AppliedJob",id)
    //     }
    // }

    const handleApplyJob = (id) => {
        const jobArr = [];
        const storedAppliedJob = localStorage.getItem("appliedJob");
        if (!storedAppliedJob) {
            jobArr.push(id);
            localStorage.setItem("appliedJob", JSON.stringify(jobArr));
        } 
        else {
            const storedData = JSON.parse(localStorage.getItem("appliedJob"));
            const isExist = storedData.find((data) => data == id);
            if (!isExist) {
                const newData = [...storedData, id];
                localStorage.setItem("appliedJob", JSON.stringify(newData));
            } 
            toast("Job Apply Successfully");
        }
    }



    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])


    const details = job.find(jb => jb.id == routeId);
    console.log(details);

    // console.log(details?.id);

    return (
        <div>
            <div className='text-4xl font-bold bg-bg-primary h-60 flex  items-center  justify-center'>
                <h1>Job Details</h1>
            </div>
            <div className='flex gap-4 mt-10'>
                <div className='text-left w-2/3'>
                    <p className='mb-9'><span className='text-xl font-bold'>Job Description:</span> <span className='text-secondary'>{details?.job_description}</span></p>

                    <p className='mb-9'><span className='text-xl font-bold'>Job Responsibility:</span> <span className='text-secondary'>{details?.job_responsibility}</span></p>

                    <p className='mb-9'><span className='text-xl font-bold'>Education Requirments:
                        <br />
                        <br />
                    </span> <span className='text-secondary'>{details?.education}</span></p>

                    <p className='mb-9'><span className='text-xl font-bold'>Experiance:
                        <br />
                        <br />
                    </span> <span className='text-secondary'>{details?.experiance}</span></p>
                </div>
                <div className=' w-1/3'>
                    <div className='bg-extra p-5 text-left rounded-lg divide-y'>
                        <div className='mb-4'>
                            <h1 className='text-xl font-bold'>Job Details</h1>
                        </div>
                        <div className='mb-4'>
                            <p className='text-xl text-gray-600 mt-2'>
                                <FontAwesomeIcon className='mr-4 text-xl text-bg-secondary' icon={faDollar} />
                                Salary: {details?.salary}</p>
                            <p className='text-xl text-gray-600 mt-2'>
                                <FontAwesomeIcon className='mr-4 text-xl text-bg-secondary' icon={faCalendarDay} />
                                Job Title: {details?.job_title}</p>
                            <h1 className='text-xl text-gray-600 mt-4'>Contact Information</h1>
                        </div>

                        <div>
                            <p className='text-xl text-gray-600 mt-4'>
                                <FontAwesomeIcon className='mr-4 text-xl text-bg-secondary' icon={faPhone} />
                                Phone: {details?.applicant_phone}</p>
                            <p className='text-xl text-gray-600 mt-2'>
                                <FontAwesomeIcon className='mr-4 text-xl text-bg-secondary' icon={faEnvelope} />
                                Email: {details?.applicant_email}</p>
                            <p className='text-xl text-gray-600 mt-2'>
                                <FontAwesomeIcon className='mr-4 text-xl text-bg-secondary' icon={faLocationDot} />
                                Location: {details?.applicant_location}</p>
                            <div className='flex justify-center'>
                                <button onClick={() => handleApplyJob(details?.id)} className='text-xl bg-gradient-to-r from-bg-tertiary to-bg-extra py-2 px-32 rounded-md text-white font-semibold mt-6 w- text-center'>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;