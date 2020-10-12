import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookCard = (props) => {
    const { subject, visitingHour, totalSpace } = props.booking;

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='col-md-4 mb-5'>
            <div className="card p-3"
                style={{
                    border: '0',
                    boxShadow: '1px 1px 5px lightGray'
                }}
            >
                <div className="card-body text-center">
                    <h5 className="card-title">{subject}</h5>
                    <h6>{visitingHour}</h6>
                    <small className="text-secondary">{totalSpace} SPACE AVAILABLE</small>
                    <button onClick={openModal} className="buttonStyles mt-3">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen}
                    bookSubject={subject}
                    date={props.date} 
                    closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookCard;