import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header flex justify-between p-4 lg:px-12 lg:py-5 bg-teal-50">
                <div className="navbar-brand">
                    <h1 className='text-3xl font-semibold text-blue-800'>Knowledge Hub</h1>
                </div>
                <div className="user-profile w-10">
                    <img className='rounded-full' src="https://images.unsplash.com/photo-1572965733194-784e4b4efa45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;