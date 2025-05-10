import React from "react";

interface FormProps {
    children: React.ReactNode
}

const Form: React.FC<Partial<FormProps>> = ({children}) => {
    return (
        <div className="px-50 py-20 flex flex-col flex-grow max-h-svh overflow-y-scroll">
            {children}
        </div>
    );
};

export default Form;