import React, { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/utils'; // needed for formatting

const PhoneInput = ({ formData, setFormData, errors, inputClassName = '' }) => {
    const inputRef = useRef(null);
    const itiRef = useRef(null); // store instance

    useEffect(() => {
        if (!inputRef.current) return;

        itiRef.current = intlTelInput(inputRef.current, {
            initialCountry: 'auto',
            preferredCountries: ['au', 'in', 'us'], // <--- PRIORITY ORDER
            geoIpLookup: (callback) => {
                fetch('https://ipinfo.io/json?token=YOUR_TOKEN') // replace with actual token or use 'us'
                    .then((res) => res.json())
                    .then((data) => callback(data?.country || 'au'))
                    .catch(() => callback('au'));
            },
            utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js',
            nationalMode: false,
        });

        return () => {
            if (itiRef.current) {
                itiRef.current.destroy();
            }
        };
    }, []);

    // Sync input value with form data
    const handleChange = () => {
        const number = itiRef.current?.getNumber() || '';
        setFormData({ ...formData, phone: number });
    };

    return (
        <div className="w-full">
            <input
                type="tel"
                width="100%"
                name="phone"
                id="phone"
                placeholder="Mobile number e.g: 0444786999"
                ref={inputRef}
                onChange={handleChange}
                className={`placeholder:text-[#919191] bg-white py-[16px] px-[24px] 2xl:text-xl text-lg w-full
          ${errors.phone ? 'border-red-500' : 'border-[#949AA5]'} border 
          ${inputClassName}`}
            />
            {errors.phone && (
                <span className="text-red-500 text-sm mt-1 block">{errors.phone}</span>
            )}
        </div>
    );
};

export default PhoneInput;
