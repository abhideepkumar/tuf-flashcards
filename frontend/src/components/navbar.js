import React from 'react';
import { LinkButton } from './ui/Linkbutton';

const Navbar = () => {
    return (
        <div className="w-full ">
            <div className="flex justify-between p-3">
                <LinkButton text="Home" color="bg-black" link="" />
                <LinkButton text="Flashcards" color="bg-black" link="flashcards" />
                <LinkButton text="Admin Portal" color="bg-black" link="admin" />
            </div>
        </div>
    );
};

export default Navbar;
