import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';

const Jobs = ({ job }) => {
    const { id,img, title, sub_title, work_option_1, work_option_2, location, salary } = job;
    // const navigate = useNavigate()
    return (
        <div className='text-left border-solid border-2 p-6 rounded-lg'>
            <img className='w-32' src={img} alt="" />
            <h1 className='text-3xl font-bold'>{title}</h1>
            <h3 className='text-xl text-secondary mt-2'>{sub_title}</h3>
            <div className='flex gap-4 mt-4'>
                <p className='text-xl border-solid border-2 border-bg-tertiary py-1 px-2 rounded'>{work_option_1}</p>
                <p className='text-xl border-solid border-2 border-bg-tertiary py-1 px-2 rounded'>{work_option_2}</p>
            </div>
            <div className='flex gap-28 mt-4'>
                <p className='text-xl text-secondary'>
                    <FontAwesomeIcon className='me-3' icon={faLocationDot} />
                    {location}
                </p>
                <p className='text-xl text-secondary'>
                <FontAwesomeIcon className='me-3' icon={faCircleDollarToSlot} />
                    Salary: {salary}</p>
            </div>
            <Link to={`/jobDetails/${id}`}>
                <button className='text-xl bg-gradient-to-r from-bg-tertiary to-bg-extra py-2 px-4 rounded-md text-white font-semibold mt-6'>Show More Details</button>
            </Link>
        </div>
    );
};

export default Jobs;