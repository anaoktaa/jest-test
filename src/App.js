import React from 'react';
import reactlogo from './assets/images/react-logo.png';
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <h1>Welcome to React Application</h1>
            <img src={reactlogo} alt=''/>
        </div>
    );
}

export default App;