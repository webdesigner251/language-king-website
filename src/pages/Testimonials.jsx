import QuoteIcon from "../assets/icons/quote-icon.svg";
import PlaceholerImage from "../assets/placeholder.png";
import Mainavatar from "../assets/avatar5.png";
import Russia1 from "../assets/flags/Russia1.png";
import Avatarnew from "../assets/avatar6.png";
import CheckmarkGray from "../assets/icons/checkmark-gray.svg";
import PinkQuote from "../assets/icons/pink-quote.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Data array
const slidesData = [
  {
    id: 1,
    title: "I thought it was not possible at I thought it was not possible at",
    name: "Natalia",
    tag: "8 beach",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
  },
  {
    id: 2,
    title: "Never imagined I could achieve this score!",
    name: "Alex",
    tag: "9 overall",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
  },
  {
    id: 3,
    title: "With dedication, everything is possible!",
    name: "Sophia",
    tag: "8.5 band",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
  },
  {
    id: 4,
    title: "Hard work paid off in the end.",
    name: "Daniel",
    tag: "9 band",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
  },
  {
    id: 5,
    title: "I thought it was not possible at I thought it was not possible at",
    name: "Natalia",
    tag: "8 beach",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
  },
  {
    id: 6,
    title: "I thought it was not possible at I thought it was not possible at",
    name: "Natalia",
    tag: "8 beach",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="md:pt-[100px] pt-[60px] md:pb-[77px] pb-8">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full relative z-10">
          <div className="grid lg:grid-cols-2 xl:gap-[120px] gap-[90px]">
            <div>
              <div className="2xl:max-w-[590px] xl:max-w-[525px] lg:max-w-[440px]">
                <h1 className="font-inter font-bold 2xl:text-[65px] xl:text-[58px] lg:text-[48px] md:text-[42px] text-[38px] leading-[normal] inline-block 2xl:mt-2 mt-0 text-white">
                  Why Students Love Learning With Us
                </h1>
                <img
                  src={PlaceholerImage}
                  alt="PlaceholerImage"
                  className="lg:hidden block w-full py-[50px]"
                />
                <hr className="border-1 border-y-[#252525] my-[40px] lg:block hidden border-max-width" />
              </div>
              <div className="relative ps-[30px] text-[#B7B7B7] md:text-lg sm:text-base text-sm lg:max-w-[600px]">
                <img src={QuoteIcon} alt="QuoteIcon" className=" -ml-7" />
                When I started my journey I really thought that it would be
                impossible for me to clear he test due to my background.
                xxxxxxxxxxxxx
              </div>
              <div className="flex sm:gap-5 gap-4 items-center mt-[50px]">
                <img
                  src={Mainavatar}
                  alt="Mainavatar"
                  className="sm:w-[61px] w-[52px] rounded-[8px]"
                />
                <div className="sm:text-lg text-base">
                  <span className="text-white me-[9px]">Natalia &#9679;</span>
                  <span className="text-white/40 uppercase">
                    PTE & NAATI CCL
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:block hidden">
              <img
                src={PlaceholerImage}
                alt="PlaceholerImage"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sm:py-[30px] pt-[25px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full relative z-10">
          <div className="flex gap-4 justify-between items-center border-b border-[#252525] py-[16px]">
            <h2 className="sm:text-3xl text-[22px] leading-normal font-bold text-white text-left">
              PTE Hall of Fame
            </h2>
            <div className="flex gap-3 justify-end items-center  relative">
              <button className="custom-prev w-10 h-10 p-[15px] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18L2 10L10 2"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="custom-next w-10 h-10 p-[15px] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L10 10L2 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="sm:py-[28px] pt-[24px]">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {slidesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="relative">
                      <img
                        src={item.image}
                        alt="Slide"
                        className="rounded-[10px] w-full sm:h-[240px] h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-35 rounded-[10px]"></div>
                    </div>
                    <p className="truncate text-white md:text-xl sm:text-lg text-base my-2">
                      {item.title}
                    </p>
                    <div className="flex sm:gap-5 gap-4 sm:items-end items-center mt-[20px]">
                      <div className="relative">
                        <img
                          src={item.flag}
                          alt="flag"
                          className="sm:w-5 w-4 sm:h-5 h-4 rounded-sm absolute -top-1 -right-1 z-0"
                        />
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="sm:w-[61px] w-[52px] rounded-[8px] border-2 border-[#D66D11]"
                        />
                      </div>
                      <div className="text-base sm:text-center text-start flex flex-col">
                        <span className="text-white/40 uppercase">
                          {item.name}
                        </span>
                        <span className="text-white text-sm block">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="sm:py-[30px] pt-[25px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full relative z-10">
          <div className="flex gap-4 justify-between items-center border-b border-[#252525] py-[16px]">
            <h2 className="sm:text-3xl text-[22px] leading-normal font-bold text-white text-left">
              NAATI CCL Results
            </h2>
            <div className="flex gap-3 justify-end items-center  relative">
              <button className="custom-prev-new w-10 h-10 p-[15px] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18L2 10L10 2"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="custom-next-new w-10 h-10 p-[15px] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L10 10L2 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="sm:py-[28px] pt-[24px]">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next-new",
                prevEl: ".custom-prev-new",
              }}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {slidesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="relative">
                      <img
                        src={item.image}
                        alt="Slide"
                        className="rounded-[10px] w-full sm:h-[240px] h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-35 rounded-[10px]"></div>
                    </div>
                    <p className="truncate text-white md:text-xl sm:text-lg text-base my-2">
                      {item.title}
                    </p>
                    <div className="flex sm:gap-5 gap-4 sm:items-end items-center mt-[20px]">
                      <div className="relative">
                        <img
                          src={item.flag}
                          alt="flag"
                          className="sm:w-5 w-4 sm:h-5 h-4 rounded-sm absolute -top-1 -right-1 z-0"
                        />
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="sm:w-[61px] w-[52px] rounded-[8px] border-2 border-[#D66D11]"
                        />
                      </div>
                      <div className="text-base sm:text-center text-start flex flex-col">
                        <span className="text-white/40 uppercase">
                          {item.name}
                        </span>
                        <span className="text-white text-sm block">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="pt-[30px]">
        <div className="custom-container mx-auto  px-4 sm:px-[32px] w-full relative z-10">
          <div className="sm:border-y border-t border-[#252525] md:pt-[100px] sm:pt-[70px] pt-[60px] sm:pb-[54px]">
            <div className="flex md:flex-nowrap flex-wrap gap-[50px] md:px-[50px] px-4">
              <div className="lg:w-[60%] md:w-[50%] w-full">
                <h2 class="lg:text-[52px] sm:text-[42px] text-[32px] leading-[1.2] font-bold text-white text-left">
                  Get in touch with us
                </h2>
                <p className="relative text-[#B7B7B7] text-lg max-w-[600px] my-3">
                  Contact us on xxxxxxxxx/ xxxxxxxxx
                </p>
                {/* Mobile Form */}
                <div className="bg-white rounded-[9px] md:p-[44px] sm:p-5 p-4 md:hidden block">
                  <p
                    className="font-normal leading-[22px] tracking-[0.011em] text-black lg:text-lg sm:text-base text-sm"
                    style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    Please fill out the below form. Our team will be in touch
                    shortly.
                  </p>
                  <form className="sm:pt-6 pt-4">
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="name"
                        className="text-black font-medium md:text-lg sm:text-base text-sm mb-[6px]"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Your first & last name"
                        className="border-2 rounded-md border-[#949AA5] bg-white py-[16px] px-[24px] 2xl:text-lg text-base"
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="phone"
                        className="text-black font-medium md:text-lg sm:text-base text-sm mb-[6px]"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id=""
                        placeholder="Mobile number e.g: 0444786999"
                        className="border-2 rounded-md border-[#949AA5] bg-white py-[16px] px-[24px] 2xl:text-lg text-base"
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="couse"
                        className="text-black font-medium md:text-lg sm:text-base text-sm mb-[6px]"
                      >
                        Course Interested in*
                      </label>
                      <select
                        name="couse"
                        id="Select an option"
                        className="border-2 rounded-md border-[#949AA5] bg-white py-[16px] px-[24px] 2xl:text-lg text-base relative"
                      >
                        <option
                          value="default"
                          defaultValue={"Select an option"}
                        >
                          Select an option
                        </option>
                        <option value="PTE">PTE</option>
                        <option value="NAATI CCL">NAATI CCL</option>
                        <option value="IELTS">IELTS</option>
                        <option value="Other Inquiry">OTHER INQUIRY</option>
                      </select>
                    </div>
                    <span className="font-normal text-[#949AA4] md:text-base sm:text-sm text-xs py-3 block">
                      Your information will be used to consider and fulfill your
                      request and will be handled pursuant to our{" "}
                      <a href="#" className="">
                        Privacy Policy.
                      </a>
                    </span>
                    <button
                      type="submit"
                      href="#"
                      className="align-middle inline-flex items-center justify-center text-center primary-btn bg-[#E42552] text-white px-3 py-4 w-full font-bold sm:text-xl text-lg relative z-10 mt-4 rounded-md"
                    >
                      Get In Touch
                    </button>
                  </form>
                </div>
                <div className="lg:my-[80px] my-[50px]">
                  <h3 className="text-white font-bold md:text-[22px] sm:text-xl text-lg">
                    Why Language King?
                  </h3>
                  <ul className="mt-5 sm:ps-5 max-w-[700px]">
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-2">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Learn from 8 each tutors. The best way to crack any exam
                      is to learn from the person who has cracked it.
                    </li>
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-2">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Stay up-to-date with changes in exam, and learn the latest
                      strategies from carefully designed video lectures by
                      Abhishek, PTE & NAATI Master Trainer.
                    </li>
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-2">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      1-to-1 feedback from experts & personalized timetable to
                      fit your busy schedule, learn from the comfort of your
                      home while sipping coffee.
                    </li>
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-2">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Access to AI based portal with real time scoring, 5000+
                      practice questions, including sectional and full mock
                      test.
                    </li>
                  </ul>
                </div>
                <div className="flex sm:gap-5 gap-3 max-w-[700px]">
                  <img
                    src={PinkQuote}
                    alt="PinkQuote"
                    className="-mt-[80px] sm:w-[50px] w-8"
                  />
                  <p className="lg:text-2xl sm:text-xl text-base text-white">
                    Language King is perfect for new or struggling students,
                    offering expert feedback and guidance to help achieve
                    desired scores.
                  </p>
                </div>
              </div>
              {/* Desktop Form */}
              <div className="lg:w-[40%] md:w-[50%] w-full md:block hidden">
                <div className="bg-white rounded-[9px] md:p-[44px] sm:p-5 p-4 ">
                  <p
                    className="font-normal leading-[22px] tracking-[0.011em] text-black lg:text-lg sm:text-base text-sm"
                    style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    Please fill out the below form. Our team will be in touch
                    shortly.
                  </p>
                  <form className="sm:pt-6 pt-4">
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="name"
                        className="text-black font-medium md:text-lg sm:text-base text-sm mb-[6px]"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Your first & last name"
                        className="border-2 rounded-md border-[#949AA5] bg-white py-[16px] px-[24px] 2xl:text-lg text-base"
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="phone"
                        className="text-black font-medium md:text-lg sm:text-base text-sm mb-[6px]"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id=""
                        placeholder="Mobile number e.g: 0444786999"
                        className="border-2 rounded-md border-[#949AA5] bg-white py-[16px] px-[24px] 2xl:text-lg text-base"
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="couse"
                        className="text-black font-medium md:text-lg sm:text-base text-sm mb-[6px]"
                      >
                        Course Interested in*
                      </label>
                      <select
                        name="couse"
                        id="Select an option"
                        className="border-2 rounded-md border-[#949AA5] bg-white py-[16px] px-[24px] 2xl:text-lg text-base relative"
                      >
                        <option
                          value="default"
                          defaultValue={"Select an option"}
                        >
                          Select an option
                        </option>
                        <option value="PTE">PTE</option>
                        <option value="NAATI CCL">NAATI CCL</option>
                        <option value="IELTS">IELTS</option>
                        <option value="Other Inquiry">OTHER INQUIRY</option>
                      </select>
                    </div>
                    <span className="font-normal text-[#949AA4] md:text-base sm:text-sm text-xs py-3 block">
                      Your information will be used to consider and fulfill your
                      request and will be handled pursuant to our{" "}
                      <a href="#" className="">
                        Privacy Policy.
                      </a>
                    </span>
                    <button
                      type="submit"
                      href="#"
                      className="align-middle inline-flex items-center justify-center text-center primary-btn bg-[#E42552] text-white px-3 py-4 w-full font-bold sm:text-xl text-lg relative z-10 mt-4 rounded-md"
                    >
                      Get In Touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
