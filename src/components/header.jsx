import React, { useState } from "react";
import Textlogo from "../assets/text-logo.svg";
import Logo from "../assets/Logo.svg";
import LogoMenu from "../assets/logo-menu.svg";
import MenuIcon from "../assets/menu.svg"; // Custom menu icon
import CloseIcon from "../assets/close.svg"; // Custom close icon

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black text-white sm:pt-2 sm:pb-4">
            <div className="custom-container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Left Logo */}
                    <div className="xl:w-[40%] w-[30%] lg:flex hidden">
                        <img src={Textlogo} alt="Logo" className="w-40 md:w-auto" />
                    </div>

                    {/* Right Logo */}
                    <div className="xl:w-[20%] sm:w-[30%] w-[50%] overflow-hidden">
                        <img src={Logo} alt="Logo" className="xl:ml-0 ml-[-27%]" />
                    </div>

                    <div className="xl:w-[40%] w-[50%] flex justify-end items-center">
                        {/* Hamburger Menu - Visible on Mobile */}
                        <button
                            className="lg:hidden flex items-center justify-center p-3 bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}>
                            <img src={isOpen ? CloseIcon : MenuIcon} alt="Menu Toggle" className="w-8 h-8" />
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex justify-end items-center ">
                            <ul className="flex gap-[60px]">
                                <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-bold text-[20px] border-b-2 border-transparent hover:border-white transition-all duration-300">Courses</a></li>
                                <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-bold text-[20px] border-b-2 border-transparent hover:border-white transition-all duration-300">Testimonials</a></li>
                                <li className="text-center inline-flex items-center">
                                    <a href="#" className="text-white inline-flex items-center justify-center border border-white/25 hover:border-white px-6 py-3 font-bold text-[18px] transition-all duration-300">
                                        Get a Callback
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                </div>

                {/* Mobile Menu (Dropdown) */}
                {isOpen && (
                    <nav className="lg:hidden fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray7 z-50 py-[45px] px-4">
                        <div className="flex items-center justify-end">
                            <button className="flex items-center justify-center p-3 bg-chinese-Black border border-davys-Grey cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                <img src={isOpen ? CloseIcon : MenuIcon} alt="CloseIcon" className="w-5" />
                            </button>
                        </div>
                        <ul className="flex flex-col justify-center items-center gap-[34px]">
                            <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-bold text-[32px] border-b-2 border-transparent hover:border-white transition-all duration-300">Courses</a></li>
                            <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-bold text-[32px] border-b-2 border-transparent hover:border-white transition-all duration-300">Testimonials</a></li>
                            <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-bold text-[32px] border-b-2 border-transparent hover:border-white transition-all duration-300">Contact us</a></li>
                        </ul>

                        <div className="flex flex-col justify-center items-center py-[70px] gap-1">
                            <a href="mailto:info@languageking.com.au" className="text-[#9D9B9B] font-medium text-base">info@languageking.com.au</a>
                            <span className="text-white font-medium text-[12px]">Copyright @ 2025 Language King</span>
                        </div>

                        <img src={LogoMenu} alt="Logo" className="max-w-[130px] mx-auto" />
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
