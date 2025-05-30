import React, { useState } from "react";
import PhoneInput from "./PhoneInput";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        course: "default",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10,}$/.test(formData.phone.trim())) {
            newErrors.phone = "Enter a valid phone number";
        }
        if (formData.course === "default") {
            newErrors.course = "Please select a course";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted", formData);
            // Add form submission logic here
        }
    };

    return (
        <div className="bg-white rounded-[9px] md:p-[44px] sm:p-5 p-4">
            <p
                className="font-normal leading-[22px] tracking-[0.011em] text-black lg:text-lg sm:text-base text-sm"
                style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.3)" }}
            >
                Please fill out the below form. Our team will be in touch shortly.
            </p>
            <form className="sm:pt-6 pt-4" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="text-black font-bold text-sm mb-[6px]">
                        Full Name*
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your first & last name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`border-2 rounded-md bg-white py-[16px] px-[24px] 2xl:text-lg text-base ${errors.name ? "border-red-500" : "border-[#949AA5]"
                            }`}
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="phone" className="text-black font-bold text-sm mb-[6px]">
                        Phone Number*
                    </label>
                    <PhoneInput
                        formData={formData}
                        setFormData={setFormData}
                        errors={errors}
                        inputClassName="w-full border-2 rounded-md bg-white"
                    />

                </div>

                {/* Course Interested In */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="course" className="text-black font-bold text-sm mb-[6px]">
                        Course Interested in*
                    </label>
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className={`border-2 rounded-md bg-white py-[16px] px-[24px] 2xl:text-lg text-base 
      ${errors.course ? "border-red-500" : "border-[#949AA5]"} 
      ${formData.course === "default" ? "text-[#919191]" : "text-black"}
    `}
                    >
                        <option value="default" disabled>
                            Select an option
                        </option>
                        <option value="PTE">PTE</option>
                        <option value="NAATI CCL">NAATI CCL</option>
                        <option value="IELTS">IELTS</option>
                        <option value="Other Inquiry">OTHER INQUIRY</option>
                    </select>
                    {errors.course && <span className="text-red-500 text-xs mt-1">{errors.course}</span>}
                </div>


                {/* Privacy Notice */}
                <span className="font-normal text-[#949AA4] md:text-base sm:text-sm text-xs py-3 block">
                    Your information will be used to consider and fulfill your request and will be handled pursuant to our{" "}
                    <a href="#" className="underline">Privacy Policy</a>.
                </span>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="align-middle inline-flex items-center justify-center text-center primary-btn bg-[#E42552] text-white px-3 py-4 w-full font-bold sm:text-xl text-lg relative z-10 mt-4 rounded-md"
                >
                    Get In Touch
                </button>
            </form>
        </div>
    );
};

export default GetInTouch;
