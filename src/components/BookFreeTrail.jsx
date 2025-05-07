import React from "react";
import personImage from '../assets/person.png'
import checklist from '../assets/icons/checkmark.svg'

const BookFreeTrail = () => {
    return (
        <>
            <div className="bg-[#121212] px-4 py-6 sm:px-[32px] sm:py-[44px] border-[1.5px] border-white/10 transition-all duration-300 ease group relative">
                <div className="grid md:grid-cols-2 md::gap-[60px] gap-[40px] items-stretch justify-content-between">
                    <div className="md:block hidden">
                        <img src={personImage} alt="personImage" className="w-full rounded-[11px]" />
                        <h2 className="font-bold text-white lg:text-[40px] text-3xl mt-[32px]">What’s covered in class:</h2>
                        <div className="grid lg:grid-cols-2 grid-cols-1 mt-[42px] gap-7 ">
                            <div className="flex items-center gap-4 text-white font-medium lg:text-2xl text-xl">
                                <img src={checklist} alt="checklist" className="w-6 h-6" />
                                Basic Introduction
                            </div>
                            <div className="flex items-center gap-4 text-white font-medium lg:text-2xl text-xl">
                                <img src={checklist} alt="checklist" className="w-6 h-6" />
                                Test Format & Overview
                            </div>
                            <div className="flex items-center gap-4 text-white font-medium lg:text-2xl text-xl">
                                <img src={checklist} alt="checklist" className="w-6 h-6" />
                                Level of English
                            </div>
                            <div className="flex items-center gap-4 text-white font-medium lg:text-2xl text-xl">
                                <img src={checklist} alt="checklist" className="w-6 h-6" />
                                Scorecard Analysis
                            </div>
                            <div className="flex items-center gap-4 text-white font-medium lg:text-2xl text-xl">
                                <img src={checklist} alt="checklist" className="w-6 h-6" />
                                And more!
                            </div>
                        </div>
                    </div>
                    <div className="md:border-s-3 border-[#2A2A2A] lg:ps-[60px] md:ps-[40px]">
                        <h2 className="font-bold lg:text-[42px] text-4xl text-gradient-OrangeRed border-b-2 border-[#2A2A2A] pb-5">Book a FREE Trial Class</h2>
                        <p className="font-normal text-white/75 lg:text-[22px] text-xl pt-7">Please fill out the below form. Our team will be in touch shortly.</p>
                        <form className="sm:pt-6 pt-4">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="name" className="text-white font-medium text-lg mb-[6px]">Full Name*</label>
                                <input type="text" name="name" id="" placeholder="Your first & last name" className="border border-[#949AA5] bg-white py-[16px] px-[24px] 2xl:text-xl text-lg" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="phone" className="text-white font-medium text-lg mb-[6px]">Phone Number*</label>
                                <input type="tel" name="phone" id="" placeholder="Mobile number e.g: 0444786999" className="border border-[#949AA5] bg-white py-[16px] px-[24px] 2xl:text-xl text-lg" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="couse" className="text-white font-medium text-lg mb-[6px]">Course Interested in*</label>
                                <select name="couse" id="Select an option" className="border border-[#949AA5] bg-white py-[16px] px-[24px] 2xl:text-xl text-lg relative"> 
                                    <option value="default" defaultValue={'Select an option'}>Select an option</option>
                                    <option value="PTE">PTE</option>
                                    <option value="NAATI CCL">NAATI CCL</option>
                                    <option value="IELTS">IELTS</option>
                                    <option value="Other Inquiry">OTHER INQUIRY</option>
                                </select>
                            </div>
                            <span className="font-normal text-[#949AA4] text-base py-3 block">Your information will be used to consider and fulfill your request and will be handled pursuant to our <a href="#" className="underline">Privacy Policy.</a></span>
                            <button type="submit"
                                href="#"
                                className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-OrangeRed text-white px-3 py-4 w-full font-bold sm:text-xl text-lg relative z-10 mt-4"
                            >
                               Get In Touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookFreeTrail;