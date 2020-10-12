import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-white">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link mr-5">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/dashboard/allPatients' className="nav-link mr-5" href="#">AllPatients</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/dashboard' className="nav-link mr-5" >Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/dashboard' className="nav-link mr-5 text-white" >Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" href="#">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" href="#">Contact us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;