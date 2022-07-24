import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='mt-5 footer-part'>
            <p> Copyright ©{year} Managnment</p>
        </div>
    );
};

export default Footer;