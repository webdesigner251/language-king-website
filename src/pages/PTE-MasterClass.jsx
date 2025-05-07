import React from "react";
import avatar from '../assets/avatar-img.png';

const PTEMasterClass = () => {
    return (
        <>
            <main className="bg-dark">
                <section className="pt-[120px] pb-[60px] relative">
                    <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full z-10">
                        <div className="max-w-[830px]">
                            <div className="flex flex-col 2xl:gap-6 gap-3">
                                <h2 className="text-[#0A8AF2] font-bold 2xl:text-[32px] text-2xl">PTE MasterClass</h2>
                                <h1 className="font-inter font-bold main-heading 2xl:mt-2 mt-0 text-white">
                                    Missed your score! <br />
                                    Clear in 2 weeks
                                </h1>
                                <p className="md:text-xl sm:text-xl text-base font-light max-w-[650px] text-white/75">
                                    This is literally the best advice that I give every student. My strategies will teach you how to get 90 in each module. I’ve helped students out for 5+ years as a super-friendly teacher to get their desired score, now it’s your turn.
                                </p>
                                <div className="flex items-center gap-3 my-[12px]">
                                    <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full border-4 border-white/10" />
                                    <h3 className="text-base font-light text-white/60">Taught by <span className="text-white font-semibold">Abhishek</span></h3>
                                </div>
                            </div>
                            <div className="mt-[48px] flex sm:flex-nowrap flex-wrap sm:gap-[31px] gap-[16px] max-w-[670px]">
                                <a
                                    href="#"
                                    className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-primary text-black px-3 py-3 sm:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10"
                                >
                                    Get a Callback
                                </a>
                                <a href="#" className="align-middle inline-flex items-center gap-[25px] justify-center text-center bg-transparent border-2 border-Cadmium-Orange text-white px-3 py-3 sm:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all duration-300 ease hover:bg-white/10">
                                    <svg width="20" height="20" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.93 11.9998L0 23.9253V0.0742188L21.93 11.9998Z" fill="url(#paint0_linear_702_4078)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_702_4078" x1="0" y1="11.9997" x2="21.93" y2="11.9997" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#D7FF53" />
                                                <stop offset="1" stopColor="#FD4F2B" />
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