import React from "react";
import {IoLogoFacebook, IoLogoInstagram, IoLogoTwitter} from "react-icons/io";

interface SocialsInputProps {
    name: string,
    grow: true,
    type: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SocialsInput: React.FC<Partial<SocialsInputProps>> = ({
                                                                name = "", value = "",
                                                                grow = true, type = "", onChange = () => {
    }
                                                            }) => {
    return (
        <div
            className={`${grow ? 'flex-grow' : 'flex-grow-0'} bg-tertiary-3  text-primary-1 gap-10 text-paragraph4 p-20 flex items-center`}>
            <span>
                {type === 'Twitter' && <IoLogoTwitter size={24}/>}
                {type === 'Instagram' && <IoLogoInstagram size={24}/>}
                {type === 'Facebook' && <IoLogoFacebook size={24}/>}
            </span>
            <input placeholder={type} name={name} value={value} onChange={onChange}
                   className={`flex ${grow ? 'flex-grow' : 'flex-grow-0'} placeholder:text-primary-1 bg-transparent text-paragraph4`}/>
        </div>

    );
};

export default SocialsInput;