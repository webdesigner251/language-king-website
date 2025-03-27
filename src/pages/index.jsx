import React from "react";
import CourseImg1 from '../assets/course-img1.png';
import CourseImg2 from '../assets/course-img2.png';
import CourseImg3 from '../assets/course-img3.png';
import avatar from '../assets/avatar-img.png';

const Home = () => {
    return (
        <main>
            <section className="bg-black lg:pt-[180px] lg:pb-[230px] md:pt-[100px] md:pb-[100px] pt-[90px] pb-[50px]">
                <div className="custom-container mx-auto px-3">
                    <div className="max-w-[830px]">
                        <h2 className="text-gradient-primary font-bold md:text-[32px] text-2xl"># Australia’s No.1</h2>
                        <h1 className="font-inter font-bold lg:text-[72px] sm:text-[58px] text-[36px] lg:leading-[77px] sm:leading-[66px] leading-[40px] sm:mt-0 mt-3 text-white">
                            PTE, IELTS & NAATI CCL  Coaching Institute
                        </h1>
                        <p className="md:text-2xl sm:text-xl text-base font-light max-w-[800px] text-white/75 mt-5">
                            Join 10,000+ satisfied students in achieving their desired Test Scores.
                            Helped many students, now it's your turn!
                        </p>
                        <div className="mt-[48px] flex sm:flex-nowrap flex-wrap sm:gap-[31px] gap-[16px] max-w-[800px]">
                            <a href="#" className="primary-btn bg-gradient-primary leading-[28px] inline-flex justify-center items-center text-center text-black px-6 py-5 sm:w-[50%] w-full font-bold sm:text-2xl text-xl relative z-10">
                                Get a Callback
                            </a>
                            <a href="#" className="text-center bg-transparent border-2 border-Cadmium-Orange text-white px-6 py-5 sm:w-[50%] w-full font-bold sm:text-2xl text-xl transition-all duration-300 ease hover:bg-white/10">
                                Watch Free Lessons
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black">
                <div className="custom-container mx-auto px-3 py-[38px] border-t border-[#252525]">
                    <h2 className="text-white font-bold sm:text-[29.39px] text-2xl relative  inline-block z-10 mb-[38px] stroke-heading">Our Courses</h2>

                    <div className="flex flex-col gap-[38px]">
                        <div class="grid lg:grid-cols-2 gap-[38px] bg-[#121211] transition-all duration-300 ease hover:bg-white/10 border border-white/10 sm:py-[31px] py-[20px] sm:px-[38px] px-[20px] group relative">
                            <div class="ribbon ribbon-top-left z-10"><span>New course!</span></div>
                            <div className="overflow-hidden relative z-0">
                                <img src={CourseImg1} alt="CourseImg1" className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]" />
                            </div>
                            <div className="lg:py-[40px]">
                                <h2 className="text-gradient-primary font-bold md:text-[26px] inline-block sm:text-2xl text-lg">NAATI CCL <span className="text-white">Fast Track</span> Course</h2>
                                <h2 className="font-bold lg:text-[46px] sm:text-[32px] text-2xl text-white lg:leading-[50px] sm:leading-[38px] leading-[28px] my-[18px]">Need to clear the test in 3 days, we’ve got you covered!</h2>
                                <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-5">
                                    This is a super fast-paced course. It’s geared for speed, designed for those who need to clear the test on urgent basis, and do whatever it takes to clear it.
                                </p>
                                <div className="flex items-center gap-3">
                                    <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full border-4 border-white/10" />
                                    <h3 className="text-xl text-white/60">Taught by <span className="text-white font-bold">Abhishek</span></h3>
                                </div>
                                <div className="sm:mt-[48px] mt-[24px] flex sm:flex-nowrap flex-wrap sm:gap-[31px] gap-[16px] max-w-[800px]">
                                    <a href="#" className="primary-btn bg-gradient-primary leading-[28px] inline-flex justify-center items-center text-center text-white px-6 py-5 sm:w-[50%] w-full font-bold sm:text-2xl text-xl relative z-10">
                                        Take the Course
                                    </a>
                                    <a href="#" className="text-center bg-transparent border-2 border-white/20 inline-flex justify-center items-center text-white px-6 py-5 sm:w-[50%] w-full font-bold sm:text-2xl text-xl transition-all duration-300 ease hover:bg-white/10">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="grid lg:grid-cols-2 gap-[38px] bg-[#121211] transition-all duration-300 ease hover:bg-white/10 border border-white/10 sm:py-[31px] py-[20px] sm:px-[38px] px-[20px] group relative">
                            <div className="overflow-hidden relative z-0">
                                <img src={CourseImg2} alt="CourseIm21" className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]" />
                            </div>
                            <div className="lg:py-[40px]">
                                <h2 className="text-gradient-secondary font-bold md:text-[26px] inline-block sm:text-2xl text-lg">PTE Master Class</h2>
                                <h2 className="font-bold lg:text-[46px] sm:text-[32px] text-2xl text-white lg:leading-[50px] sm:leading-[38px] leading-[28px] my-[18px]">Missed your score by a few marks! Clear in 2 weeks</h2>
                                <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-5">
                                    This is literally the best advice that I give every student. My strategies will teach you how to get 90 in each module. I’ve helped students out for 5+ years as a super-friendly teacher to get their desired score, now it’s your turn.
                                </p>
                                <div className="flex items-center gap-3">
                                    <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full border-4 border-white/10" />
                                    <h3 className="text-xl text-white/60">Taught by <span className="text-white font-bold">Abhishek</span></h3>
                                </div>
                                <div className="sm:mt-[48px] mt-[24px] flex sm:flex-nowrap flex-wrap sm:gap-[31px] gap-[16px] max-w-[800px]">
                                    <a href="#" className="primary-btn bg-gradient-secondary leading-[28px] inline-flex justify-center items-center text-center text-white px-6 py-5 sm:w-[50%] w-full font-bold sm:text-2xl text-xl relative z-10">
                                        Take the Course
                                    </a>
                                    <a href="#" className="text-center bg-transparent border-2 border-white/20 inline-flex justify-center items-center text-white px-6 py-5 sm:w-[50%] w-full font-bold sm:text-2xl text-xl transition-all duration-300 ease hover:bg-white/10">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="grid lg:grid-cols-2 gap-[38px] bg-[#121211] transition-all duration-300 ease hover:bg-white/10 border border-white/10 sm:py-[31px] py-[20px] sm:px-[38px] px-[20px] group relative">
                            <div className="overflow-hidden relative z-0">
                                <img src={CourseImg3} alt="CourseImg3" className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]" />
                            </div>
                            <div className="lg:py-[40px]">
                                <h2 className="dark-text-custom font-bold md:text-[26px] block sm:text-2xl text-lg">PTE Master Handbook</h2>
                                <h2 className="font-bold lg:text-[46px] sm:text-[32px] text-2xl text-white lg:leading-[50px] sm:leading-[38px] leading-[28px] my-[18px]">PTE 79+ in 7 days
                                    Crack PTE in 1  attempt</h2>
                                <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-5">
                                    Learn exactly what students did to achieve their desired band. This book explains the exam structure, target scores, key tasks to focus on, and the 7-day strategy you need to follow to go from 5 to 8 each as quickly as possible.
                                </p>
                                <div className="flex items-center gap-3">
                                    <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full border-4 border-white/10" />
                                    <h3 className="text-xl text-white/60">Taught by <span className="text-white font-bold">Abhishek</span></h3>
                                </div>
                                <div className="sm:mt-[48px] mt-[24px] flex sm:flex-nowrap flex-wrap sm:gap-[31px] gap-[16px] max-w-[800px]">
                                    <a href="#" className="primary-btn bg-gradient-dark leading-[28px] inline-flex justify-center items-center text-center text-white px-6 py-5 sm:w-[50%] w-full font-bold sm:text-2xl text-xl relative z-10">
                                        Free E-Book
                                    </a>
                                    <a href="#" className="text-center bg-transparent border-2 border-white/20 inline-flex justify-center items-center text-white px-6 py-5 sm:w-[50%] w-full font-bold sm:text-2xl text-xl transition-all duration-300 ease hover:bg-white/10">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
