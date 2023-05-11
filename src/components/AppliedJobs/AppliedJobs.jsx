import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';

const AppliedJobs = () => {
    const data = useLoaderData()

    let storedJobs = [];
    const storedAppliedJob = JSON.parse(localStorage.getItem('appliedJob'));
    // console.log(storedAppliedJob);
    for (let index = 0; index < storedAppliedJob?.length; index++) {
        const loader = data.filter((job) => job.id == storedAppliedJob[index]);
        storedJobs.push(loader);
    }

    let mainJob = [];
    // console.log(mainJob);
    if (storedAppliedJob) {
        // const 
        for (const id of storedAppliedJob) {
            const appliedJobs = data.find(job => job.id == id);
            console.log(appliedJobs);
            // mainJob.push(appliedJobs);
        }
        // return mainJob;
    }


    
    const [remote, setRemote] = useState(storedJobs);
	const remoteFunction = (r) => {
		const l = remote.filter((k) => k[0].Job_location == r);
		setRemote(l);
	};
	const onsiteFunction = (r) => {
		const l = remote.filter((k) => k[0].Job_location == r);
		setRemote(l);
	};


    let message ;
    if(storedJobs?.length === 0){
        message = <p className='text-5xl font-bold'>No Applied Job</p>
    }

    return (
        <div>
            <div className='bg-heading-bg py-32 rounded-lg mb-32'>
                <h1 className='text-5xl font-bold'>Applied Jobs</h1>
            </div>
            {message}
            <div>
                <div className='flex justify-end gap-4'>
                    <button onClick={ () => onsiteFunction("Onsite")} className='bg-extra px-6 py-3 text-xl font-semibold rounded-lg'>Onsite</button>
                    <button onClick={ () => remoteFunction("Remote")} className='bg-extra px-6 py-3 text-xl font-semibold rounded-lg'>Remote</button>
                </div>
                {
                    storedJobs.map(job => <SingleJob
                        key={job[0].id}
                        job={job}
                    ></SingleJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;