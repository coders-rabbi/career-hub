import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='md:flex justify-around items-center mt-5'>
            <h1 className='text-3xl font-bold'>CareerHub</h1>
           <div className='text-purple-700 gap-2'>
            <Link to="/">Home</Link>
            <Link to="/statistic">Statistic</Link>
            <Link to="/appliedJobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
           </div>
           <button className='text-white text-xl font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-bg-tertiary to-bg-extra'>Start Applying</button>
        </nav>
    );
};

export default Header;