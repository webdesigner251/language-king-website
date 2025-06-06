import checkmark from "../assets/icons/checkmark.svg";
import CallIcon from "../assets/icons/call-icon.svg";
import MemberIcon from "../assets/icons/member-icon.svg";
import PhoneICon from "../assets/icons/landline-phone.svg";
import CalenderIcon from "../assets/icons/calender-icon.svg";

const Thankyou = () => {
  return (
    <>
      <div className="text-center">
        <img
          src={checkmark}
          alt="checkmark"
          className="mx-auto sm:w-[60px] w-[50px] mb-2 h-auto zoom-pulse"
        />
        <h2 className="font-bold lg:text-[42px] text-4xl text-center text-[#00C360] py-2">
          Thank You!
        </h2>
        <h3 className="font-medium sm:text-xl text-lg text-white">
          We’ve received your information.
        </h3>

        <div className="bg-[#252525] rounded-3xl sm:p-7 p-5 mt-6">
          <h3 className="font-bold md:text-[34px] tracking-[1px] text-2xl text-white border-b-2 border-[#3D3D3D] max-w-[88%] mx-auto pb-4">
            What Happens Next?
          </h3>

          <div className="grid grid-cols-1 gap-7 mt-4 text-start">
            <div className="flex items-start gap-7 text-white font-medium md:text-xl sm:text-lg text-base">
              <img
                src={CallIcon}
                alt="checklist"
                className="w-[32px] h-[32px] mt-1"
              />
              We’ll call you within 24 hours to discuss available time slots and
              book your preferred schedule.
            </div>
            <div className="flex items-start gap-7 text-white font-medium md:text-xl sm:text-lg text-base">
              <img
                src={MemberIcon}
                alt="checklist"
                className="w-[32px] h-[32px] mt-1"
              />
              Our team will review your course interest and prepare your
              personalized trial class.
            </div>

            <div className="bg-[#121212] rounded-2xl p-3  w-full mx-auto flex flex-col justify-center">
              <h4 className="font-bold md:text-2xl text-xl text-white  mx-auto pb-4 text-center">
                Need immediate assistance?{" "}
              </h4>

              <ul className="flex flex-col gap-[18px] max-w-auto mx-auto">
                <li>
                  <a
                    href="tel:+61488876999"
                    className="flex items-center gap-4 text-white font-semibold sm:text-lg text-sm"
                  >
                    <img src={PhoneICon} className="w-8" />
                    +61 488 877 999 &nbsp; / &nbsp; +61 444 876 555
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+61488876999"
                    className="flex items-start gap-5 text-white font-semibold sm:text-lg text-sm"
                  >
                    <img src={CalenderIcon} className="w-8" />
                    <span>
                      10 A.M to 7 P.M <br />
                      <span className="italic text-[#abaaa6] font-normal block text-sm">
                        (Mon - Sun | Melbourne Time)
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
