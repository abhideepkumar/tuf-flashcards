import React from 'react';
import { LinkButton } from './ui/Linkbutton';

const Navbar = () => {
    return (
        <div className="w-full ">
            <div className="flex justify-between p-3">
                <LinkButton text="Home" color="bg-black" link="" />
                <LinkButton text="Attempt Quiz" color="bg-black" link="lessons" />
                <LinkButton text="Admin Portal" color="bg-black" link="admin" />
            </div>
        </div>
    );
};

export default Navbar;
