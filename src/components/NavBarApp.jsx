import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.scss';

const NavBarApp = () => {
    return (
        <div>

            <nav>
                <div className='titleLogo'>LUXURY</div>
                <div className='navLink'>
                    <ul>
                        <li className='active'><Link to="/">Home</Link></li>
                        <li><Link to="/success">Shop</Link></li>
                        <li><Link to="/success">About</Link></li>
                        <li><Link to="/success"><i className='fa fa-instagram'></i></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBarApp;