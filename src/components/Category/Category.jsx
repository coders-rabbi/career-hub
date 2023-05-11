import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('categoryData.json')
            .then((res) => res.json())
            .then((data) => setCategory(data));
    }, []);
    return (
        <div>
            <section className='mt-28'>
                <h1 className='text-5xl font-bold'>Job Category List</h1>
                <p className='text-xl text-secondary mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid md:grid-cols-4 gap-9'>
                    {category.map((job) => (
                        <SingleCategory
                            key={job.id}
                            job={job}
                        ></SingleCategory>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Category;