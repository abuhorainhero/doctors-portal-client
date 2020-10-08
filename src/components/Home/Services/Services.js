import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cabity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section>
            <div className='text-center'>
                <h5 className='mt-5 mb-3' style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetails  service={service}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;