import { useState } from "react";
import BannerBg from "../assets/ebook/e-book-bg.png";
import NewTipsImage from "../assets/ebook/new-tips.png";
import avatar from "../assets/avatar-img.png";
import CheckmarkYellow from "../assets/icons/checkmark-yellow.svg";
import Book1 from "../assets/ebook/book1.png";
import Book2 from "../assets/ebook/book2.png";
import Book3 from "../assets/ebook/book3.png";
import Book4 from "../assets/ebook/book4.png";
// import video from "../assets/videos/placeholder-video.mp4";
import BGgradient from "../assets/ebook/gradient.png";
import Rectangle from "../assets/ebook/rectangle.png";
import badge from "../assets/ebook/badge.png";
import Plus from "../assets/icons/plus.svg";
import { Link } from "react-router-dom";

// import checkmark from "../assets/icons/green-checkmark.svg";
// import EmailIcon from "../assets/icons/green-email-icon.svg";

const faqs = [
  {
    question: "Why is there a $0.99 charge for Free Trial?",
    answer:
      "The $0.99 charge is a small, one-time fee to help us verify your identity and prevent misuse of our free offer. This minimal amount ensures genuine sign-ups and helps maintain a secure platform. The charge is non-refundable but confirms your access to the free E-Book/ PDF for one week.",
  },
  {
    question: "Is the E-Book really free?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "How long do I have access to the E-Book?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "What if I don’t receive the E-book on email?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "Can I use a temporary or disposable email for verification?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question:
      "How do I cancel or delete my account after downloading the eBook?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "What happens after my free 1-week access ends?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "Is my information secure?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
];

const PlusIcon = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 45 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2.87183"
      width="41"
      height="41"
      rx="10"
      stroke="white"
      stroke-opacity="0.5"
      stroke-width="4"
      stroke-linejoin="round"
    />
    <path
      d="M15 23.8718H30"
      stroke="white"
      stroke-opacity="0.5"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5 31.3718V16.3718"
      stroke="white"
      stroke-opacity="0.5"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 45 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2.87183"
      width="41"
      height="41"
      rx="10"
      stroke="white"
      stroke-width="4"
      stroke-linejoin="round"
    />
    <path
      d="M15 23.8718H30"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const FreeEBook = () => {
  // const [count, setCount] = useState(0);

  // const increment = () => setCount((prev) => prev + 1);
  // const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  // FAq section
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [selected, setSelected] = useState("ebook");
  const [selectedBox, setSelectedBox] = useState("aiportal");

  return (
    <>
      <div className="bg-black w-full h-[120px] mt-[-120px]">

      </div>
      <section className="2xl:pt-[80px] sm:pt-[70px] pt-[60px] sm:pb-[60px] pb-[40px] relative flex flex-column justify-center items-center lg:mt-0 mt-0 min-h-[90vh] border-b border-[#707070]">
        <div className="sm:bg-transparent bg-gradient-FadetoBlack h-full w-full absolute top-0 z-10 lg:hidden block"></div>
        <img
          src={BannerBg}
          alt="BannerBg"
          className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        />
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full z-10 relative">
          <div className="flex 2xl:gap-x-[100px] xl:gap-x-[100px] gap-x-[140px] sm:flex-nowrap flex-wrap">
            <div className="sm:w-[20%] w-full flex flex-col justify-between">
              <img
                src={NewTipsImage}
                alt="NewTipsImage"
                className="h-auto xl:max-w-[250px] max-w-[200px] -mt-[20px] sm:mx-0 mx-auto"
              />
              <span className="uppercase font-semibold text-white/50 sm:block hidden">
                LEARN FROM THE EXPERT + MORE:
              </span>
              <div className="sm:flex items-center gap-3 mt-[32px] hidden">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-[50px] h-[50px] rounded-full border-4 border-white/10"
                />
                <div>
                  <span className="text-white text-lg font-semibold">
                    Abhishek
                  </span>
                  <h3 className="text-base font-light text-white/60 leading-[1.2]">
                    PTE Master Trainer
                  </h3>
                </div>
              </div>
            </div>
            <div className="sm:w-[80%]">
              <div className="flex flex-col justify-between gap-y-[50px] h-full">
                <div className="flex lg:flex-nowrap flex-wrap gap-5 justify-between lg:pe-[30px]">
                  <div className="lg:max-w-[70%] max-w-full">
                    <h1 className="text-white main-heading font-bold">
                      PTE Reading Blanks{" "}
                      <span className="text-[#F1CD5A] block">Free E-book</span>
                    </h1>
                    <p className="font-light md:text-lg sm:leading-[28px] leading-[22px] sm:text-base max-w-[800px] text-sm text-white mt-3">
                      Learn how to solve PTE Reading Blanks with confidence,
                      master linkers, starters, and connectors, test your skills
                      with an interactive quiz, and boost your score
                      effortlessly
                    </p>
                  </div>
                  <div className="lg:max-w-[30%] max-w-full lg:block hidden">
                    <h2 className="text-white xl:text-lg text-base font-bold my-[25px]">
                      YOU’LL LEARN HOW TO:
                    </h2>
                    <ul className="">
                      <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-base text-sm text-white sm:gap-7 gap-4 py-2">
                        <img
                          src={CheckmarkYellow}
                          alt="CheckmarkYellow"
                          className="w-4"
                        />
                        Attempt R&W blanks
                      </li>
                      <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-base text-sm text-white sm:gap-7 gap-4 py-2">
                        <img
                          src={CheckmarkYellow}
                          alt="CheckmarkYellow"
                          className="w-4"
                        />
                        Difference b/w linkers, <br /> starters and connectors
                      </li>
                      <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-base text-sm text-white sm:gap-7 gap-4 py-2">
                        <img
                          src={CheckmarkYellow}
                          alt="CheckmarkYellow"
                          className="w-4"
                        />
                        Quiz to test your learning
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:max-w-[70%] max-w-full flex lg:flex-nowrap flex-wrap items-center sm:justify-start justify-center lg:gap-[40px] sm:gap-7 gap-4 sm:order-0 -order-1 ">
                  <div className="relative rounded-lg sm:w-auto w-full ">
                    <a
                      href="#"
                      className="align-middle inline-flex items-center justify-center text-center primary-btn primary-btn-rounded bg-gradient-primary text-black px-3 sm:py-3 py-[14px] font-normal  sm:text-xl text-lg relative z-10 sm:min-w-[242px] sm:w-auto w-full rounded-lg "
                    >
                      Start 7-Day Trial
                    </a>
                  </div>
                  <div>
                    <h4 className="text-[#F1CD5A] text-lg font-semibold sm:text-start text-center">
                      Save $33 by using AI Portal{" "}
                      <span className="sm:inline hidden">
                        + Prediction File + 6 Books
                      </span>
                    </h4>
                    <span className="uppercase font-semibold text-white/50 text-[13px] mt-[5px] sm:inline hidden">
                      See below
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex sm:flex-nowrap flex-wrap sm:mt-[25px ] items-end sm:gap-0 gap-[20px]">
                    <div className="sm:w-[25%] w-full">
                      <span className="text-white md:text-lg sm:text-base text-sm font-semibold">
                        Other Books
                      </span>
                      <h3 className="sm:text-base text-sm font-light text-white/60 leading-[1.2]">
                        PTE Study Material
                      </h3>
                    </div>
                    <div className="sm:w-[75%] w-full sm:grid grid-cols-4 flex justify-between gap-[20px]">
                      <img
                        src={Book1}
                        alt="Book1"
                        className="w-auto h-[61px] max-w-[50px]"
                      />
                      <img
                        src={Book2}
                        alt="Book2"
                        className="w-auto h-[61px] max-w-[50px]"
                      />
                      <img
                        src={Book3}
                        alt="Book3"
                        className="w-auto h-[61px] max-w-[50px]"
                      />
                      <img
                        src={Book4}
                        alt="Book4"
                        className="w-auto h-[61px] max-w-[50px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <img
          src={BGgradient}
          alt="BGgradient"
          className="w-full h-full object-cover absolute top-0 left-0 right-0"
        />
        <div className="custom-container mx-auto sm:py-[64px] py-[40px] px-4 sm:px-[32px] w-full z-10 relative ">
          <div className="flex lg:flex-nowrap flex-wrap 2xl:gap-[150px] lg:gap-[80px] gap-[40px]">
            {/* Desktop Box */}
            <div className="lg:w-[60%] w-full sm:inline hidden">
              <div
                onClick={() => setSelectedBox("ebook")}
                className={`cursor-pointer border-4 bg-[#1B1B1B] mb-[33px]  rounded-[10px] ${selectedBox === "ebook"
                  ? "border-[#F18C2D]"
                  : "border-[#1B1B1B]"
                  }`}
              >
                {/* E-Book Box content here */}
                <div className=" xl:py-[34px] py-8 xl:px-[38px] px-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold lg:text-[36px] text-[32px] leading-[42px] mb-1">
                      E-Book Only
                    </h3>
                    <span className="text-[#B8B8B8] font-normal text-xl">
                      Get 7-days Free Trial
                    </span>
                  </div>
                  <div className="flex 2xl:gap-[45px] gap-[32px]">
                    <h4 className="text-[#00FEFC] 2xl:text-[42px] xl:text-[36px] text-[30px] font-bold ">
                      $0.99
                    </h4>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setSelectedBox("aiportal")}
                className={`cursor-pointer border-4 ${selectedBox === "aiportal"
                  ? "border-[#F18C2D]"
                  : "border-[#1B1B1B]"
                  } rounded-[6px] bg-[#1B1B1B]`}
              >
                {/* AI Portal Box content here */}
                <div className=" ">
                  <div className="flex xl:p-[32px] p-6 xl:gap-[42px] gap-[28px] border-b-2 border-white border-dashed">
                    <img
                      src={Rectangle}
                      alt="Rectangle"
                      className="w-3xl:w-[27%] w-[32%] object-cover"
                    />
                    <div className="w-3xl:w-[70%] w-[68%] flex flex-col justify-between">
                      <div>
                        <h3 className="text-[#F3F2F3] lg:text-[36px] text-[32px] leading-[42px] font-bold">
                          6 Month AI Portal
                        </h3>
                        <ul className="text-xl text-[#B8B8B8] font-normal mt-1">
                          <li className="py-[2px]">- 10 Full Mock Tests</li>
                          <li className="py-[2px]">- 20 Sectional Tests</li>
                          <li className="py-[2px]">- 5000+ Exam Questions</li>
                          <li className="py-[2px]">- 5 Books Included</li>
                        </ul>
                      </div>
                      <div className="flex justify-end items-center 2xl:gap-[60px] gap-[30px] mt-[25px]">
                        <h4 className="text-[#B0B0B0] 2xl:text-[42px] xl:text-[36px] text-[30px] font-bold line-through">
                          $129
                        </h4>
                        <div className="flex items-center gap-[45px] justify-between">
                          <h4 className="text-[#F0AB0F] 2xl:text-[42px] xl:text-[36px] text-[30px] font-bold ">
                            $99
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-[32px]">
                    <div className="flex justify-between  items-center md:gap-[42px] gap-[28px]">
                      <div>
                        <h3 className="text-white font-bold sm:text-[38px] text-[32px] leading-[1.2]">
                          + Prediction File{" "}
                        </h3>
                        <span className="text-[#B8B8B8] font-normal 2xl:text-xl xl:text-lg text-base">
                          Get monthly updates for 6 months
                        </span>
                      </div>
                      <div className="flex 2xl:gap-[45px] gap-[32px] items-center">
                        <button className="flex items-center gap-3 bg-[#45595A] rounded-[10px] px-4 py-2 text-white font-semibold text-lg cursor-pointer">
                          Add
                          <img src={Plus} alt="plus-icon" className="h-5" />
                        </button>
                        <h4 className="text-[#00FEFC] 2xl:text-[42px] xl:text-[36px] text-[30px] font-bold ">
                          + $9
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[40%] w-full">
              <div className="bg-[#1B1B1B] xl:p-[42px] sm:p-8 px-4 py-6 rounded-[10px]">
                <div className="sm:block hidden">
                  <div className="flex justify-between gap-4">
                    <h4 className="font-semibold text-white xl:text-xl text-lg">
                      6 Month AI Portal
                    </h4>
                    <div className="">
                      <span className="text-[#B0B0B0] font-bold xl:text-xl leading-[32px] text-lg me-8">
                        $129
                      </span>
                      <span className="text-[#F0AB0F] font-bold xl:text-xl leading-[32px] text-lg">
                        $99
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4">
                    <h4 className="font-semibold text-white xl:text-xl text-lg">
                      Prediction File
                    </h4>
                    <div className="">
                      <span className="text-[#F0AB0F] font-bold xl:text-xl leading-[32px] text-lg">
                        $9
                      </span>
                    </div>
                  </div>
                  <hr className="border-[#3D3D3D] my-[30px]" />
                  <div className="max-w-[400px]">
                    <div className="flex justify-between gap-4 items-center">
                      <div className="w-auto flex-auto">
                        <h4 className="font-semibold text-white xl:text-xl text-lg inline">
                          Your total:{" "}
                        </h4>
                        <span className="text-[#B0B0B0] line-through font-bold xl:text-xl text-lg ps-4">
                          $152
                        </span>
                      </div>
                      <span className="text-[#F0AB0F] font-medium xl:text-xl text-lg">
                        Saving $33!
                      </span>
                    </div>
                    <h4 className="text-[#B0B0B0] font-bold xl:text-[72px] text-6xl leading-[1.1]">
                      $119
                    </h4>
                    <span className="text-[#B0B0B0] font-bold text-base">
                      (GST Included)
                    </span>
                  </div>
                </div>
                {/* Mobile Box */}
                <div className="sm:hidden block">
                  {/* E-Book Only Box */}
                  <div
                    onClick={() => setSelected("ebook")}
                    className={`mb-4 border-4 rounded-[6px] py-[24px] px-[12px] flex gap-5 justify-between items-center cursor-pointer transition-all duration-300
          ${selected === "ebook"
                        ? "border-[#F18C2D] bg-[#0A0A09]"
                        : "border-[#707070] bg-[#1B1B1B]"
                      }`}
                  >
                    <div className="flex gap-2 items-start">
                      {selected === "ebook" && (
                        <img
                          src={badge}
                          alt="Selected Badge"
                          className="object-contain w-7 h-7"
                        />
                      )}
                      <div className="flex flex-col">
                        <h3 className="text-[#F3F2F3] mb-0 2xl:text-[50px] xl:text-[46px] md:text-[38px] sm:text-[26px] text-lg font-bold">
                          E-Book Only
                        </h3>
                        <p className="text-sm text-[#B8B8B8] font-normal my-0">
                          Get 7-days Free Trial
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className={`align-middle inline-flex items-center justify-center text-center primary-btn px-4 py-2 font-bold sm:text-xl text-base relative z-10 rounded-[50px] hover-full-rounded-btn
              ${selected === "ebook"
                            ? "bg-gradient-GreenBlue text-black"
                            : "bg-[#3E3E3D] text-[#BFDF6A]"
                          }`}
                      >
                        $0.99
                      </button>
                    </div>
                  </div>

                  {/* 6 Month AI Portal Box */}
                  <div
                    onClick={() => setSelected("portal")}
                    className={`border-4 rounded-[6px] py-[24px] px-[12px] flex gap-5 justify-between items-center cursor-pointer transition-all duration-300
          ${selected === "portal"
                        ? "border-[#F18C2D] bg-[#0A0A09]"
                        : "border-[#707070] bg-[#1B1B1B]"
                      }`}
                  >
                    <div className="flex gap-2 items-start">
                      {selected === "portal" && (
                        <img
                          src={badge}
                          alt="Selected Badge"
                          className="object-contain w-7 h-7"
                        />
                      )}
                      <div className="flex flex-col">
                        <h3 className="text-[#F3F2F3] mb-0 2xl:text-[50px] xl:text-[46px] md:text-[38px] sm:text-[26px] text-lg font-bold">
                          6 Month AI Portal
                        </h3>
                        <p className="text-sm text-[#B8B8B8] font-normal my-0">
                          Prediction File + 5 Books
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className={`align-middle inline-flex items-center justify-center text-center primary-btn px-4 py-2 font-bold sm:text-xl text-base relative z-10 rounded-[50px] hover-full-rounded-btn
              ${selected === "portal"
                            ? "bg-gradient-GreenBlue text-black"
                            : "bg-[#3E3E3D] text-[#BFDF6A]"
                          }`}
                      >
                        $119
                      </button>
                    </div>
                  </div>
                </div>
                <form className="sm:pt-6 pt-4">
                  <div className="flex flex-col mb-4">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Full Name"
                      className="rounded-md placeholder:text-[#707070] bg-white py-[16px] px-[24px] 2xl:text-lg text-base"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email Address"
                      className="rounded-md placeholder:text-[#707070] bg-white py-[16px] px-[24px] 2xl:text-lg text-base"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <input
                      type="tel"
                      name="tel"
                      id=""
                      placeholder="Mobile number e.g: 0444786999"
                      className="rounded-md placeholder:text-[#707070] bg-white py-[16px] px-[24px] 2xl:text-lg text-base"
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <input
                      type="tel"
                      name="ccn"
                      id=""
                      placeholder="Card Number "
                      className="rounded-md placeholder:text-[#707070] bg-white py-[16px] px-[24px] 2xl:text-lg text-base"
                    />
                  </div>
                  <span className="font-normal text-[#949AA4] md:text-base sm:text-sm text-xs sm:py-3  block">
                    Secure Checkout Powered by
                    <a href="#" className="underline">
                      Stripe
                    </a>
                  </span>

                  <hr className="border-[#3D3D3D] mt-3 sm:mb-[30px] mb-4" />
                  <Link
                    // type="submit"
                    to="/ebook-submit"
                    className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-OrangeRed text-white px-3 py-4 w-full font-bold sm:text-xl text-lg relative z-10 rounded-sm"
                  >
                    Buy Now - $119
                  </Link>
                </form>
              </div>
            </div>
          </div>
          {/* 
          <div className="max-w-[550px] mx-auto bg-black rounded-xl px-7 py-7">
            <div className="text-center">
              <img
                src={checkmark}
                alt="checkmark"
                className="mx-auto sm:w-[60px] w-[50px] mb-2 h-auto zoom-pulse"
              />
              <h2 className="font-bold lg:text-[42px] text-4xl text-center text-[#00C360] py-2">
                Payment Successful
              </h2>
              <h3 className="font-medium sm:text-xl text-base text-white">
                We’ve received your information
              </h3>

              <div className="pt-4 w-full">
                <div className="grid grid-cols-2 py-[3px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Receipt Number:
                  </span>
                  <span className="text-[#E4FAE5] text-end">25393-0095</span>
                </div>

                <div className="grid grid-cols-2 py-[3px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Invoice Number
                  </span>
                  <span className="text-[#E4FAE5] text-end">
                    2025-K00B1-754
                  </span>
                </div>

                <div className="grid grid-cols-2 py-[3px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Payment Method
                  </span>
                  <span className="text-[#E4FAE5] text-end">Visa-4242</span>
                </div>

                <div className="grid grid-cols-2 py-[3px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Transaction ID:
                  </span>
                  <span className="text-[#E4FAE5] text-end">137370531</span>
                </div>
              </div>

              <a
                href="#"
                className="text-2xl text-black bg-[#00DD6C] w-full py-[14.5px] px-4 block mt-4 rounded-md font-bold"
              >
                Download Receipt
              </a>

              <div className="bg-[#252525] rounded-[20px] sm:pt-5 sm:px-7 sm:pb-7 p-4 mt-6">
                <div className="inline-flex items-center justify-center">
                  <h3 className="font-bold xl:text-[34px] md:text-[30px] text-2xl inline mx-auto tracking-[1px] relative  text-white border-text text-center">
                    What Happens Next?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:gap-6 gap-4 mt-7 text-start">
                  <div className="flex items-start sm:gap-7 gap-5  text-white font-medium leading-normal xl:text-xl sm:text-lg text-base">
                    <img
                      src={EmailIcon}
                      alt="checklist"
                      className="sm:w-[32px] w-[28px] sm:h-[32px] h-[28px] mt-1"
                    />
                    You'll receive an E-mail in the next few mins. Follow the
                    steps to access your E-book and start learning.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-y border-[#707070] relative z-10">
          <div className="custom-container mx-auto md:py-[100px] sm:py-[70px] py-[40px] px-4 sm:px-[32px] w-full z-10 relative">
            <h2 className="font-inter font-normal main-heading 2xl:mt-2 mt-0 text-white text-center sm:mb-10 mb-5">
              FAQ
            </h2>
            <div className="max-w-4xl mx-auto sm:p-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`py-4 ${index !== faqs.length - 1 ? "border-b border-[#9D9B9B]" : ""
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left gap-4"
                  >
                    <span className="md:text-[22px] sm:text-xl text-lg font-bold leading-[28px] text-white w-[calc(100%-28px)] sm:w-[calc(100%-35px)]">
                      {faq.question}
                    </span>
                    <span className="w-[28px] sm:w-[35px] basis-[28px] sm:basis-[35px] flex items-center justify-center">
                      {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  {openIndex === index && faq.answer && (
                    <div className="sm:mt-4 mt-2 md:text-lg sm:text-lg font-medium text-base text-white/50 max-w-[93%]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeEBook;
