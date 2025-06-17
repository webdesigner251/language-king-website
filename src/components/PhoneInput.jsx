// import React, { useEffect, useRef } from "react";
// import intlTelInput from "intl-tel-input";
// import "intl-tel-input/build/css/intlTelInput.css";
// import "intl-tel-input/build/js/utils"; // needed for placeholder formatting

// const PhoneInput = ({ formData, setFormData, errors, inputClassName = "" }) => {
//   const inputRef = useRef(null);
//   const itiRef = useRef(null);

//   useEffect(() => {
//     const input = inputRef.current;
//     if (!input) return;

//     itiRef.current = intlTelInput(input, {
//       initialCountry: "auto",
//       preferredCountries: ["au", "in", "us"],
//       geoIpLookup: (callback) => {
//         fetch("https://ipinfo.io/json?token=YOUR_TOKEN") // Replace with your actual token
//           .then((res) => res.json())
//           .then((data) => callback(data?.country || "au"))
//           .catch(() => callback("au"));
//       },
//       utilsScript:
//         "https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js",
//       autoPlaceholder: "polite",
//       placeholderNumberType: "MOBILE",
//       nationalMode: false,
//     });

//     return () => {
//       itiRef.current?.destroy();
//     };
//   }, []);

//   const handleChange = () => {
//     const number = itiRef.current?.getNumber() || "";
//     setFormData({ ...formData, phone: number });
//   };

//   return (
//     <div className="w-full">
//       <input
//         type="tel"
//         name="phone"
//         id="phone"
//         ref={inputRef}
//         onChange={handleChange}
//         className={`border-2 border-[#949AA5] bg-white py-[13px] sm:px-[24px] px-4 sm:text-lg text-base w-full
//           ${errors.phone ? "border-red-500" : "border-[#949AA5]"} border
//           ${inputClassName}`}
//       />
//       {errors.phone && (
//         <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="25"
//             fill="none"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//             role="img"
//           >
//             <path
//               fill="currentColor"
//               d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
//             ></path>
//           </svg>
//           {errors.name}
//         </span>
//       )}
//     </div>
//   );
// };

// export default PhoneInput;

import React, { useState, useEffect, useRef } from "react";

// Full country list or slice based on props
const allCountries = [
  {
    name: "Australia",
    code: "AU",
    dialCode: "+61",
    flag: "https://flagcdn.com/w40/au.png",
  },
  {
    name: "India",
    code: "IN",
    dialCode: "+91",
    flag: "https://flagcdn.com/w40/in.png",
  },
  {
    name: "United States",
    code: "US",
    dialCode: "+1",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    name: "Afghanistan",
    code: "AF",
    dialCode: "+93",
    flag: "https://flagcdn.com/w40/af.png",
  },
];

const PhoneInput = ({
  formData,
  setFormData,
  errors = {},
  name = "phone",
  preferredCountries = ["AU", "IN", "US"],
  inputClassName = "",
  wrapperClassName = "",
}) => {
  const countryList = allCountries.filter((c) =>
    preferredCountries.includes(c.code)
  );
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const fullNumber = `${selectedCountry.dialCode}${phoneNumber}`;
    setFormData({ ...formData, [name]: fullNumber });
  }, [selectedCountry, phoneNumber]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  return (
    <div
      className={`relative w-full flex bg-white border ${wrapperClassName} ${
        errors[name] ? "border-red-500" : "border-[#949AA5]"
      }`}
    >
      {/* Country flag selector */}
      <div
        className="flex items-center px-2 py-2 cursor-pointer sm:w-24 w-18 justify-center border-r"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.code}
          className="w-8 h-5"
        />
        {/* <svg className="ml-1 w-3 h-3" fill="black" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg> */}
        <svg
          className="ml-2 w-3 h-4"
          width="450"
          height="258"
          viewBox="0 0 450 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M442.664 41.4469L249.496 246.695C246.352 250.038 242.556 252.701 238.343 254.522C234.131 256.343 229.59 257.282 225 257.282C220.411 257.282 215.87 256.343 211.657 254.522C207.444 252.701 203.649 250.038 200.504 246.695L7.33628 41.4469C-7.17572 26.0229 3.75229 0.710938 24.9363 0.710938H425.064C446.248 0.710938 457.176 26.0229 442.664 41.4469Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Dial code */}
      {/* <span className="pl-3 py-[13px] placeholder:text-[#919191] sm:text-lg text-base">
        {selectedCountry.dialCode}
      </span> */}

      {/* Phone number input */}
      <input
        type="tel"
        inputMode="numeric"
        placeholder="412 345 678"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className={`flex-1 placeholder:text-[#919191] py-[13px] sm:px-[24px] px-4 sm:text-lg text-base outline-none ${inputClassName}`}
      />

      {/* Dropdown */}
      {dropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute z-10 top-[100%] left-0 w-full bg-white border border-gray-300 shadow-lg overflow-auto max-h-60"
        >
          {countryList.map((country) => (
            <li
              key={country.code}
              onClick={() => handleSelect(country)}
              className="flex items-center gap-2 px-3 py-1 cursor-pointer hover:bg-yellow-300 text-base leading-normal"
            >
              <div className="flex items-center gap-2">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-6 h-4"
                />
                <span className="">{country.name}</span>
              </div>
              <span className="text-sm text-gray-500">{country.dialCode}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhoneInput;
