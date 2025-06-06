import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/utils"; // needed for placeholder formatting

const PhoneInput = ({ formData, setFormData, errors, inputClassName = "" }) => {
  const inputRef = useRef(null);
  const itiRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current; // ✅ capture ref at effect start

    if (!input) return;

    itiRef.current = intlTelInput(input, {
      initialCountry: "auto",
      preferredCountries: ["au", "in", "us"],
      geoIpLookup: (callback) => {
        fetch("https://ipinfo.io/json?token=YOUR_TOKEN") // Replace with actual token
          .then((res) => res.json())
          .then((data) => callback(data?.country || "au"))
          .catch(() => callback("au"));
      },
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js",
      autoPlaceholder: "polite",
      placeholderNumberType: "MOBILE",
      nationalMode: true,
    });

    const updatePlaceholder = () => {
      setTimeout(() => {
        const input = inputRef.current;
        const rawPlaceholder = input?.getAttribute("placeholder");

        if (
          rawPlaceholder &&
          !rawPlaceholder.startsWith("Mobile number e.g:")
        ) {
          input.setAttribute(
            "placeholder",
            `Mobile number e.g: ${rawPlaceholder}`
          );
        }
      }, 0);
    };

    updatePlaceholder();
    input.addEventListener("countrychange", updatePlaceholder);

    return () => {
      input.removeEventListener("countrychange", updatePlaceholder); // ✅ safe
      itiRef.current?.destroy();
    };
  }, []);

  const handleChange = () => {
    const number = itiRef.current?.getNumber() || "";
    setFormData({ ...formData, phone: number });
  };

  return (
    <div className="w-full">
      <input
        type="tel"
        name="phone"
        id="phone"
        ref={inputRef}
        onChange={handleChange}
        className={`placeholder:text-[#919191] bg-white py-[16px] px-[24px] sm:text-lg text-base w-full
          ${errors.phone ? "border-red-500" : "border-[#949AA5]"} border 
          ${inputClassName}`}
      />
      {errors.phone && (
        <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="25"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="img"
          >
            <path
              fill="currentColor"
              d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
            ></path>
          </svg>
          {errors.name}
        </span>
      )}
    </div>
  );
};

export default PhoneInput;
