import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-container my-5 py-5">
            <div className="container">
                <div className="contact-header text-center text-white mb-5">
<h5 className='text-info text-uppercase'>Contact us</h5>
<h1>Always Connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email Address *"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject *"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Your Message *" cols='30' rows='10'></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type='button' className="buttonStyles">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;