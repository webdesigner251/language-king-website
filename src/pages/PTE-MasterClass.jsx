import React from "react";
import HomeBanner from '../assets/Homepage-banner.png';
import avatar from '../assets/avatar-img.png';
import AppleIcon from '../assets/icons/apple-icon.svg'
import AndroidIcon from '../assets/icons/android-icon.svg'
import WindowsIcon from '../assets/icons/windows-icon.svg'
import Coursecover1 from '../assets/course/read-aloud.png'
import Coursecover2 from '../assets/course/low-score.png'
import Coursecover3 from '../assets/course/word-essay.png'
import Coursecover4 from '../assets/course/integrated-task.png'
import Coursecover5 from '../assets/course/master-reading.png'
import Coursecover6 from '../assets/course/4-steps-rop.png'
import Coursecover7 from '../assets/course/extra-words.png'
import PTEResponse from '../assets/course/pte-res.png'

const PTEMasterClass = () => {
    const courseData = [
        {
            title: "Read Aloud 1-Line Strategy",
            image: Coursecover1,
            description: "Find the truth behind 1-Line Strategy in Read Aloud, and who can use it.",
        },
        {
            title: "Low score after Nov 2024",
            image: Coursecover2,
            description: "Learn how to attempt images without text and the answer to speaking till the end. Can you answer be checked by a person?",
        },
        {
            title: "1 Word Essay Templates",
            image: Coursecover3,
            description: "Can you use Old Essay Templates in 2025? Watch Ab discuss about human evaluation, use of templates, and much more.",
        },
        {
            title: "Integrated tasks",
            image: Coursecover4,
            description: "Does Speaking affect your Reading & Listening Score ?",
        },
        {
            title: "Master Reading Blanks",
            image: Coursecover5,
            description: "Is “Grammar” really important in Reading & Writing Fill in the Blanks?",
        },
        {
            title: "4 Step ROP Hack",
            image: Coursecover6,
            description: "Solve any Re-order paragraph with our 4 Step Master Techinique.",
        },
        {
            title: "Extra words in WFD",
            image: Coursecover7,
            description: "Should you add extra words ? Can it lower score in Writing Module ? Let’s discuss what no one else will.",
        },
    ];


    return (
        <>
            <div className="bg-black/50">
                <section className="pt-[220px] pb-[60px] mt-[-150px] relative min-h-[95vh] flex flex-column justify-center items-center">
                    <img src={HomeBanner} alt="HomeBanner" className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover" />
                    <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full relative z-10">
                        <div className="grid lg:grid-cols-2 items-end">
                            <div className="">
                                <div className="flex flex-col 2xl:gap-6 gap-3">
                                    <h2 className="text-[#0A8AF2] font-bold 2xl:text-[32px] text-2xl">PTE MasterClass</h2>
                                    <h1 className="font-inter font-bold main-heading 2xl:mt-2 mt-0 text-white">
                                        Missed your score! <br />
                                        Clear in 2 weeks
                                    </h1>
                                    <p className="md:text-xl sm:text-xl text-base font-light max-w-[640px] text-white/75">
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
                            <div className="text-end ">
                                <h4 className="font-normal text-[#A1A0A0] text-xl text-end">Devices Supported:</h4>
                                <div className="max-w-[200px] ms-auto mt-[32px] flex justify-between items-center">
                                    <img src={AppleIcon} alt="AppleIcon" className="w-auto h-8" />
                                    <img src={AndroidIcon} alt="AndroidIcon" className="w-auto h-8" />
                                    <img src={WindowsIcon} alt="WindowsIcon" className="w-auto h-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full ">
                        <div className="grid grid-cols-3 items-center">
                            <hr className="border-[#252525]" />
                            <span className="font-normal 2xl:text-2xl lg:text-xl text-base text-white/60 text-center">
                                Helping 10K+ students get their desired scores
                            </span>
                            <hr className="border-[#252525]" />

                        </div>
                    </div>
                </section>

                <section className="py-[80px]">
                    <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[32px] sm:gap-y-[58px] gap-[42px]">
                            <h2 className="text-gradient-secondary font-semibold 2xl:text-[44px] sm:text-[36px] text-2xl 2xl:leading-[50px] sm:leading-[42px] leading-[32px] inline-block 2xl:max-w-[350px] lg:max-w-[300px]">
                                This course covers all 20 tasks with easy to understand video lessons and more.
                            </h2>

                            {courseData.map((course, index) => (
                                <div className="flex flex-col gap-4" key={index}>
                                    <div className="flex items-start gap-1">
                                        <div className="border border-white/40 sm:px-[6px] sm:py-[7px] px-[5px] py-[6px] me-[9px]">
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18724 5.9984C2.84642 6.33491 3.32419 6.66505 3.58908 7.23134C3.89223 7.90339 4.26872 8.61289 4.57197 9.28495C4.6835 9.42817 4.93813 9.47187 5.08123 9.37246C5.11616 9.30415 5.18939 9.34149 5.22433 9.27306C5.40225 9.10535 5.65352 8.97485 5.7582 8.76968C6.56807 7.54503 7.63594 6.53815 8.59227 5.38818C8.66214 5.25144 8.69708 5.18301 8.84006 5.0836C10.3755 3.8844 11.6529 2.46727 13.3383 1.51701C13.7325 1.2872 14.0536 1.02 14.4862 0.895959C15.4911 0.374321 16.6178 0.518383 17.5035 1.31538C17.9081 1.60811 17.995 2.3422 17.639 2.67776C17.4261 2.91402 17.2132 3.15017 16.8922 3.4174C16.1419 3.98285 15.3917 4.54817 14.7147 5.15095C13.7166 6.02097 12.7569 6.99675 11.9819 8.1531C11.2419 9.24101 10.3171 10.1485 9.53876 11.1306C9.11294 11.603 8.76034 12.1128 8.40787 12.6225C8.12515 12.9955 7.88072 13.4743 7.52477 13.81C5.99615 15.3574 6.24741 15.227 4.2417 14.6343C3.91384 14.5532 3.65583 14.3353 3.36286 14.1857C2.40731 13.5254 1.73789 12.6665 1.46276 11.5776C1.11099 10.2772 0.685965 8.93944 0.260933 7.6017C0.219191 7.32174 0.250692 7.07911 0.320526 6.94237C0.599827 6.39517 1.02904 6.09696 1.56981 5.94198C1.78612 5.87991 2.07908 6.02949 2.18724 5.9984Z" fill="url(#paint0_linear_1024_1236)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1024_1236" x1="6.19843" y1="-4.57243" x2="18.847" y2="3.07249" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#17FFBA" />
                                                        <stop offset="0.130208" stop-color="#76B4C8" />
                                                        <stop offset="1" stop-color="#2F57A7" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="font-bold 2xl:text-2xl text-xl text-white leading-[32px]">{course.title}</span>
                                    </div>
                                    <img src={course.image} alt={`Image of ${course.title}`} className="w-full h-auto object-contain" />
                                    <p className="font-light 2xl:text-xl sm:text-lg text-sm leading-[24px] text-white/60">{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="custom-container mx-auto px-4 sm:px-[32px] w-full">
                        <div className="flex lg:flex-nowrap flex-wrap items-center lg:py-[100px] py-[70px] border-y-2 border-[#252525] sm:gap-[50px] gap-[35px]">
                            <div className="lg:w-[77%]">
                                <img src={PTEResponse} alt="PTEResponse" className="w-full h-auto" />
                            </div>
                            <div className="lg:w-[28%] flex flex-col gap-y-[19px]">
                                <h2 className="text-gradient-Bluedark font-bold 2xl:text-[40px] sm:text-[36px] text-2xl 2xl:leading-[50px] sm:leading-[42px] leading-[32px]">
                                    Watch AB grade students’ responses and give Feedback
                                </h2>
                                <p className="font-light 2xl:text-xl sm:text-lg text-sm leading-[24px] text-white/60">One of the best ways to learn what works
                                    and what doesn’t is to simply see it for yourself on real world, existing websites.</p>

                                <p className="font-light 2xl:text-[22px] sm:text-lg text-sm leading-[24px] text-white/60">
                                    We’ll review sites like:
                                </p>
                                <ul>
                                    <li className="flex gap-3 items-center">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.20268 6.26602C2.79758 6.60251 3.22877 6.93262 3.46783 7.49891C3.74148 8.171 4.08123 8.88047 4.35487 9.55256C4.45556 9.69572 4.68538 9.73949 4.81449 9.64009C4.84601 9.5717 4.91211 9.60908 4.94361 9.54069C5.10424 9.37289 5.33097 9.24248 5.4255 9.0373C6.15637 7.81256 7.12015 6.80577 7.98323 5.65581C8.04626 5.51903 8.07776 5.45062 8.20689 5.35122C9.59261 4.15201 10.7454 2.73485 12.2664 1.78459C12.6223 1.55477 12.9121 1.28757 13.3025 1.16354C14.2094 0.641897 15.2262 0.78596 16.0256 1.58297C16.3907 1.87569 16.4691 2.60978 16.1478 2.94537C15.9558 3.18158 15.7636 3.41777 15.4739 3.68497C14.7968 4.25038 14.1197 4.81579 13.5086 5.41858C12.6079 6.28858 11.7417 7.26437 11.0423 8.4207C10.3745 9.50865 9.53984 10.416 8.83738 11.3982C8.4531 11.8706 8.13493 12.3804 7.81675 12.8901C7.5616 13.2631 7.34102 13.7419 7.01977 14.0775C5.64021 15.625 5.86694 15.4946 4.05688 14.9019C3.76096 14.8208 3.52807 14.6029 3.26367 14.4533C2.40128 13.793 1.79713 12.934 1.54884 11.8452C1.23135 10.5448 0.847767 9.20701 0.464184 7.86923C0.426512 7.58926 0.45494 7.34669 0.517959 7.2099C0.770035 6.66274 1.15739 6.36453 1.64544 6.20949C1.84066 6.14748 2.10506 6.29702 2.20268 6.26602Z" fill="url(#paint0_linear_1024_4136)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1024_4136" x1="5.82277" y1="-4.30485" x2="17.8342" y2="2.24716" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#17FFBA" />
                                                    <stop offset="0.130208" stop-color="#76B4C8" />
                                                    <stop offset="1" stop-color="#2F57A7" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="font-medium 2xl:text-[22px] text-lg text-white/60">Band 8</span>
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.20268 6.26602C2.79758 6.60251 3.22877 6.93262 3.46783 7.49891C3.74148 8.171 4.08123 8.88047 4.35487 9.55256C4.45556 9.69572 4.68538 9.73949 4.81449 9.64009C4.84601 9.5717 4.91211 9.60908 4.94361 9.54069C5.10424 9.37289 5.33097 9.24248 5.4255 9.0373C6.15637 7.81256 7.12015 6.80577 7.98323 5.65581C8.04626 5.51903 8.07776 5.45062 8.20689 5.35122C9.59261 4.15201 10.7454 2.73485 12.2664 1.78459C12.6223 1.55477 12.9121 1.28757 13.3025 1.16354C14.2094 0.641897 15.2262 0.78596 16.0256 1.58297C16.3907 1.87569 16.4691 2.60978 16.1478 2.94537C15.9558 3.18158 15.7636 3.41777 15.4739 3.68497C14.7968 4.25038 14.1197 4.81579 13.5086 5.41858C12.6079 6.28858 11.7417 7.26437 11.0423 8.4207C10.3745 9.50865 9.53984 10.416 8.83738 11.3982C8.4531 11.8706 8.13493 12.3804 7.81675 12.8901C7.5616 13.2631 7.34102 13.7419 7.01977 14.0775C5.64021 15.625 5.86694 15.4946 4.05688 14.9019C3.76096 14.8208 3.52807 14.6029 3.26367 14.4533C2.40128 13.793 1.79713 12.934 1.54884 11.8452C1.23135 10.5448 0.847767 9.20701 0.464184 7.86923C0.426512 7.58926 0.45494 7.34669 0.517959 7.2099C0.770035 6.66274 1.15739 6.36453 1.64544 6.20949C1.84066 6.14748 2.10506 6.29702 2.20268 6.26602Z" fill="url(#paint0_linear_1024_4136)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1024_4136" x1="5.82277" y1="-4.30485" x2="17.8342" y2="2.24716" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#17FFBA" />
                                                    <stop offset="0.130208" stop-color="#76B4C8" />
                                                    <stop offset="1" stop-color="#2F57A7" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="font-medium 2xl:text-[22px] text-lg text-white/60">Band 7</span>
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.20268 6.26602C2.79758 6.60251 3.22877 6.93262 3.46783 7.49891C3.74148 8.171 4.08123 8.88047 4.35487 9.55256C4.45556 9.69572 4.68538 9.73949 4.81449 9.64009C4.84601 9.5717 4.91211 9.60908 4.94361 9.54069C5.10424 9.37289 5.33097 9.24248 5.4255 9.0373C6.15637 7.81256 7.12015 6.80577 7.98323 5.65581C8.04626 5.51903 8.07776 5.45062 8.20689 5.35122C9.59261 4.15201 10.7454 2.73485 12.2664 1.78459C12.6223 1.55477 12.9121 1.28757 13.3025 1.16354C14.2094 0.641897 15.2262 0.78596 16.0256 1.58297C16.3907 1.87569 16.4691 2.60978 16.1478 2.94537C15.9558 3.18158 15.7636 3.41777 15.4739 3.68497C14.7968 4.25038 14.1197 4.81579 13.5086 5.41858C12.6079 6.28858 11.7417 7.26437 11.0423 8.4207C10.3745 9.50865 9.53984 10.416 8.83738 11.3982C8.4531 11.8706 8.13493 12.3804 7.81675 12.8901C7.5616 13.2631 7.34102 13.7419 7.01977 14.0775C5.64021 15.625 5.86694 15.4946 4.05688 14.9019C3.76096 14.8208 3.52807 14.6029 3.26367 14.4533C2.40128 13.793 1.79713 12.934 1.54884 11.8452C1.23135 10.5448 0.847767 9.20701 0.464184 7.86923C0.426512 7.58926 0.45494 7.34669 0.517959 7.2099C0.770035 6.66274 1.15739 6.36453 1.64544 6.20949C1.84066 6.14748 2.10506 6.29702 2.20268 6.26602Z" fill="url(#paint0_linear_1024_4136)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1024_4136" x1="5.82277" y1="-4.30485" x2="17.8342" y2="2.24716" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#17FFBA" />
                                                    <stop offset="0.130208" stop-color="#76B4C8" />
                                                    <stop offset="1" stop-color="#2F57A7" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="font-medium 2xl:text-[22px] text-lg text-white/60">Band 6.5</span>
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.20268 6.26602C2.79758 6.60251 3.22877 6.93262 3.46783 7.49891C3.74148 8.171 4.08123 8.88047 4.35487 9.55256C4.45556 9.69572 4.68538 9.73949 4.81449 9.64009C4.84601 9.5717 4.91211 9.60908 4.94361 9.54069C5.10424 9.37289 5.33097 9.24248 5.4255 9.0373C6.15637 7.81256 7.12015 6.80577 7.98323 5.65581C8.04626 5.51903 8.07776 5.45062 8.20689 5.35122C9.59261 4.15201 10.7454 2.73485 12.2664 1.78459C12.6223 1.55477 12.9121 1.28757 13.3025 1.16354C14.2094 0.641897 15.2262 0.78596 16.0256 1.58297C16.3907 1.87569 16.4691 2.60978 16.1478 2.94537C15.9558 3.18158 15.7636 3.41777 15.4739 3.68497C14.7968 4.25038 14.1197 4.81579 13.5086 5.41858C12.6079 6.28858 11.7417 7.26437 11.0423 8.4207C10.3745 9.50865 9.53984 10.416 8.83738 11.3982C8.4531 11.8706 8.13493 12.3804 7.81675 12.8901C7.5616 13.2631 7.34102 13.7419 7.01977 14.0775C5.64021 15.625 5.86694 15.4946 4.05688 14.9019C3.76096 14.8208 3.52807 14.6029 3.26367 14.4533C2.40128 13.793 1.79713 12.934 1.54884 11.8452C1.23135 10.5448 0.847767 9.20701 0.464184 7.86923C0.426512 7.58926 0.45494 7.34669 0.517959 7.2099C0.770035 6.66274 1.15739 6.36453 1.64544 6.20949C1.84066 6.14748 2.10506 6.29702 2.20268 6.26602Z" fill="url(#paint0_linear_1024_4136)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1024_4136" x1="5.82277" y1="-4.30485" x2="17.8342" y2="2.24716" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#17FFBA" />
                                                    <stop offset="0.130208" stop-color="#76B4C8" />
                                                    <stop offset="1" stop-color="#2F57A7" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="font-medium 2xl:text-[22px] text-lg text-white/60">And others!</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-[80px]">
                    <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[32px] sm:gap-y-[58px] gap-[42px]">
                            <h2 className="text-gradient-Bluedark font-semibold 2xl:text-[44px] sm:text-[36px] text-2xl 2xl:leading-[50px] sm:leading-[42px] leading-[32px] inline-block 2xl:max-w-[410px] lg:max-w-[300px]">
                                Having an instructor like AB bring you the real experience needed to get desired score.
                            </h2>

                            {courseData.map((course, index) => (
                                <div className="flex flex-col gap-4" key={index}>
                                    <div className="flex items-start gap-1">
                                        <div className="border border-white/40 sm:px-[6px] sm:py-[7px] px-[5px] py-[6px] me-[9px]">
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18724 5.9984C2.84642 6.33491 3.32419 6.66505 3.58908 7.23134C3.89223 7.90339 4.26872 8.61289 4.57197 9.28495C4.6835 9.42817 4.93813 9.47187 5.08123 9.37246C5.11616 9.30415 5.18939 9.34149 5.22433 9.27306C5.40225 9.10535 5.65352 8.97485 5.7582 8.76968C6.56807 7.54503 7.63594 6.53815 8.59227 5.38818C8.66214 5.25144 8.69708 5.18301 8.84006 5.0836C10.3755 3.8844 11.6529 2.46727 13.3383 1.51701C13.7325 1.2872 14.0536 1.02 14.4862 0.895959C15.4911 0.374321 16.6178 0.518383 17.5035 1.31538C17.9081 1.60811 17.995 2.3422 17.639 2.67776C17.4261 2.91402 17.2132 3.15017 16.8922 3.4174C16.1419 3.98285 15.3917 4.54817 14.7147 5.15095C13.7166 6.02097 12.7569 6.99675 11.9819 8.1531C11.2419 9.24101 10.3171 10.1485 9.53876 11.1306C9.11294 11.603 8.76034 12.1128 8.40787 12.6225C8.12515 12.9955 7.88072 13.4743 7.52477 13.81C5.99615 15.3574 6.24741 15.227 4.2417 14.6343C3.91384 14.5532 3.65583 14.3353 3.36286 14.1857C2.40731 13.5254 1.73789 12.6665 1.46276 11.5776C1.11099 10.2772 0.685965 8.93944 0.260933 7.6017C0.219191 7.32174 0.250692 7.07911 0.320526 6.94237C0.599827 6.39517 1.02904 6.09696 1.56981 5.94198C1.78612 5.87991 2.07908 6.02949 2.18724 5.9984Z" fill="url(#paint0_linear_1024_1236)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1024_1236" x1="6.19843" y1="-4.57243" x2="18.847" y2="3.07249" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#17FFBA" />
                                                        <stop offset="0.130208" stop-color="#76B4C8" />
                                                        <stop offset="1" stop-color="#2F57A7" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="font-bold 2xl:text-2xl text-xl text-white leading-[32px]">{course.title}</span>
                                    </div>
                                    <img src={course.image} alt={`Image of ${course.title}`} className="w-full h-auto object-contain" />
                                    <p className="font-light 2xl:text-xl sm:text-lg text-sm leading-[24px] text-white/60">{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PTEMasterClass;