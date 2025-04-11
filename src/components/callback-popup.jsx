import React from 'react';

const CallbackForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-black p-6 rounded-lg w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Get-a-Callback</h2>
          <button onClick={onClose} className="text-white text-2xl">
            ×
          </button>
        </div>
        <p className="text-gray-400 mb-6">
          Please fill out the below form. Our team will be in touch shortly.
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="fullName">
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
              placeholder="Your first name & last name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number*
            </label>
            <div className="flex items-center">
              <select className="p-2 bg-gray-800 text-white border border-gray-700 rounded-l">
                <option value="+61">🇦🇺 +61</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-r"
                placeholder="Mobile number e.g: 0444786999"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="course">
              Course Interested in*
            </label>
            <select
              id="course"
              className="w-full p-2 bg-gray-800 text-gray-400 border border-gray-700 rounded"
            >
              <option>Select an option</option>
            </select>
          </div>

          <p className="text-gray-500 text-sm mb-6">
            Your information will be used to consider and fulfill your request and will be handled
            pursuant to our Privacy Policy.
          </p>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold py-2 px-4 rounded"
          >
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;