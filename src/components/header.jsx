import React, { useState } from "react";
import Textlogo from "../assets/text-logo.svg";
import Logo from "../assets/Logo.svg";
import LogoMenu from "../assets/logo-menu.svg";
import MenuIcon from "../assets/menu.svg"; // Custom menu icon
import CloseIcon from "../assets/close.svg"; // Custom close icon

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-dark text-white sm:py-[48px] py-[32px]">
            <div className="custom-container mx-auto py-0 px-4 sm:px-[38px]">
                <div className="flex items-center justify-between relative">
                    {/* Left Logo */}
                    <div className="xl:w-[40%] w-[30%] lg:flex hidden">
                        <img src={Textlogo} alt="Logo" className="w-40 md:w-auto" />
                    </div>

                    {/* Right Logo */}
                    <div className="xl:w-[20%] sm:w-[50%] w-[50%] relative logo-wrapper">
                        <img src={Logo} alt="Logo" className="xl:ml-0 ml-[-27%] desktop-logo" />
                    </div>

                    <div className="xl:w-[40%] w-[50%] flex justify-end items-center">
                        {/* Hamburger Menu - Visible on Mobile */}
                        <button
                            className="lg:hidden flex items-center justify-center p-3 w-[60px] h-[60px] bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}>
                            <img src={isOpen ? CloseIcon : MenuIcon} alt="Menu Toggle" className="w-7 h-7" />
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex justify-end items-center ">
                            <ul className="flex 2xl:gap-[77px] xl:gap-[62px] gap-[32px]">
                                <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-bold xl:text-[20px] text-[16px] border-b-2 border-transparent hover:border-white transition-all duration-300">Courses</a></li>
                                <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-bold xl:text-[20px] text-[16px] border-b-2 border-transparent hover:border-white transition-all duration-300">Testimonials</a></li>
                                <li className="text-center inline-flex items-center">
                                    <a href="#" className="text-white inline-flex items-center justify-center border border-white/25 hover:border-white px-[22px] py-[10.8px] font-bold xl:text-[18px] text-[16px] transition-all duration-300 header-btn min-w-[180px]">
                                        Get-a Callback
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Mobile Menu (Dropdown) */}
                {isOpen && (
                    <nav className="lg:hidden fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-dark z-50 sm:py-[48px] py-[32px] px-4 sm:px-[38px]">
                        <div className="flex items-center justify-end">
                            <button className="lg:hidden flex items-center justify-center p-3 w-[60px] h-[60px] bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer shadow-[0px_4px_0px_#000000]" onClick={() => setIsOpen(!isOpen)}>
                                <img src={isOpen ? CloseIcon : MenuIcon} alt="CloseIcon" className="w-7 h-7" />
                            </button>
                        </div>

                        <ul className="flex flex-col justify-center items-center gap-[34px] relative">
                            <div className="menu-ellipse"></div>
                            <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-bold text-[32px] border-b-2 border-transparent hover:border-white transition-all duration-300">Courses</a></li>
                            <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-bold text-[32px] border-b-2 border-transparent hover:border-white transition-all duration-300">Testimonials</a></li>
                            <li className="text-center inline-flex items-center"><a href="#" className="text-white inline-flex items-center justify-center font-medium text-[32px] border-b-2 border-transparent hover:border-white transition-all duration-300 [text-shadow:0px_4px_0px_#000000]">Contact us</a></li>
                        </ul>

                        <div className="flex flex-col justify-center items-center py-[70px] gap-1">
                            <a href="mailto:info@languageking.com.au" className="text-[#9D9B9B] font-medium text-base">info@languageking.com.au</a>
                            <span className="text-white font-medium text-[12px] [text-shadow:0_0_16px_rgba(255,255,255,0.77)]">Copyright @ 2025 Language King</span>
                        </div>

                        <img src={LogoMenu} alt="Logo" className="max-w-[130px] mx-auto" />
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
