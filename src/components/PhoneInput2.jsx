import React, { useState, useEffect, useRef } from "react";
import AuFlag from "../assets/au-flag.jpg";
import InFlag from "../assets/india-flag.png";
import UsFlag from "../assets/us-flag.png";

// Full country list or slice based on props
const allCountries = [
  {
    name: "Australia",
    code: "AU",
    dialCode: "+61",
    flag: AuFlag,
  },
  {
    name: "India",
    code: "IN",
    dialCode: "+91",
    flag: InFlag,
  },
  {
    name: "United States",
    code: "US",
    dialCode: "+1",
    flag: UsFlag,
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
  flagwrapper = "",
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
      className={`relative w-full flex bg-white border ${wrapperClassName} ${errors[name] ? "border-red-500" : "border-[#949AA5]"
        }`}
    >
      {/* Country flag selector */}
      <div
        className={`flex items-center md:px-[1.058em] px-3 py-2 cursor-pointer sm:w-24 w-18 justify-between border-r ${flagwrapper}`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.code}
          className="sm:w-8 sm:h-5 w-6 h-4"
        />
        {/* <svg className="ml-1 w-3 h-3" fill="black" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg> */}
        <svg
          className="sm:ml-4 ml-1 w-[12px] h-[16px]"
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
        className={`flex-1 placeholder:text-[#919191] outline-none ${inputClassName}`}
      />

      {/* Dropdown */}
      {dropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute z-10 top-[100%] w-full bg-white border border-gray-300 shadow-lg overflow-auto"
        >
          {countryList.map((country) => (
            <li
              key={country.code}
              onClick={() => handleSelect(country)}
              className="flex items-center gap-2 md:px-[1.058em] md:py-[0.794em] px-[16px] py-[8px] bg-white hover:bg-[#F2F2F2] text-[1.058em] leading-normal"
            >
              <div className="flex items-center gap-4">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="md:w-[2.116em] md:h-[1.323em] w-6 h-4"
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
