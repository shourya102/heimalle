import React from "react";
import {IoMdCheckmark} from "react-icons/io";

interface TickToggleProps {
    children?: React.ReactNode;
    enabled: boolean;
}

const TickToggle: React.FC<TickToggleProps> = ({enabled, children}) => {
    return (
        <div className="p-20 w-full flex justify-between items-center text-paragraph4 text-quaternary-2">
            <span>{children}</span>
            <button className={`border-2 border-tertiary-3 rounded-lg bg-${enabled ? 'tertiary-3' : 'primary-1'} text-primary-1`}><IoMdCheckmark/></button>
        </div>
    );
};

export default TickToggle;