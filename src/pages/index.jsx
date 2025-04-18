import React, { useState } from "react";
import CourseImg1 from '../assets/course-img1.png';
import CourseImg2 from '../assets/course-img2.png';
import CourseImg3 from '../assets/course-img3.png';
import avatar from '../assets/avatar-img.png';
import VideoImg1 from '../assets/course-video-img-1.png';
import VideoImg2 from '../assets/course-video-img-2.png';
import VideoImg3 from '../assets/course-video-img-3.png';
import VideoImg4 from '../assets/course-video-img-4.png';
import Icon1 from '../assets/icons/video-icon.svg';
import Icon2 from '../assets/icons/download-icon.svg';
import Icon3 from '../assets/icons/rec-icon.svg';
import Icon4 from '../assets/icons/ai-icon.svg';
import Icon5 from '../assets/icons/whatsapp-icon.svg';
import Icon6 from '../assets/icons/live-icon.svg';
import Icon7 from '../assets/icons/badge-icon.svg';
// import CallbackForm from "../components/callback-popup";

const Home = () => {

    // const [isCallbackOpen, setIsCallbackOpen] = useState(false);

    // const openCallback = () => {
    //     setIsCallbackOpen(true);
    // };

    // const closeCallback = () => {
    //     setIsCallbackOpen(false);
    // };

    return (
        <main className="bg-dark">
            <section className="banner-wrapper lg:pt-[150px] lg:pb-[230px] md:pt-[100px] md:pb-[100px] pt-[90px] pb-[50px]">
                <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full">
                    <div className="max-w-[830px]">
                        <div className="flex flex-col sm:gap-6 gap-3">
                            <h2 className="text-gradient-primary font-bold md:text-[32px] text-2xl"># Australia’s No.1</h2>
                            <h1 className="font-inter font-bold main-heading sm:mt-2 mt-0 text-white">
                                PTE, IELTS & NAATI CCL  Coaching Institute
                            </h1>
                            <p className="md:text-xl sm:text-xl text-base font-light max-w-[650px] text-white/75">
                                Join 10,000+ satisfied students in achieving their desired Test Scores.
                                Helped many students, now it's your turn!
                            </p>
                        </div>
                        <div className="mt-[48px] flex sm:flex-nowrap flex-wrap sm:gap-[31px] gap-[16px] max-w-[670px]">
                            <a
                                href="#"
                                className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-primary text-black px-3 py-3 sm:w-[50%] w-full font-bold sm:text-xl text-lg relative z-10"
                            >
                                Get a Callback
                            </a>
                            <a href="#" className="align-middle inline-flex items-center justify-center text-center bg-transparent border-2 border-Cadmium-Orange text-white px-3 py-3 sm:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all duration-300 ease hover:bg-white/10">
                                Watch Free Lessons
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* {isCallbackOpen && <CallbackForm />} */}

            <section className="mb-8">
                <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] z-50 ">
                    <div className="border-t border-[#252525]">
                        <h2 className="text-white font-bold sm:text-[29.39px] text-2xl relative  inline-block z-10 my-[38px] stroke-heading">Our Courses</h2>
                    </div>
                    <div className="flex flex-col gap-[38px] bg-black">
                        <div className="grid items-center course-drop-shadow lg:grid-cols-2 gap-[38px] bg-course-orange-bg hover:bg-course-orange-hover-bg transition-all duration-300 ease border border-white/10 group px-4 sm:px-6 py-4 sm:py-6 relative">
                            <div className="ribbon ribbon-top-left z-10"><span>New course!</span></div>
                            <div className="overflow-hidden relative z-0 max-h-[450px]">
                                <img src={CourseImg1} alt="CourseImg1" className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]" />
                            </div>
                            <div className="lg:py-[16px]">
                                <h2 className="text-gradient-primary font-semibold md:text-[24px] inline-block sm:text-2xl text-lg">NAATI CCL <span className="text-white">Fast Track</span> Course</h2>
                                <h2 className="font-semibold xl:text-[40px] md:text-[32px] sm:text-[30px] text-2xl text-white xl:leading-[2.8rem] my-[8px]">Need to clear the test in 3 days, we’ve got you covered!</h2>
                                <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-2">
                                    This is a super fast-paced course. It’s geared for speed, designed for those who need to clear the test on urgent basis, and do whatever it takes to clear it.
                                </p>
                                <div className="flex items-center gap-3">
                                    <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full border-4 border-white/10" />
                                    <h3 className="text-base font-light text-white/60">Taught by <span className="text-white font-semibold">Abhishek</span></h3>
                                </div>
                                <div className="sm:mt-[12px] mt-[12px] flex lg:flex-nowrap flex-wrap lg:gap-[31px] gap-[16px] lg:max-w-[800px]">
                                    <a href="#" className="primary-btn bg-gradient-primary inline-flex justify-center items-center text-center text-white px-3 py-3 lg:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10">
                                        Take the Course
                                    </a>
                                    <a href="#" className="text-center bg-transparent border-2 border-white/20 inline-flex justify-center items-center text-white px-3 py-3 lg:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all duration-300 ease hover:bg-white/10">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid items-center course-drop-shadow lg:grid-cols-2 gap-[38px] bg-course-blue-bg hover:bg-course-blue-hover-bg transition-all duration-300 ease border border-white/10 group px-4 sm:px-6 py-4 sm:py-6 relative">
                            <div className="overflow-hidden relative z-0 max-h-[450px]">
                                <img src={CourseImg2} alt="CourseIm21" className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]" />
                            </div>
                            <div className="lg:py-[16px]">
                                <h2 className="text-gradient-secondary font-semibold md:text-[24px] inline-block sm:text-2xl text-lg">PTE Master Class</h2>
                                <h2 className="font-semibold xl:text-[40px] md:text-[32px] sm:text-[30px] text-2xl text-white xl:leading-[2.8rem] my-[8px]">Missed your score by a few marks! Clear in 2 weeks</h2>
                                <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-2">
                                    This is literally the best advice that I give every student. My strategies will teach you how to get 90 in each module. I’ve helped students out for 5+ years as a super-friendly teacher to get their desired score, now it’s your turn.
                                </p>
                                <div className="flex items-center gap-3">
                                    <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full border-4 border-white/10" />
                                    <h3 className="text-base font-light text-white/60">Taught by <span className="text-white font-semibold">Abhishek</span></h3>
                                </div>
                                <div className="sm:mt-[12px] mt-[12px] flex lg:flex-nowrap flex-wrap lg:gap-[31px] gap-[16px] lg:max-w-[800px]">
                                    <a href="#" className="primary-btn bg-gradient-secondary leading-[28px] inline-flex justify-center items-center text-center text-white px-3 py-3 lg:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10">
                                        Take the Course
                                    </a>
                                    <a href="#" className="text-center bg-transparent border-2 border-white/20 inline-flex justify-center items-center text-white px-3 py-3 lg:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all duration-300 ease hover:bg-white/10">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid items-center course-drop-shadow lg:grid-cols-2 gap-[38px] bg-course-black-bg hover:bg-course-black-hover-bg transition-all duration-300 ease border border-white/10 group px-4 sm:px-6 py-4 sm:py-6 relative">
                            <div className="overflow-hidden relative z-0 max-h-[450px]">
                                <img src={CourseImg3} alt="CourseImg3" className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]" />
                            </div>
                            <div className="lg:py-[16px]">
                                <h2 className="dark-text-custom font-semibold md:text-[26px] block sm:text-2xl text-lg">PTE Master Handbook</h2>
                                <h2 className="font-semibold xl:text-[40px] md:text-[32px] sm:text-[30px] text-2xl text-white xl:leading-[2.8rem] my-[8px]">PTE 79+ in 7 days
                                    Crack PTE in 1  attempt</h2>
                                <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-2">
                                    Learn exactly what students did to achieve their desired band. This book explains the exam structure, target scores, key tasks to focus on, and the 7-day strategy you need to follow to go from 5 to 8 each as quickly as possible.
                                </p>
                                <div className="flex items-center gap-3">
                                    <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full border-4 border-white/10" />
                                    <h3 className="text-base font-light text-white/60">Taught by <span className="text-white font-semibold">Abhishek</span></h3>
                                </div>
                                <div className="sm:mt-[12px] mt-[12px] flex lg:flex-nowrap flex-wrap lg:gap-[31px] gap-[16px] lg:max-w-[800px]">
                                    <a href="#" className="primary-btn bg-gradient-dark leading-[28px] inline-flex justify-center items-center text-center text-white px-3 py-3 lg:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10">
                                        Free E-Book
                                    </a>
                                    <a href="#" className="text-center bg-transparent border-2 border-white/20 inline-flex justify-center items-center text-white px-3 py-3 lg:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all duration-300 ease hover:bg-white/10">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-[40px]">
                <div className="custom-container mx-auto py-0 px-4 sm:px-[32px]">
                    <div className="bg-[#252525] px-4 sm:px-8 ">
                        <div className="sm:py-10 py-7">
                            <h2 className="text-2xl font-bold text-white text-left mb-4">Try these FREE video lessons</h2>

                            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[28px]">
                                <div className="relative">
                                    <div className="border-b-[8px] border-[#A6A6A6] mb-3 shadow-[0px_5.03162px_0px_#000000]">
                                        <img src={VideoImg1} alt="image" className="w-full" />
                                    </div>
                                    <h3 className="text-white font-bold sm:text-xl text-lg sm:leading-[1.3] leading-[28px]">Impact of Read Aloud on Reading Module</h3>
                                    <span className="text-white/60 mt-[6px] block text-base font-semibold">PTE MasterClass</span>
                                </div>
                                <div className="relative">
                                    <div className="border-b-[8px] border-[#A6A6A6] mb-3 shadow-[0px_5.03162px_0px_#000000]">
                                        <img src={VideoImg2} alt="image" className="w-full" />
                                    </div>
                                    <h3 className="text-white font-bold sm:text-xl text-lg sm:leading-[1.3] leading-[28px]">Poor score in Write Essay</h3>
                                    <span className="text-white/60 mt-[6px] block text-base font-semibold">PTE MasterClass</span>
                                </div>
                                <div className="relative">
                                    <div className="border-b-[8px] border-[#A6A6A6] mb-3 shadow-[0px_5.03162px_0px_#000000]">
                                        <img src={VideoImg3} alt="image" className="w-full" />
                                    </div>
                                    <h3 className="text-white font-bold sm:text-xl text-lg sm:leading-[1.3] leading-[28px]">Dialogue vs Segment</h3>
                                    <span className="text-white/60 mt-[6px] block text-base font-semibold">PTE MasterClass</span>
                                </div>
                                <div className="relative">
                                    <div className="border-b-[8px] border-[#A6A6A6] mb-3 shadow-[0px_5.03162px_0px_#000000]">
                                        <img src={VideoImg4} alt="image" className="w-full" />
                                    </div>
                                    <h3 className="text-white font-bold sm:text-xl text-lg sm:leading-[1.3] leading-[28px]">PTE vs IELTS</h3>
                                    <span className="text-white/60 mt-[6px] block text-base font-semibold">PTE MasterClass</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sm:pb-8 pb-2">
                <div className="custom-container mx-auto py-0 px-4 sm:px-[32px]">
                    <div className="bg-black1 flex flex-col sm:gap-[57px] gap-[42px] sm:leading-[auto] leading-[40px] border border-white/10 group md:px-[38px] px-6 md:pt-[70px] md:pb-[85px] pt-6 pb-7  relative">
                        <h2 className="lg:text-[42px] sm:text-[40px] text-[32px] leading-[1.2] font-bold text-white text-left">What’s included in every Course</h2>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-around gap-x-[20px] gap-y-[60px] sm:pe-[45px]">
                            <div className="text-center">
                                <img src={Icon1} alt="Icon" className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]" />
                                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">Video Lectures- <br /> Basic to advance</span>
                            </div>
                            <div className="text-center">
                                <img src={Icon2} alt="Icon" className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]" />
                                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">Study Material - Templates,
                                    resources, and prediction file</span>
                            </div>
                            <div className="text-center">
                                <img src={Icon3} alt="Icon" className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]" />
                                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">Class Recordings - <br />
                                    Video library of past classes</span>
                            </div>
                            <div className="text-center">
                                <img src={Icon4} alt="Icon" className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]" />
                                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">AI Portal - Mock Test <br />
                                    and 5000+ exam questions</span>
                            </div>
                            <div className="text-center">
                                <img src={Icon5} alt="Icon" className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]" />
                                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">Feedback - <br />
                                    Ask an Expert</span>
                            </div>
                            <div className="text-center">
                                <img src={Icon6} alt="Icon" className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]" />
                                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">Live Classes - <br />
                                    Learn with other students</span>
                            </div>
                            <div className="text-center">
                                <img src={Icon7} alt="Icon" className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]" />
                                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">Expert Trainers -<br />
                                    Learn from certified trainers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
