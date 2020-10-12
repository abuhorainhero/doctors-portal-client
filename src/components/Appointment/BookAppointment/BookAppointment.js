import React from 'react';
import BookCard from '../BookCard/BookCard';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:00 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '12:00 PM - 1:00 PM',
        totalSpace: 10
    },
    {
        id: 4,
        subject: 'Cavity protection',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 PM - 9:00 PM',
        totalSpace: 10
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {
    return (
        <section className="container">
                <h2 className='text-center mb-5 textBrand'>Available Appointment on {date.toDateString()}</h2>
                <div className="row">
                    {
                        bookingData.map(data => <BookCard key={data.id} date={date} booking={data}></BookCard>)
                    }
                </div>
        </section>
    );
};

export default BookAppointment;