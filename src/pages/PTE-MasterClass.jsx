import React from "react";
import avatar from '../assets/avatar-img.png';

const PTEMasterClass = () => {
    return (
        <>
            <main className="bg-noise-pattern">
                <section className="pt-[120px] pb-[60px] relative">
                    <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full z-10">
                        <div className="max-w-[830px]">
                            <div className="flex flex-col 2xl:gap-6 gap-3">
                                <h2 className="text-[#0A8AF2] font-bold 2xl:text-[32px] text-2xl">PTE MasterClass</h2>
                                <h1 className="font-inter font-bold main-heading 2xl:mt-2 mt-0 text-white">
                                    Missed your score! <br />
                                    Clear in 2 weeks
                                </h1>
                                <p className="md:text-xl sm:text-xl text-base font-light max-w-[760px] text-white/75">
                                    This is literally the best advice that I give every student. My strategies will teach you how to get 90 in each module. I’ve helped students out for 5+ years as a super-friendly teacher to get their desired score, now it’s your turn.
                                </p>
                                <div className="flex items-center gap-3 my-[12px]">
                                    <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full border-4 border-white/10" />
                                    <h3 className="text-base font-light text-white/60">Taught by <span className="text-white font-semibold">Abhishek</span></h3>
                                </div>
                            </div>
                            <div className="mt-[38px] flex sm:flex-nowrap flex-wrap sm:gap-[31px] gap-[16px] max-w-[600px]">
                                <a
                                    href="#"
                                    className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-secondary text-white px-3 py-3 sm:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10"
                                >
                                    Take the course
                                </a>
                                <a href="#" className="align-middle inline-flex items-center gap-[25px] justify-center text-center bg-transparent border-[1.5px] border-[#333434] text-white px-3 py-3 sm:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all duration-300 ease hover:bg-white/10">
                                    <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.6718 11.2245L0.647949 22.0227V0.42627L20.6718 11.2245Z" fill="url(#paint0_linear_814_2245)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_814_2245" x1="20.6718" y1="-1.24423" x2="18.2482" y2="25.8636" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#17FFBA" />
                                                <stop offset="0.130208" stop-color="#76B4C8" />
                                                <stop offset="1" stop-color="#2F57A7" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    Watch Free Lessons
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PTEMasterClass;