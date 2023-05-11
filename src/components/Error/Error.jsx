import React from 'react';
import Lottie from "lottie-react";
import error from "../../assets/55873-404-error-page.json"

const Error = () => {
    return (
        <div>
            <Lottie className='w-8/12 mx-auto mt-20' animationData={error} loop={true} />;
        </div>
    );
};

export default Error;