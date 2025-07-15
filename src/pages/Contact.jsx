import CheckmarkGray from "../assets/icons/checkmark-gray.svg";
import PinkQuote from "../assets/icons/pink-quote.svg";
import ContactImage1 from "../assets/contact/contact1.png";
import ContactImage2 from "../assets/contact/contact2.png";
import ContactImage3 from "../assets/contact/contact3.png";
import ContactImage4 from "../assets/contact/contact4.png";
import ContactMobileImage from "../assets/contact/contactMobile.png";
import facebookIcon from "../assets/icons/facebook-dark.svg";
import InstaIcon from "../assets/icons/instagram-dark.svg";
import TiktokIcon from "../assets/icons/tiktok-dark.svg";
import facebookIconLight from "../assets/icons/facebook-icon-light.svg";
import InstaIconLight from "../assets/icons/instagram-icon-light.svg";
import TiktokIconLight from "../assets/icons/tiktok-icon-light.svg";
import GetInTouch from "../components/Get-in-touch";

const faqs = [
  {
    question: "1. Do you offer refunds?",
    answer: `We don’t offer any refund in any given circumstances. Nevertheless, a refund is possible, in case, you are charged extra due to a technical problem. The refund request should be initiated within 24 hours by sending an email with all the details on <strong class="text-white"><a href="mailto:info@languageking.com.au">info@languageking.com.au</a></strong>`,
  },
  {
    question:
      "2. What happens if I am unable to attend a class after enrolling?",
    answer:
      "In the case that you’re unable to attend a class, we may be able to provide access to recorded sessions (if available), but there are no refunds or transfers.",
  },
  {
    question: "3. What if I miss a class?",
    answer:
      "If you miss a class, please contact us right away. We will provide you with information on how to catch up, such as access to recorded sessions or additional study materials, depending on the course structure.",
  },
  {
    question:
      "4. Can I get a partial refund if I have attended only part of the course?",
    answer:
      "No, partial refunds are not available. All payments are final, and we recommend considering your schedule and readiness before enrolling in a course.",
  },
  {
    question:
      "5. Can I transfer my course to someone else if I am unable to attend?",
    answer:
      "Course transfers to other individuals are not permitted. Once you have enrolled, the course is non-transferable.",
  },
  {
    question: "6. What if I’m unhappy with the course content or coaching?",
    answer:
      "We strive to provide high-quality content and personalized coaching. If you have concerns or are dissatisfied, we encourage you to reach out to us. While we don’t offer refunds, we do welcome feedback and may be able to offer alternative solutions such as additional support or resources.",
  },
  {
    question: "7. Can I switch to a different course after enrolment?",
    answer:
      "Course switches are not permitted once you’ve enrolled in a particular course. However, you may reach out to us if you need guidance on which course is the best fit before enrolling.",
  },
  {
    question: "8. What if the institute cancels a course or session?",
    answer:
      "In the unlikely event that we need to cancel a class or course, we will notify you as soon as possible and offer alternatives such as rescheduling or access to other classes. In such cases, we will work to ensure you can complete your learning experience with us.",
  },
  {
    question: "9. Can I pause or defer my course?",
    answer:
      "We do not offer the option to pause or defer a course. Courses have a fixed duration that starts from the date of enrollment and follows the course timeline, regardless of attendance. If you miss a class, we encourage you to catch up with the provided recordings or support from our instructors.",
  },
  {
    question:
      "10. What should I do if I have questions about the course or need help?",
    answer:
      "You can contact our support team at [email/phone number] with any questions or concerns about your course.",
  },
  {
    question: "11. Can I extend my course?",
    answer:
      "Yes, you can extend your course for an additional fee. Please contact us at [email/phone number] for details. Extensions must be requested before the course expires; otherwise, there will be a fresh enrolment.",
  },
];

const Contact = () => {
  return (
    // <>
    //   <section className="md:pt-[70px] pt-[100px] sm:mt-[-120px] mt-[-80px]">
    //     <div className="custom-container mx-auto px-4 sm:px-[32px] w-full relative z-10">
    //       <div className=" md:pt-[100px] sm:pt-[70px] pt-[60px] sm:pb-[54px]">
    //         <div className="flex md:flex-nowrap justify-between flex-wrap lg:gap-[50px] gap-[30px]">
    //           <div className="2xl:w-[60%] lg:w-[55%] md:w-[50%] w-full">
    //             <h2 class="lg:text-[52px] sm:text-[42px] text-[32px] leading-[1.2] -mt-[10px] font-bold text-white text-left lg:max-w-full md:max-w-[340px]">
    //               Get in touch with us
    //             </h2>
    //             <p className="relative text-[#B7B7B7] text-lg max-w-[600px] my-3">
    //               Contact us on xxxxxxxxx/ xxxxxxxxx
    //             </p>
    //             {/* Mobile Form */}
    //             <div className="md:hidden block pt-3">
    //               <GetInTouch />
    //             </div>
    //             <div className="lg:my-[60px] my-[50px]">
    //               <h3 className="text-white font-bold md:text-2xl sm:text-xl text-lg">
    //                 Why Language King?
    //               </h3>
    //               <ul className="mt-5 sm:ps-5 gap-5 max-w-[690px]">
    //                 <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-3">
    //                   <img
    //                     src={CheckmarkGray}
    //                     alt="CheckmarkGray"
    //                     className="w-4 pt-1"
    //                   />
    //                   Learn from 8 each tutors. The best way to crack any exam
    //                   is to learn from the person who has cracked it.
    //                 </li>
    //                 <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-3">
    //                   <img
    //                     src={CheckmarkGray}
    //                     alt="CheckmarkGray"
    //                     className="w-4 pt-1"
    //                   />
    //                   Stay up-to-date with changes in exam, and learn the latest
    //                   strategies from carefully designed video lectures by
    //                   Abhishek, PTE & NAATI Master Trainer.
    //                 </li>
    //                 <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-3">
    //                   <img
    //                     src={CheckmarkGray}
    //                     alt="CheckmarkGray"
    //                     className="w-4 pt-1"
    //                   />
    //                   1-to-1 feedback from experts & personalized timetable to
    //                   fit your busy schedule, learn from the comfort of your
    //                   home while sipping coffee.
    //                 </li>
    //                 <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-3">
    //                   <img
    //                     src={CheckmarkGray}
    //                     alt="CheckmarkGray"
    //                     className="w-4 pt-1"
    //                   />
    //                   Access to AI based portal with real time scoring, 5000+
    //                   practice questions, including sectional and full mock
    //                   test.
    //                 </li>
    //               </ul>
    //             </div>
    //             <div className="flex sm:gap-5 gap-3 max-w-[700px]">
    //               <img
    //                 src={PinkQuote}
    //                 alt="PinkQuote"
    //                 className="-mt-[80px] sm:w-[50px] w-8"
    //               />
    //               <p className="lg:text-2xl sm:text-xl text-base text-white">
    //                 Language King is perfect for new or struggling students,
    //                 offering expert feedback and guidance to help achieve
    //                 desired scores.
    //               </p>
    //             </div>
    //           </div>
    //           {/* Desktop Form */}
    //           <div className="lg:w-[532px] md:w-[50%] w-full md:block hidden">
    //             <GetInTouch />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="sm:pt-[70px] md:pb-[100px] sm:pb-[80px] ">
    //     <div className="custom-container mx-auto px-0 sm:px-[32px] w-full relative z-10">
    //       <div className="flex md:flex-nowrap justify-between flex-wrap gap-[50px]">
    //         <div className="2xl:w-[60%] md:w-[50%] w-full md:flex hidden ps-8 flex-col gap-[150px] sm:pt-[26px]">
    //           <div className="lg:max-w-[670px] max-w-[560px]">
    //             <img
    //               src={ContactImage1}
    //               alt="ContactImage1"
    //               className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[4deg] w-full"
    //             />
    //           </div>
    //           <div className="lg:max-w-[670px] max-w-[560px]">
    //             <img
    //               src={ContactImage2}
    //               alt="ContactImage1"
    //               className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[-7deg] w-full"
    //             />
    //           </div>
    //           <div className="lg:max-w-[670px] max-w-[560px]">
    //             <img
    //               src={ContactImage3}
    //               alt="ContactImage1"
    //               className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[3deg] w-full"
    //             />
    //           </div>
    //           <div className="lg:max-w-[670px] max-w-[560px]">
    //             <img
    //               src={ContactImage4}
    //               alt="ContactImage1"
    //               className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[4.5deg] w-full"
    //             />
    //           </div>
    //         </div>
    //         <div className="lg:w-[532px] md:w-[50%] w-full md:block hidden">
    //           <h3 className="uppercase text-white md:text-[25px] sm:text-xl text-lg font-bold pb-1 border-b-2 border-white">
    //             FREQUENTLY ASKED QUESTIONS
    //           </h3>

    //           <div className="mt-6">
    //             {faqs.map((faq, idx) => (
    //               <div key={idx} className="mb-4 3xl:text-xl text-lg">
    //                 <h3 className="text-white font-bold">{faq.question}</h3>
    //                 <p
    //                   className="pt-1 text-[#cacaca] text-base font-normal leading-[24px]"
    //                   dangerouslySetInnerHTML={{ __html: faq.answer }}
    //                 />
    //               </div>
    //             ))}
    //           </div>

    //           <div className="flex flex-col items-start gap-[22px] mt-[120px]">
    //             <div className="bg-[#1A1A1A] py-[14px] ps-[14px] pe-[35px] rounded-[100px] flex items-center gap-4 group transition-all duration-300 ease hover:bg-white">
    //               <img
    //                 src={facebookIcon}
    //                 alt="facebookIcon"
    //                 className="w-14 h-14 group-hover:hidden transition-all duration-300 ease"
    //               />
    //               <img
    //                 src={facebookIconLight}
    //                 alt="facebookIcon"
    //                 className="w-14 h-14 hidden group-hover:flex transition-all duration-300 ease"
    //               />
    //               <div>
    //                 <h4 className="font-aileron sm:text-lg text-base  text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
    //                   Join the Facebook Community
    //                 </h4>
    //                 <span className="text-sm text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
    //                   facebook.com/languageking
    //                 </span>
    //               </div>
    //             </div>
    //             <div className="bg-[#1A1A1A] py-[14px] ps-[14px] pe-[45px] rounded-[100px] flex items-center gap-4 group transition-all duration-300 ease hover:bg-white">
    //               <img
    //                 src={InstaIcon}
    //                 alt="InstaIcon"
    //                 className="w-14 h-14 group-hover:hidden transition-all duration-300 ease"
    //               />
    //               <img
    //                 src={InstaIconLight}
    //                 alt="facebookIcon"
    //                 className="w-14 h-14 hidden group-hover:flex transition-all duration-300 ease"
    //               />
    //               <div>
    //                 <h4 className="font-aileron sm:text-lg text-base  text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
    //                   Follow us on Instagram
    //                 </h4>
    //                 <span className="text-sm text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
    //                   instagram.com/languageking
    //                 </span>
    //               </div>
    //             </div>
    //             <div className="bg-[#1A1A1A] py-[14px] ps-[14px] pe-[35px] rounded-[100px] flex items-center gap-4 group transition-all duration-300 ease hover:bg-white">
    //               <img
    //                 src={TiktokIcon}
    //                 alt="TiktokIcon"
    //                 className="w-14 h-14 group-hover:hidden transition-all duration-300 ease"
    //               />
    //               <img
    //                 src={TiktokIconLight}
    //                 alt="facebookIcon"
    //                 className="w-14 h-14 hidden group-hover:flex transition-all duration-300 ease"
    //               />
    //               <div>
    //                 <h4 className="font-aileron sm:text-lg text-base  text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
    //                   Explore our content on TikTok
    //                 </h4>
    //                 <span className="text-sm text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
    //                   tiktok.com/@languageking
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="bg-gradient-redBlack md:hidden pt-[50px] -mb-[40px] ">
    //     <img
    //       src={ContactMobileImage}
    //       alt="contactMobile"
    //       className="w-full h-auto"
    //     />
    //   </section>
    // </>
    <>
      <section className="md:pt-[6.614em] pt-[6.614em] sm:mt-[-120px] mt-[-80px]">
        <div className="custom-container mx-auto px-4 sm:px-[2.116em] w-full relative z-10">
          <div className=" md:pt-[6.614em] sm:pb-[3.571em]">
            <div className="flex md:flex-nowrap justify-between flex-wrap gap-[8.856em]">
              <div className="2xl:w-[60%] lg:w-[55%] md:w-[50%] w-full">
                <h2 class="sm:text-[3.438em] text-[32px] leading-[1.2] -mt-[10px] font-bold text-white text-left lg:max-w-full md:max-w-[340px]">
                  Get in touch with us
                </h2>
                <p className="relative text-[#B7B7B7] text-lg max-w-[600px] my-3">
                  Contact us on xxxxxxxxx/ xxxxxxxxx
                </p>
                {/* Mobile Form */}
                <div className="md:hidden block pt-3">
                  <GetInTouch />
                </div>
                <div className="lg:my-[4.376em] my-[50px]">
                  <h3 className="text-white font-bold text-[1.587em] text-lg">
                    Why Language King?
                  </h3>
                  <ul className="mt-[2.292em] sm:ps-[1.094em] gap-5 max-w-[690px]">
                    <li className="flex items-start sm:leading-[1.303em] leading-[1.4] sm:text-[1.042em] text-sm text-[#ACACAC] gap-[2.084em] pb-3">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Learn from 8 each tutors. The best way to crack any exam
                      is to learn from the person who has cracked it.
                    </li>
                    <li className="flex items-start sm:leading-[1.303em] leading-[1.4] sm:text-[1.042em] text-sm text-[#ACACAC] gap-[2.084em] py-3">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Stay up-to-date with changes in exam, and learn the latest
                      strategies from carefully designed video lectures by
                      Abhishek, PTE & NAATI Master Trainer.
                    </li>
                    <li className="flex items-start sm:leading-[1.303em] leading-[1.4] sm:text-[1.042em] text-sm text-[#ACACAC] gap-[2.084em] py-3">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      1-to-1 feedback from experts & personalized timetable to
                      fit your busy schedule, learn from the comfort of your
                      home while sipping coffee.
                    </li>
                    <li className="flex items-start sm:leading-[1.303em] leading-[1.4] sm:text-[1.042em] text-sm text-[#ACACAC] gap-[2.084em] pt-3">
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
                    className="-mt-[80px] sm:w-[3.230em] w-8"
                  />
                  <p className="lg:text-[1.511em] sm:text-xl text-base text-white">
                    Language King is perfect for new or struggling students,
                    offering expert feedback and guidance to help achieve
                    desired scores.
                  </p>
                </div>
              </div>
              {/* Desktop Form */}
              <div className="lg:w-[35.219em] md:w-[50%] w-full md:block hidden">
                <GetInTouch />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:pt-[70px] md:pb-[100px] sm:pb-[80px] ">
        <div className="custom-container mx-auto px-0 sm:px-[32px] w-full relative z-10">
          <div className="flex md:flex-nowrap justify-between flex-wrap gap-[50px]">
            <div className="2xl:w-[60%] md:w-[50%] w-full md:flex hidden ps-8 flex-col gap-[150px] sm:pt-[26px]">
              <div className="lg:max-w-[670px] max-w-[560px]">
                <img
                  src={ContactImage1}
                  alt="ContactImage1"
                  className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[4deg] w-full"
                />
              </div>
              <div className="lg:max-w-[670px] max-w-[560px]">
                <img
                  src={ContactImage2}
                  alt="ContactImage1"
                  className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[-7deg] w-full"
                />
              </div>
              <div className="lg:max-w-[670px] max-w-[560px]">
                <img
                  src={ContactImage3}
                  alt="ContactImage1"
                  className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[3deg] w-full"
                />
              </div>
              <div className="lg:max-w-[670px] max-w-[560px]">
                <img
                  src={ContactImage4}
                  alt="ContactImage1"
                  className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[4.5deg] w-full"
                />
              </div>
            </div>
            <div className="lg:w-[532px] md:w-[50%] w-full md:block hidden">
              <h3 className="uppercase text-white md:text-[25px] sm:text-xl text-lg font-bold pb-1 border-b-2 border-white">
                FREQUENTLY ASKED QUESTIONS
              </h3>

              <div className="mt-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="mb-4 3xl:text-xl text-lg">
                    <h3 className="text-white font-bold">{faq.question}</h3>
                    <p
                      className="pt-1 text-[#cacaca] text-base font-normal leading-[24px]"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-[22px] mt-[120px]">
                <div className="bg-[#1A1A1A] py-[14px] ps-[14px] pe-[35px] rounded-[100px] flex items-center gap-4 group transition-all duration-300 ease hover:bg-white">
                  <img
                    src={facebookIcon}
                    alt="facebookIcon"
                    className="w-14 h-14 group-hover:hidden transition-all duration-300 ease"
                  />
                  <img
                    src={facebookIconLight}
                    alt="facebookIcon"
                    className="w-14 h-14 hidden group-hover:flex transition-all duration-300 ease"
                  />
                  <div>
                    <h4 className="font-aileron sm:text-lg text-base  text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                      Join the Facebook Community
                    </h4>
                    <span className="text-sm text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
                      facebook.com/languageking
                    </span>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] py-[14px] ps-[14px] pe-[45px] rounded-[100px] flex items-center gap-4 group transition-all duration-300 ease hover:bg-white">
                  <img
                    src={InstaIcon}
                    alt="InstaIcon"
                    className="w-14 h-14 group-hover:hidden transition-all duration-300 ease"
                  />
                  <img
                    src={InstaIconLight}
                    alt="facebookIcon"
                    className="w-14 h-14 hidden group-hover:flex transition-all duration-300 ease"
                  />
                  <div>
                    <h4 className="font-aileron sm:text-lg text-base  text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                      Follow us on Instagram
                    </h4>
                    <span className="text-sm text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
                      instagram.com/languageking
                    </span>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] py-[14px] ps-[14px] pe-[35px] rounded-[100px] flex items-center gap-4 group transition-all duration-300 ease hover:bg-white">
                  <img
                    src={TiktokIcon}
                    alt="TiktokIcon"
                    className="w-14 h-14 group-hover:hidden transition-all duration-300 ease"
                  />
                  <img
                    src={TiktokIconLight}
                    alt="facebookIcon"
                    className="w-14 h-14 hidden group-hover:flex transition-all duration-300 ease"
                  />
                  <div>
                    <h4 className="font-aileron sm:text-lg text-base  text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                      Explore our content on TikTok
                    </h4>
                    <span className="text-sm text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
                      tiktok.com/@languageking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-redBlack md:hidden pt-[50px] -mb-[40px] ">
        <img
          src={ContactMobileImage}
          alt="contactMobile"
          className="w-full h-auto"
        />
      </section>
    </>
  );
};

export default Contact;
