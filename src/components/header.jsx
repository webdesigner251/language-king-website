import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between items-center">
                <div className="font-bold text-xl">Language King</div>
                <ul className="flex space-x-4">
                    <li>Courses</li>
                    <li>Testimonials</li>
                    <li>Get a Callback</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
