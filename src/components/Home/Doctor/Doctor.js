import React from 'react';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Doctor = ({ doctor }) => {
    return (
        <div className='col-md-4 col-sm-6 text-center'>
            {
                doctor.image ? <img style={{ height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`} alt=""/>
                :
                <img style={{ height: '200px'}} className='img-fluid mb-3' src={`https://guarded-mesa-64786.herokuapp.com/${doctor.img}`} alt=""/>
            }
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />+8801748008121</p>
        </div>
    );
};

export default Doctor;