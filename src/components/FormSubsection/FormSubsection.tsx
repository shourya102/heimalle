import React from "react";

interface FormSubsectionProps {
    title: string,
    children: React.ReactNode
}

const FormSubsection: React.FC<Partial<FormSubsectionProps>> = ({title = "", children = ""}) => {
    return (
        <div className="p-10 gap-10 flex flex-col">
            <h1 className="text-paragraph4 text-secondary-1">{title}</h1>
            <div className="flex gap-10">
                {children}
            </div>
        </div>
    );
};

export default FormSubsection;