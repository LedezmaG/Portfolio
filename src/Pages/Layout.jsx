import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';

function Layout(props) {
    return(
        <div className="row">
            <div className="col-2 px-0 d-none d-md-block">
                <Sidebar />
            </div>
            <div className="col-10 px-0">
                <Header />
                <div className="container" id="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout