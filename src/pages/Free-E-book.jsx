import { useState } from "react";
import BannerBg from "../assets/ebook/e-book-bg.png";
import NewTipsImage from "../assets/ebook/new-tips.png";
import avatar from "../assets/avatar-img.png";
import CheckmarkYellow from "../assets/icons/checkmark-yellow.svg";
import Book1 from "../assets/ebook/book1.png";
import Book2 from "../assets/ebook/book2.png";
import Book3 from "../assets/ebook/book3.png";
import Book4 from "../assets/ebook/book4.png";
import video from "../assets/videos/placeholder-video.mp4";
import BGgradient from "../assets/ebook/gradient.png";
import Rectangle from "../assets/ebook/rectangle.png";
import badge from "../assets/ebook/badge.png";

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
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  // FAq section
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="2xl:pt-[140px] sm:pt-[100px] pt-[60px] sm:pb-[60px] pb-[40px] relative flex flex-column justify-center items-center">
        <div className="sm:bg-transparent bg-gradient-FadetoBlack h-full w-full absolute top-0 z-10 lg:hidden block"></div>
        <img
          src={BannerBg}
          alt="BannerBg"
          className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        />
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full z-10 relative ">
          <div className="flex 2xl:gap-x-[190px] xl:gap-x-[100px] gap-x-[140px] sm:flex-nowrap flex-wrap">
            <div className="sm:w-[20%] w-full sm:inline flex justify-center">
              <img
                src={NewTipsImage}
                alt="NewTipsImage"
                className="h-auto 2xl:max-w-[290px] xl:max-w-[250px] max-w-[200px]"
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
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <div className="flex lg:flex-nowrap flex-wrap gap-5 justify-between lg:pe-[30px]">
                    <div className="lg:max-w-[70%] max-w-full">
                      <h1 className="text-white main-heading font-bold">
                        PTE Reading Blanks{" "}
                        <span className="text-[#F1CD5A] block">
                          Free E-book
                        </span>
                      </h1>
                      <p className="font-light xl:text-xl md:text-lg sm:text-base text-sm text-white mt-3">
                        Learn how to solve PTE Reading Blanks with confidence,
                        master linkers, starters, and connectors, test your
                        skills with an interactive quiz, and boost your score
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
                          Difference b/w linkers, <br /> starters and <br />{" "}
                          connectors
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
                  <div className="flex lg:flex-nowrap flex-wrap sm:justify-start justify-center sm:mb-0 mb-[40px] max-w-[900px] lg:gap-[40px] sm:gap-7 gap-4 sm:mt-[80px] mt-[40px] sm:order-0 -order-1">
                    <div className="relative rounded-lg sm:w-auto w-full ">
                      <a
                        href="#"
                        className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-primary text-black px-3 sm:py-3 py-[14px] sm:font-semibold font-bold sm:text-xl text-lg relative z-10 sm:min-w-[292px] sm:w-auto w-full rounded-lg "
                      >
                        Start 7-Day Trial
                      </a>
                    </div>
                    <div>
                      <h4 className="text-[#F1CD5A] xl:text-xl text-lg font-semibold sm:text-start text-center">
                        Save $33 by using AI Portal + Prediction File + 6 Books
                      </h4>
                      <span className="uppercase font-semibold text-white/50 mt-[5px] sm:inline hidden">
                        LEARN FROM THE EXPERT + MORE:
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-nowrap flex-wrap  2xl:mt-[120px] sm:mt-[80px] mt-[25px] items-center sm:gap-0 gap-[20px]">
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
                      className="w-full h-auto max-w-[50px]"
                    />
                    <img
                      src={Book2}
                      alt="Book2"
                      className="w-full h-auto max-w-[50px]"
                    />
                    <img
                      src={Book3}
                      alt="Book3"
                      className="w-full h-auto max-w-[50px]"
                    />
                    <img
                      src={Book4}
                      alt="Book4"
                      className="w-full h-auto max-w-[50px]"
                    />
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
            <div className="lg:w-[60%] w-full sm:inline hidden">
              <div className="bg-[#1B1B1B] mb-[33px] rounded-[10px] xl:py-[44px] py-8 xl:px-[38px] px-6 flex items-center justify-between">
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
                  <div className="flex items-center">
                    <button
                      onClick={decrement}
                      className="xl:w-[44px] xl:h-[44px] w-[36px] h-[36px] p-2 cursor-pointer rounded-full bg-[#3D3D3D] text-white text-center flex items-center justify-center"
                    >
                      <svg
                        width="33"
                        height="5"
                        viewBox="0 0 33 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.2632 4.75123C30.259 4.75123 30.2548 4.75123 30.2548 4.75123L2.44968 4.62931C1.39028 4.62511 0.532668 3.76329 0.541077 2.70389C0.545281 1.64869 1.40289 0.795288 2.45809 0.795288C2.45809 0.795288 2.46229 0.795288 2.4665 0.795288L30.2716 0.917203C31.331 0.921407 32.1844 1.78322 32.1802 2.84262C32.176 3.89782 31.3184 4.75123 30.2632 4.75123Z"
                          fill="white"
                        />
                      </svg>
                    </button>

                    <span className="text-[#B0B0B0] 2xl:text-[42px] xl:text-[36px] text-[30px] 2xl:px-3 px-4 font-semibold text-center">
                      {count}
                    </span>

                    <button
                      onClick={increment}
                      className="xl:w-[44px] xl:h-[44px] w-[36px] h-[36px] p-2 cursor-pointer rounded-full bg-[#3D3D3D] text-white text-center flex items-center justify-center"
                    >
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.9009 1.47397C15.9009 0.999 15.5071 0.605225 15.0118 0.605225H13.2703C12.7588 0.605225 12.3813 0.999 12.3813 1.47397V12.9259H0.929288C0.454323 12.9259 0.0605469 13.3197 0.0605469 13.815V15.5565C0.0605469 16.0721 0.454323 16.4455 0.929288 16.4455H12.3813V27.8975C12.3813 28.3765 12.775 28.7703 13.2703 28.7703H15.0118C15.5274 28.7703 15.9009 28.3765 15.9009 27.8975V16.4455H27.3528C27.8319 16.4455 28.2256 16.0518 28.2256 15.5565V13.815C28.2256 13.3035 27.8319 12.9259 27.3528 12.9259H15.9009V1.47397Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-4 border-[#F18C2D] rounded-[6px] bg-[#1B1B1B]">
                <div className="flex xl:p-[32px] p-6 xl:gap-[42px] gap-[28px] border-b-2 border-white border-dashed">
                  <img
                    src={Rectangle}
                    alt="Rectangle"
                    className="w-[25%] h-[300px] object-cover"
                  />
                  <div className="w-[70%]">
                    <h3 className="text-[#F3F2F3] lg:text-[36px] text-[32px] leading-[42px] font-bold">
                      6 Month AI Portal
                    </h3>
                    <ul className="text-xl text-[#B8B8B8] font-normal mt-1">
                      <li className="py-[2px]">- 10 Full Mock Tests</li>
                      <li className="py-[2px]">- 20 Sectional Tests</li>
                      <li className="py-[2px]">- 5000+ Exam Questions</li>
                      <li className="py-[2px]">- 5 Books Included</li>
                    </ul>
                    <div className="flex justify-end items-center 2xl:gap-[60px] gap-[30px] mt-[25px]">
                      <h4 className="text-[#B0B0B0] 2xl:text-[42px] xl:text-[36px] text-[30px] font-bold line-through">
                        $129
                      </h4>
                      <div className="flex items-center gap-[45px] justify-between">
                        <h4 className="text-[#F0AB0F] 2xl:text-[42px] xl:text-[36px] text-[30px] font-bold ">
                          $99
                        </h4>
                        <div className="flex items-center">
                          <button
                            onClick={decrement}
                            className="xl:w-[44px] xl:h-[44px] w-[36px] h-[36px] p-2 cursor-pointer rounded-full bg-[#3D3D3D] text-white text-center flex items-center justify-center"
                          >
                            <svg
                              width="33"
                              height="5"
                              viewBox="0 0 33 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30.2632 4.75123C30.259 4.75123 30.2548 4.75123 30.2548 4.75123L2.44968 4.62931C1.39028 4.62511 0.532668 3.76329 0.541077 2.70389C0.545281 1.64869 1.40289 0.795288 2.45809 0.795288C2.45809 0.795288 2.46229 0.795288 2.4665 0.795288L30.2716 0.917203C31.331 0.921407 32.1844 1.78322 32.1802 2.84262C32.176 3.89782 31.3184 4.75123 30.2632 4.75123Z"
                                fill="white"
                              />
                            </svg>
                          </button>

                          <span className="text-[#F0AB0F] 2xl:text-[42px] xl:text-[36px] text-[30px] 2xl:px-3 px-4 font-semibold text-center">
                            {count}
                          </span>

                          <button
                            onClick={increment}
                            className="xl:w-[44px] xl:h-[44px] w-[36px] h-[36px] p-2 cursor-pointer rounded-full bg-[#3D3D3D] text-white text-center flex items-center justify-center"
                          >
                            <svg
                              width="29"
                              height="29"
                              viewBox="0 0 29 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.9009 1.47397C15.9009 0.999 15.5071 0.605225 15.0118 0.605225H13.2703C12.7588 0.605225 12.3813 0.999 12.3813 1.47397V12.9259H0.929288C0.454323 12.9259 0.0605469 13.3197 0.0605469 13.815V15.5565C0.0605469 16.0721 0.454323 16.4455 0.929288 16.4455H12.3813V27.8975C12.3813 28.3765 12.775 28.7703 13.2703 28.7703H15.0118C15.5274 28.7703 15.9009 28.3765 15.9009 27.8975V16.4455H27.3528C27.8319 16.4455 28.2256 16.0518 28.2256 15.5565V13.815C28.2256 13.3035 27.8319 12.9259 27.3528 12.9259H15.9009V1.47397Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-[32px]">
                  <div className="flex justify-between  items-center md:gap-[42px] gap-[28px]">
                    <div>
                      <h3 className="text-white font-bold 2xl:text-[50px] xl:text-[46px] text-[38px] leading-[1.2]">
                        + Prediction File{" "}
                      </h3>
                      <span className="text-[#B8B8B8] font-normal 2xl:text-xl xl:text-lg text-base">
                        Get monthly updates for 6 months
                      </span>
                    </div>
                    <div className="flex 2xl:gap-[45px] gap-[32px]">
                      <h4 className="text-[#00FEFC] 2xl:text-[42px] xl:text-[36px] text-[30px] font-bold ">
                        + $9
                      </h4>
                      <div className="flex items-center">
                        <button
                          onClick={decrement}
                          className="xl:w-[44px] xl:h-[44px] w-[36px] h-[36px] p-2 cursor-pointer rounded-full bg-[#3D3D3D] text-white text-center flex items-center justify-center"
                        >
                          <svg
                            width="33"
                            height="5"
                            viewBox="0 0 33 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30.2632 4.75123C30.259 4.75123 30.2548 4.75123 30.2548 4.75123L2.44968 4.62931C1.39028 4.62511 0.532668 3.76329 0.541077 2.70389C0.545281 1.64869 1.40289 0.795288 2.45809 0.795288C2.45809 0.795288 2.46229 0.795288 2.4665 0.795288L30.2716 0.917203C31.331 0.921407 32.1844 1.78322 32.1802 2.84262C32.176 3.89782 31.3184 4.75123 30.2632 4.75123Z"
                              fill="white"
                            />
                          </svg>
                        </button>

                        <span className="text-[#B0B0B0]2xl:text-[42px] xl:text-[36px] text-[30px] 2xl:px-3 px-4 text-white font-semibold text-center">
                          {count}
                        </span>

                        <button
                          onClick={increment}
                          className="xl:w-[44px] xl:h-[44px] w-[36px] h-[36px] p-2 cursor-pointer rounded-full bg-[#3D3D3D] text-white text-center flex items-center justify-center"
                        >
                          <svg
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.9009 1.47397C15.9009 0.999 15.5071 0.605225 15.0118 0.605225H13.2703C12.7588 0.605225 12.3813 0.999 12.3813 1.47397V12.9259H0.929288C0.454323 12.9259 0.0605469 13.3197 0.0605469 13.815V15.5565C0.0605469 16.0721 0.454323 16.4455 0.929288 16.4455H12.3813V27.8975C12.3813 28.3765 12.775 28.7703 13.2703 28.7703H15.0118C15.5274 28.7703 15.9009 28.3765 15.9009 27.8975V16.4455H27.3528C27.8319 16.4455 28.2256 16.0518 28.2256 15.5565V13.815C28.2256 13.3035 27.8319 12.9259 27.3528 12.9259H15.9009V1.47397Z"
                              fill="white"
                            />
                          </svg>
                        </button>
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
                      <span className="text-[#B0B0B0] font-bold xl:text-2xl text-lg me-8">
                        $129
                      </span>
                      <span className="text-[#F0AB0F] font-bold xl:text-2xl text-lg">
                        $99
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4">
                    <h4 className="font-semibold text-white xl:text-xl text-lg">
                      Prediction File
                    </h4>
                    <div className="">
                      <span className="text-[#F0AB0F] font-bold xl:text-2xl text-lg">
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
                        <span className="text-[#B0B0B0] font-bold xl:text-xl text-lg ps-4">
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
                <div className="sm:hidden block">
                  <div className="border-4 mb-4 border-[#707070] rounded-[6px] bg-[#1B1B1B] py-[24px] px-[12px] flex gap-5 justify-between items-center">
                    <div className="">
                      <div className="flex flex-col">
                        <h3 className="text-[#F3F2F3] mb-0 2xl:text-[50px] xl:text-[46px] md:text-[38px] sm:text-[26px] text-xl font-bold">
                          E-Book Only
                        </h3>
                        <p className="text-sm text-[#B8B8B8] font-normal my-0">
                          Get 7-days Free Trial
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="align-middle inline-flex items-center justify-center text-center primary-btn bg-[#3E3E3D] text-[#BFDF6A] px-8 py-4 font-bold sm:text-xl text-lg relative z-10 rounded-[50px] hover-full-rounded-btn"
                      >
                        $0.99
                      </button>
                    </div>
                  </div>

                  <div className="border-4 border-[#F18C2D] rounded-[6px] bg-[#0A0A09] py-[24px] px-[12px] flex gap-5 justify-between items-center">
                    <div className="">
                      <div className="flex  gap-2">
                        <img
                          src={badge}
                          alt="Rectangle"
                          className="object-contain w-7 h-7"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-[#F3F2F3] mb-0 2xl:text-[50px] xl:text-[46px] md:text-[38px] sm:text-[26px] text-xl font-bold">
                            6 Month AI Portal
                          </h3>
                          <p className="text-sm text-[#B8B8B8] font-normal my-0">
                            Prediction File + 5 Books
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-GreenBlue text-black px-8 py-4 font-bold sm:text-xl text-lg relative z-10 rounded-[50px] hover-full-rounded-btn"
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
                  <span className="font-normal text-[#949AA4] md:text-base sm:text-sm text-xs py-3 block">
                    Secure Checkout Powered by
                    <a href="#" className="underline">
                      Stripe
                    </a>
                  </span>

                  <hr className="border-[#3D3D3D] mt-3 mb-[30px]" />
                  <button
                    type="submit"
                    href="#"
                    className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-OrangeRed text-white px-3 py-4 w-full font-bold sm:text-xl text-lg relative z-10 rounded-sm"
                  >
                    Buy Now - $119
                  </button>
                </form>
              </div>
            </div>
          </div>
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
                  className={`py-4 ${
                    index !== faqs.length - 1 ? "border-b border-[#9D9B9B]" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between gap-4 w-full text-left items-center"
                  >
                    <span className="md:text-[22px] sm:text-xl text-lg font-bold leading-[28px] text-white">
                      {faq.question}
                    </span>
                    <span className="sm:w-[35px] w-[28px]">
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
