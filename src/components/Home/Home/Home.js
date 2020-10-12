import React from 'react';
import Appoint from '../Appoint/Appoint';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <Appoint />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;