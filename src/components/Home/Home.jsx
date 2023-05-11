import React from 'react';
import Category from '../Category/Category';
import photo from '../../image/baby.png'
import FeaturesJob from '../FeaturesJob/FeaturesJob';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();

 

    return (
        <div className=''>
            <div className='felx justify-center'>
                <div className=' grid md:grid-cols-2 gap-5 mt-9 bg-gray-100  p-8 pb-0 items-center'>
                    <div className='text-left'>
                        <h1 className='text-5xl font-bold leading-tight mb-6'>One Step <br /> Closer To Your <br /><small className='text-5xl text-gradient-to-r from-bg-tertiary to-bg-extra'>Dream Job</small> </h1>
                        <p className='text-secondary mb-5 leading-7'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className='text-white bg-gradient-to-r from-bg-tertiary to-bg-extra py-3 px-6 rounded-xl font-semibold text-xl'>Get Started</button>
                    </div>
                    <div className='flex justify-center bg-gradient-to-r from-bg-tertiary to-bg-extra rounded-full'>
                        <img className='w-3/4' src={photo} alt="" />
                    </div>

                </div>
            </div>
            <Category></Category>
            <div>
                <FeaturesJob
                    data={data}
                ></FeaturesJob>
            </div>
        </div>
    );
};

export default Home;