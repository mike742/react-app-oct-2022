import React, { Component } from 'react';

function Navbar(props) {
    console.log('this.props', props);
    return (  
        <nav className='navbar navbar-light bg-light'>
            <div className='container-fluid'>
                <a href="#" className='navbar-brand'>
                    Total items: {props.totalCounters }
                </a>

            </div>
        </nav>
    );
}

export default Navbar;