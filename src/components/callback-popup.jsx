import React from "react";
import BookFreeTrail from "./BookFreeTrail";
import CloseIcon from "../assets/close.svg"; // Custom close icon

const CallbackForm = ({ onClose }) => {
  return (
    <div
      className="fixed h-full top-0 bottom-0 left-0 right-0 inset-0 z-[51] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] p-6  w-full sm:max-w-xl max-w-[90%] relative max-h-[90%] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b-2 border-[#2A2A2A] pb-6">
          <h2 className="text-white sm:text-[30px] text-2xl font-bold">
            Get-a-Callback
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center sm:p-3 p-2 sm:w-[47px] sm:h-[47px]  w-[30px] h-[30px]  bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer shadow-[0px_4px_0px_#000000] text-white"
          >
            <img src={CloseIcon} alt="CloseIcon" className="w-7 h-7" />
          </button>
        </div>
        <p className="font-normal text-white/75 lg:text-xl ledaing-[24px] sm:text-base text-sm pt-6">
          Please fill out the below form. Our team will be in touch shortly.
        </p>
        <div className="sm:pt-6 pt-4">
          <BookFreeTrail />
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;
