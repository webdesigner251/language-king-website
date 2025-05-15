import React from "react";
import QuoteIcon from '../assets/icons/quote-icon.svg'
const Testimonials = () => {
    return (
        <>
            <section className="pt-[130px] pb-[77px]">
                <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full relative z-10">
                    <div className="grid grid-cols-2 gap-x-[120px]">
                        <div>
                            <h1 className="font-inter font-bold main-heading 2xl:mt-2 mt-0 text-white">
                                Why Students Love Learning With Us
                            </h1>
                            <hr className="border-y-[#252525] my-[40px]" />
                            <div className="relative ps-[30px] text-[#B7B7B7] text-xl">
                                <img src={QuoteIcon} alt="QuoteIcon" className=" -ml-7"/>
                                When I started my journey I really thought that it would be impossible for me to clear he test due to my background. xxxxxxxxxxxxx
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials