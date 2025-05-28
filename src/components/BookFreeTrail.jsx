import React, { useState } from 'react';
// import IntlTelInput from 'intl-tel-input/react';
import personImage from '../assets/person.png'
import checklist from '../assets/icons/checkmark.svg'

const BookFreeTrail = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: 'default',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10,}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Enter a valid phone number';
        }

        if (formData.course === 'default') {
            newErrors.course = 'Please select a course';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            // Submit form logic here
        }
    };

    return (
        <>
            <div className="bg-[#121212] px-4 py-6 sm:px-[32px] sm:py-[44px] border-[1.5px] border-white/10 transition-all duration-300 ease group relative">
                <div className="flex md:flex-nowrap flex-wrap gap-[70px] items-stretch justify-content-between">
                    <div className="md:block hidden md:w-[47.50%]">
                        <img src={personImage} alt="personImage" className="w-full rounded-[11px]" />
                        <h2 className="font-bold text-white lg:text-[40px] text-3xl mt-[32px]">What’s covered in class:</h2>
                        <div className="grid lg:grid-cols-2 grid-cols-1 mt-[42px] gap-7 ">
                            <div className="flex items-center gap-4 text-white font-medium lg:text-[22px] text-xl">
                                <img src={checklist} alt="checklist" className="w-[26px] h-[26px]" />
                                Basic Introduction
                            </div>
                            <div className="flex items-center gap-4 text-white font-medium lg:text-[22px] text-xl">
                                <img src={checklist} alt="checklist" className="w-[26px] h-[26px]" />
                                Test Format & Overview
                            </div>
                            <div className="flex items-center gap-4 text-white font-medium lg:text-[22px] text-xl">
                                <img src={checklist} alt="checklist" className="w-[26px] h-[26px]" />
                                Level of English
                            </div>
                            <div className="flex items-center gap-4 text-white font-medium lg:text-[22px] text-xl">
                                <img src={checklist} alt="checklist" className="w-[26px] h-[26px]" />
                                Scorecard Analysis
                            </div>
                            <div className="flex items-center gap-4 text-white font-medium lg:text-[22px] text-xl">
                                <img src={checklist} alt="checklist" className="w-[26px] h-[26px]" />
                                And more!
                            </div>
                        </div>
                    </div>
                    <div className="md:border-s-3 md:w-[51.50%] border-[#2A2A2A] lg:ps-[70px] md:ps-[70px]">
                        <h2 className="font-bold lg:text-[42px] text-4xl text-gradient-OrangeRed border-b-2 border-[#2A2A2A] pb-5">Book a FREE Trial Class</h2>
                        <p className="font-normal text-white/75 lg:text-[22px] text-xl pt-7">Please fill out the below form. Our team will be in touch shortly.</p>
                        <form className="sm:pt-6 pt-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="name" className="text-white font-semibold text-lg mb-[6px]">
                                    Full Name*
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your first & last name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`placeholder:text-[#919191] bg-white py-[16px] px-[24px] 2xl:text-xl text-lg border ${errors.name ? 'border-red-500' : 'border-[#949AA5]'
                                        }`}
                                />

                                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="phone" className="text-white font-semibold text-lg mb-[6px]">
                                    Phone Number*
                                </label>                               
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Mobile number e.g: 0444786999"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`placeholder:text-[#919191] bg-white py-[16px] px-[24px] 2xl:text-xl text-lg border ${errors.phone ? 'border-red-500' : 'border-[#949AA5]'
                                        }`}
                                />

                                {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="course" className="text-white font-semibold text-lg mb-[6px]">
                                    Course Interested in*
                                </label>
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className={`bg-white py-[16px] px-[24px] 2xl:text-xl text-lg border ${errors.course ? 'border-red-500' : 'border-[#949AA5]'
                                        }`}
                                >
                                    <option value="default" disabled>Select an option</option>
                                    <option value="PTE">PTE</option>
                                    <option value="NAATI CCL">NAATI CCL</option>
                                    <option value="IELTS">IELTS</option>
                                    <option value="Other Inquiry">OTHER INQUIRY</option>
                                </select>
                                {errors.course && <span className="text-red-500 text-sm mt-1">{errors.course}</span>}
                            </div>

                            <span className="font-normal text-[#949AA4] text-base py-3 block">
                                Your information will be used to consider and fulfill your request and will be handled pursuant to our{' '}
                                <a href="#" className="underline">
                                    Privacy Policy.
                                </a>
                            </span>

                            <button
                                type="submit"
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