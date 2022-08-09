import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <p className='text-center'> Copyright ©{year} Managnment</p>
        </div>
    );
};

export default Footer;