import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Welcome(props) {
    return (
        <div>
            <Header/>
            <div className="Welcome">
                Welcome!!
            </div>
            <Footer/>
        </div>
    )
}