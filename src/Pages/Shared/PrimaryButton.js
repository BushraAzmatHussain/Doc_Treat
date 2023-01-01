import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary bg-cyan-500 font-bold text-white hover:bg-blue-700 bg-gradient-to-r from-cyan-500 to-blue-500 ">{children}</button>
            
        </div>
    );
};

export default PrimaryButton;