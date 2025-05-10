import React from 'react';

interface PhoneNumberInputProps {
    name: string,
    placeholder: string,
    grow: boolean,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PhoneNumberInput: React.FC<Partial<PhoneNumberInputProps>> = ({
                                                                        name = "",
                                                                        placeholder = "7865241827",
                                                                        grow = true,
                                                                        value = "",
                                                                        onChange
                                                                    }) => {
    return (
        <div className={`flex gap-10 ${grow ? 'flex-grow' : 'flex-grow-0'}`}>
            <div className="p-20 bg-quaternary-5 text-quaternary-2 text-paragraph4">+91</div>
            <input name={name} value={value} placeholder={placeholder} onChange={onChange}
                   className="flex flex-grow border border-quaternary-2 bg-primary-1 p-20 text-paragraph4"/>
        </div>
    );
};

export default PhoneNumberInput;