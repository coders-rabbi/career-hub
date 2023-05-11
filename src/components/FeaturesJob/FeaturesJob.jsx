import React, { useState } from 'react';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';

const FeaturesJob = ({ data }) => {

    const jobs = useLoaderData();
    let AllJobs = data;
    const [state, setState] = useState(true);
    if (state) {
        AllJobs = data.slice(0, 4);
    }
    const seeMore = (i) => {
        setState(i);
        if (state) {
            AllJobs = jobs;
        }
        return AllJobs;
    };

    return (
        <div className='mx-auto mt-28'>
            <h1 className='text-5xl font-bold'>Featured Jobs</h1>
            <div className='mt-20 grid md:grid-cols-2 gap-9 mx-auto'>
                {
                    AllJobs.map(job => <Jobs
                        key={job.id}
                        job={job}
                    ></Jobs>)
                }
            </div>

            <button
                className=' text-white text-xl font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-bg-tertiary to-bg-extra mb-10 mt-10'
                onClick={() => seeMore(false)}>
                See All Jobs
            </button>
        </div>
    );
};

export default FeaturesJob;

