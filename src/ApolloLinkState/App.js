import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <div>
            <Sidebar />
            <Header />
            <ul>
                <li>Main content 1</li>
                <li>Main content 2</li>
                <li>Main content 3</li>
            </ul>
        </div>
    )
};

export default App;