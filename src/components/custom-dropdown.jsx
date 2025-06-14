import React, { useState } from "react";

const courses = ["PTE", "NAATI CCL", "IELTS", "Other Inquiry"];

const CustomDropdown = ({
  selected,
  onChange,
  error,
  wrapperClassName = "",
  buttonClassName = "",
  listClassName = "",
  itemClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${wrapperClassName}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left py-[16px] sm:px-[24px] px-4 sm:text-lg text-base border-2 c-dropdown ${
          error ? "border-red-500" : "border-[#949AA5]"
        } ${
          selected === "default" ? "text-[#919191]" : "text-black"
        } ${buttonClassName}`}
      >
        {selected === "default" ? "Select an option" : selected}
      </button>

      {isOpen && (
        <ul
          className={`absolute left-0 z-20 mt-0 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto ${listClassName}`}
        >
          {courses.map((course) => (
            <li
              key={course}
              onClick={() => {
                onChange(course);
                setIsOpen(false);
              }}
              className={`px-[10px] py-[5px] bg-white hover:bg-yellow-300 cursor-pointer text-black ${itemClassName}`}
            >
              {course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
