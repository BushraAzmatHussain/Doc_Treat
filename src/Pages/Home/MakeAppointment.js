import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/1b3hg90/mufid-majnun-o-I20eh-IGNd4-unsplash.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-12'>
                        <h3 className=' text-2xl text-cyan-500 font-bold py-3'>Appointment</h3>
                        <h2 className='text-4xl font-mono py-3'>Make an Appointment</h2>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam a veritatis. Magni iure est, repellendus a similique perspiciatis possimus velit quis ducimus, sit, ipsum id impedit sunt? Optio nostrum assumenda maiores, sed reiciendis repellat. Tenetur provident numquam, dolorem inventore ex consequuntur cum dolore aut est? Laborum nulla provident repellendus?</p>
                        <div className='flex justify-end'>
                        <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;