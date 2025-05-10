import React from "react";

interface InputProps {
    name: string,
    grow: true,
    placeholder: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Partial<InputProps>> = ({
                                                  name = "",
                                                  grow = true,
                                                  placeholder = "",
                                                  value = "",
                                                  onChange = () => {
                                                  }
                                              }) => {
    return (
        <input name={name} placeholder={placeholder} value={value} onChange={onChange}
               className={`flex ${grow ? 'flex-grow' : 'flex-grow-0'} focus:border-tertiary-3 border border-quaternary-2 bg-primary-1 p-20 text-paragraph4`}/>
    );
};

export default Input;