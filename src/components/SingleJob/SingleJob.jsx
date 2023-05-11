import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const SingleJob = ({ job }) => {
    const { id, img, title, sub_title, work_option_1, work_option_2, location, salary } = job[0];
    
    return (
        <div className='flex justify-between border p-6 rounded-lg mt-4 items-center'>
            <img className='w-60 h-48 rounded-lg' src={img} alt="" />
            <div>
                <div className='text-left '>
                    <h1 className='text-2xl font-bold text-primary'>{title}</h1>
                    <h3 className='text-xl text-secondary mt-2'>{sub_title}</h3>
                    <div className='flex justify-between mt-2'>
                        <p className='text-xl border border-bg-tertiary py-1 px-4 rounded-lg font-semibold'>{work_option_1}</p>
                        <p className='text-xl border border-bg-tertiary py-1 px-4 rounded-lg font-semibold'>{work_option_2}</p>
                    </div>
                    <div className='flex gap-6 mt-2'>
                        <p className='text-xl font-semibold text-secondary'>
                            <FontAwesomeIcon className='mr-3' icon={faLocationDot} />
                            {location}
                        </p>
                        <p className='text-xl font-semibold text-secondary'>
                            <FontAwesomeIcon className='mr-1' icon={faDollar} />
                            Salary:{salary}
                        </p>
                    </div>
                </div>
            </div>
            <Link to={`../jobDetails/${id}`}>
                <button className='mt-10 text-white text-xl font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-bg-tertiary to-bg-extra'>View Details</button>
            </Link>
        </div>
    );
};

export default SingleJob;