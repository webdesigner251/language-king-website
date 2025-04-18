import React, { useState } from "react";
import AppleImg from '../assets/icons/apple.svg'
import GoogleImg from '../assets/icons/google-play.svg'
import WindowsImg from '../assets/icons/windows.svg'
import Email from '../assets/icons/email.svg'
import Phone from '../assets/icons/call.svg'
import Map from '../assets/icons/map.svg'
import Facebook from "../assets/icons/facebook.svg";
import Insta from "../assets/icons/instagram.svg";
import Tiktok from "../assets/icons/tiktok.svg";

const Footer = () => {
    return (
        <>
            <footer className="bg-dark md:pt-[67px] pt-[32px]">
                <div className="custom-container mx-auto py-0 px-0 sm:px-[38px]">
                    <div className="border-t border-[#252525]">
                        <div className="border border-[#333434] mt-[40px] mb-[38px]">
                            <div className="bg-[#1A1A1A] sm:p-[38px] p-4 border-b border-[#333434]">
                                <div className="flex lg:flex-nowrap flex-wrap justify-between sm:gap-8 gap-[33px]">
                                    <div className="lg:w-auto w-full flex flex-col sm:gap-[40px] gap-[22px]">
                                        <h4 className="text-white font-bold sm:text-[24px] text-[22px]">Contact Us </h4>
                                        <ul className="flex flex-col gap-[22px]">
                                            <li>
                                                <a href="mailto:info@languageking.com.au" className="flex items-center gap-5 text-[#919191] font-semibold sm:text-lg text-lg">
                                                    <img src={Email} className="w-10 h-10 " />
                                                    info@languageking.com.au
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:+61488876999" className="flex items-center gap-5 text-[#919191] font-semibold sm:text-lg text-lg">
                                                    <img src={Phone} className="w-10 h-10 " />
                                                    +61 488 876 999
                                                </a>
                                            </li>
                                            <li>
                                                <span className="flex items-center gap-5 text-[#919191] font-semibold sm:text-lg text-lg">
                                                    <img src={Map} className="w-10 h-10 " />
                                                    Online
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="lg:w-auto sm:w-[30%] w-[40%] flex flex-col sm:gap-[40px] gap-[22px]">
                                        <h4 className="text-white font-bold sm:text-[24px] text-[22px]">About Us </h4>
                                        <ul className="flex flex-col sm:gap-[15px] gap-[14px]">
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold sm:text-lg text-lg transition-all duration-300 ease hover:text-white/80">
                                                    Terms of Use
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold sm:text-lg text-lg transition-all duration-300 ease hover:text-white/80">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold sm:text-lg text-lg transition-all duration-300 ease hover:text-white/80">
                                                    Refund Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold sm:text-lg text-lg transition-all duration-300 ease hover:text-white/80">
                                                    Careers
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold sm:text-lg text-lg transition-all duration-300 ease hover:text-white/80">
                                                    FAQs
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="lg:w-auto sm:w-[30%] w-[40%] flex flex-col sm:gap-[40px] gap-[22px]">
                                        <h4 className="text-white font-bold sm:text-[24px] text-[22px]">Courses</h4>
                                        <ul className="flex flex-col sm:gap-[15px] gap-[14px]">
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold sm:text-lg text-lg transition-all duration-300 ease hover:text-white/80">
                                                    PTE
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold sm:text-lg text-lg transition-all duration-300 ease hover:text-white/80">
                                                    NAATI CCL
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold sm:text-lg text-lg transition-all duration-300 ease hover:text-white/80">
                                                    IELTS
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="lg:w-auto w-full flex flex-col sm:gap-[40px] gap-[22px]">
                                        <h4 className="text-white font-bold sm:text-[24px] text-[22px]">Devices Supported</h4>
                                        <ul className="flex sm:flex-col flex-wrap sm:gap-[22px] gap-[18px]">
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold text-xl transition-all duration-300 ease hover:text-white/80">
                                                    <img src={AppleImg} alt="Image" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold text-xl transition-all duration-300 ease hover:text-white/80">
                                                    <img src={GoogleImg} alt="Image" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center gap-4 text-[#919191] font-semibold text-xl transition-all duration-300 ease hover:text-white/80">
                                                    <img src={WindowsImg} alt="Image" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="sm:hidden flex flex-col gap-[24px]">
                                        <h4 className="text-white font-bold sm:text-[24px] text-[22px]">Follow Us</h4>
                                        <ul className="flex gap-5">
                                            <li>
                                                <a href="#" className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-3 transition-all ease duration-300 group hover:bg-white">
                                                    <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_592_871)">
                                                            <path d="M9.4231 4.78459H12.2093V0.652344H8.65321V0.668056C3.98153 0.840889 3.01786 3.41241 2.9393 6.13582H2.92359V9.00063H0.142578V13.1329H2.92359V25.6972H7.91999V13.1329H11.5023L12.2093 9.00063H7.91999V6.43434C7.91999 5.52305 8.54323 4.78459 9.4231 4.78459Z" className="fill-white group-hover:fill-black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_592_871">
                                                                <rect width="13" height="26" className="fill-white group-hover:fill-black" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-3 transition-all ease duration-300 group hover:bg-white">
                                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_592_877)">
                                                            <path d="M18.3348 0H6.80517C3.05274 0 0 3.05274 0 6.80517V18.335C0 22.0872 3.05274 25.1399 6.80517 25.1399H18.335C22.0872 25.1399 25.1399 22.0872 25.1399 18.335V6.80517C25.1399 3.05274 22.0872 0 18.3348 0ZM12.57 19.444C8.77959 19.444 5.69597 16.3604 5.69597 12.57C5.69597 8.77954 8.77954 5.69597 12.57 5.69597C16.3604 5.69597 19.444 8.77954 19.444 12.57C19.444 16.3604 16.3604 19.444 12.57 19.444ZM19.6084 7.3171C18.4882 7.3171 17.5772 6.40602 17.5772 5.28587C17.5772 4.16572 18.4882 3.25454 19.6084 3.25454C20.7285 3.25454 21.6397 4.16577 21.6397 5.28587C21.6397 6.40597 20.7285 7.3171 19.6084 7.3171Z" className="fill-white group-hover:fill-black" />
                                                            <path d="M12.5701 7.16789C9.59259 7.16789 7.16992 9.59032 7.16992 12.5681C7.16992 15.5456 9.59259 17.9683 12.5701 17.9683C15.5479 17.9683 17.9703 15.5456 17.9703 12.5681C17.9703 9.59032 15.5479 7.16789 12.5701 7.16789ZM19.6085 4.72656C19.3012 4.72656 19.0511 4.97673 19.0511 5.28396C19.0511 5.59124 19.3012 5.84136 19.6085 5.84136C19.916 5.84136 20.1661 5.59144 20.1661 5.28396C20.1661 4.97654 19.916 4.72656 19.6085 4.72656Z" className="fill-white group-hover:fill-black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_592_877">
                                                                <rect width="25.14" height="25.14" className="fill-white group-hover:fill-black" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-3 transition-all ease duration-300 group hover:bg-white">
                                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_592_882)">
                                                            <path d="M23.5845 6.30453C22.1498 6.30453 20.826 5.82923 19.763 5.0274C18.5438 4.10822 17.6678 2.75989 17.3584 1.20582C17.2809 0.815069 17.2401 0.4179 17.2367 0.0195312H13.1382V11.2186L13.1333 17.3529C13.1333 18.9929 12.0653 20.3834 10.5849 20.8725C10.1415 21.0191 9.67441 21.081 9.20808 21.0551C8.59137 21.0212 8.01344 20.8352 7.51113 20.5347C6.44219 19.8954 5.71745 18.7356 5.69781 17.4088C5.66688 15.3353 7.3432 13.6447 9.41529 13.6447C9.82431 13.6447 10.2171 13.7115 10.5849 13.8328V9.67143C10.197 9.61398 9.80221 9.58402 9.40301 9.58402C7.13501 9.58402 5.01383 10.5268 3.49757 12.2252C2.35154 13.5087 1.66412 15.1462 1.55806 16.8633C1.4191 19.1191 2.2445 21.2633 3.84521 22.8454C4.0804 23.0776 4.32739 23.2932 4.58566 23.492C5.95805 24.5482 7.63585 25.1207 9.40301 25.1207C9.80221 25.1207 10.197 25.0913 10.5849 25.0338C12.2357 24.7893 13.7588 24.0336 14.9608 22.8454C16.4378 21.3856 17.2539 19.4475 17.2627 17.3848L17.2416 8.2244C17.9479 8.76916 18.7216 9.22038 19.5435 9.56684C20.8294 10.1094 22.193 10.3844 23.5963 10.3839V6.30355C23.5973 6.30453 23.5855 6.30453 23.5845 6.30453Z" className="fill-white group-hover:fill-black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_592_882">
                                                                <rect width="25.14" height="25.14" className="fill-white group-hover:fill-black" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex items-center sm:justify-between justify-center sm:py-[36px] py-[18px] px-[38px] ">
                                <span className="font-medium sm:text-lg tex-base sm:text-start text-center text-white [text-shadow:0_0_16px_rgba(255,255,255,0.77)]">Copyright @ 2025 Language King</span>

                                <ul className="sm:flex hidden gap-5 md:pe-[50px] pe-0">
                                    <li>
                                        <a href="#" className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-3 transition-all ease duration-300 group hover:bg-white">
                                            <svg className="w-auto h-full" width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_592_871)">
                                                    <path d="M9.4231 4.78459H12.2093V0.652344H8.65321V0.668056C3.98153 0.840889 3.01786 3.41241 2.9393 6.13582H2.92359V9.00063H0.142578V13.1329H2.92359V25.6972H7.91999V13.1329H11.5023L12.2093 9.00063H7.91999V6.43434C7.91999 5.52305 8.54323 4.78459 9.4231 4.78459Z" className="fill-white group-hover:fill-black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_592_871">
                                                        <rect width="13" height="26" className="fill-white group-hover:fill-black" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-3 transition-all ease duration-300 group hover:bg-white">
                                            <svg className="w-auto h-full" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_592_877)">
                                                    <path d="M18.3348 0H6.80517C3.05274 0 0 3.05274 0 6.80517V18.335C0 22.0872 3.05274 25.1399 6.80517 25.1399H18.335C22.0872 25.1399 25.1399 22.0872 25.1399 18.335V6.80517C25.1399 3.05274 22.0872 0 18.3348 0ZM12.57 19.444C8.77959 19.444 5.69597 16.3604 5.69597 12.57C5.69597 8.77954 8.77954 5.69597 12.57 5.69597C16.3604 5.69597 19.444 8.77954 19.444 12.57C19.444 16.3604 16.3604 19.444 12.57 19.444ZM19.6084 7.3171C18.4882 7.3171 17.5772 6.40602 17.5772 5.28587C17.5772 4.16572 18.4882 3.25454 19.6084 3.25454C20.7285 3.25454 21.6397 4.16577 21.6397 5.28587C21.6397 6.40597 20.7285 7.3171 19.6084 7.3171Z" className="fill-white group-hover:fill-black" />
                                                    <path d="M12.5701 7.16789C9.59259 7.16789 7.16992 9.59032 7.16992 12.5681C7.16992 15.5456 9.59259 17.9683 12.5701 17.9683C15.5479 17.9683 17.9703 15.5456 17.9703 12.5681C17.9703 9.59032 15.5479 7.16789 12.5701 7.16789ZM19.6085 4.72656C19.3012 4.72656 19.0511 4.97673 19.0511 5.28396C19.0511 5.59124 19.3012 5.84136 19.6085 5.84136C19.916 5.84136 20.1661 5.59144 20.1661 5.28396C20.1661 4.97654 19.916 4.72656 19.6085 4.72656Z" className="fill-white group-hover:fill-black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_592_877">
                                                        <rect width="25.14" height="25.14" className="fill-white group-hover:fill-black" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-3 transition-all ease duration-300 group hover:bg-white">
                                            <svg className="w-auto h-full" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_592_882)">
                                                    <path d="M23.5845 6.30453C22.1498 6.30453 20.826 5.82923 19.763 5.0274C18.5438 4.10822 17.6678 2.75989 17.3584 1.20582C17.2809 0.815069 17.2401 0.4179 17.2367 0.0195312H13.1382V11.2186L13.1333 17.3529C13.1333 18.9929 12.0653 20.3834 10.5849 20.8725C10.1415 21.0191 9.67441 21.081 9.20808 21.0551C8.59137 21.0212 8.01344 20.8352 7.51113 20.5347C6.44219 19.8954 5.71745 18.7356 5.69781 17.4088C5.66688 15.3353 7.3432 13.6447 9.41529 13.6447C9.82431 13.6447 10.2171 13.7115 10.5849 13.8328V9.67143C10.197 9.61398 9.80221 9.58402 9.40301 9.58402C7.13501 9.58402 5.01383 10.5268 3.49757 12.2252C2.35154 13.5087 1.66412 15.1462 1.55806 16.8633C1.4191 19.1191 2.2445 21.2633 3.84521 22.8454C4.0804 23.0776 4.32739 23.2932 4.58566 23.492C5.95805 24.5482 7.63585 25.1207 9.40301 25.1207C9.80221 25.1207 10.197 25.0913 10.5849 25.0338C12.2357 24.7893 13.7588 24.0336 14.9608 22.8454C16.4378 21.3856 17.2539 19.4475 17.2627 17.3848L17.2416 8.2244C17.9479 8.76916 18.7216 9.22038 19.5435 9.56684C20.8294 10.1094 22.193 10.3844 23.5963 10.3839V6.30355C23.5973 6.30453 23.5855 6.30453 23.5845 6.30453Z" className="fill-white group-hover:fill-black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_592_882">
                                                        <rect width="25.14" height="25.14" className="fill-white group-hover:fill-black" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="sm:pb-[54px] pb-6 border-b border-white/80 sm:px-0 px-4">
                            <h5 className="md:text-[22px] sm:text-lg text-sm text-[#8B8C8D]">Disclaimer - Language King is an independent coaching provider for the NAATI CCL and PTE tests. We are not affiliated with, endorsed by, or sponsored by NAATI or PTE. All test applications must be made directly with NAATI or PTE.</h5>
                        </div>
                        <div className="text-center sm:py-[48px] px-4 py-6">
                            <a href="#" className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-primary text-black px-3 py-3 sm:min-w-[398px] min-w-full font-bold sm:text-xl text-lg relative z-10">
                                Get a Callback
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;