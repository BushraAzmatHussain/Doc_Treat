import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/7Xpw2cV/aditya-romansa-5zp0jym2w9-M-unsplash.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-blue-500 py-4">Emergency?</h1>
                    <h1 className="text-5xl font-bold ">Find Nearest Medical Facility Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-cyan-500 font-bold text-white hover:bg-blue-700 bg-gradient-to-r from-cyan-500 to-blue-500 ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;