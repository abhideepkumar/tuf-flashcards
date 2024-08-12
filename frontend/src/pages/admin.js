import React from 'react';
import AllCards from '../components/allCards';
import AddCards from '../components/addCards';

const Admin = () => {
    return (
        <div className='p-5'>
            <p>Welcome!</p>
            <p>This is the Admin Portal, Control the Flashcards</p>
            <AllCards/>
            <AddCards/>
        </div>
    );
};

export default Admin;
