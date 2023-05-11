import React from 'react';

const SingleCategory = ({ job }) => {
    const { Category_logo, Category_name, Jobs_available } = job;
    return (
        <div className='text-left bg-bg-primary p-8 rounded-xl mt-10'>
            <img className='w-40 h-40' src={Category_logo} alt="" />
            <h1 className='text-2xl font-semibold mt-10'>{Category_name}</h1>
            <p className='text-xl text-secondary mt-5'>{Jobs_available}</p>
        </div>

    );
};

export default SingleCategory;