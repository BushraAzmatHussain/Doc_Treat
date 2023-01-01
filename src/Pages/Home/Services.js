import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Preventive services',
            description: 'Many primary care doctors provide health promotion education to help prevent illnesses or diseases.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Disease diagnosis',
            description: 'Primary care doctors can do physical exams or run lab tests to diagnose diseases or other illnesses.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Annual checkup',
            description: 'A primary care doctor can complete yearly checkups, which are important, especially as we get older.',
            img: whitening
        },
    ];
    return (
        <div className='my-28'>
            <h1 className='text-cyan-600 font-bold text-2xl text-center'>OUR SERVICES</h1>
            <div className='my-12 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;