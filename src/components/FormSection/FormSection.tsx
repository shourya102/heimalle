import React from "react";

interface SectionProps {
    title: string,
    children: React.ReactNode
}

const FormSection: React.FC<SectionProps> = ({title = "", children = ""}) => {
    return (
        <div className="flex flex-col py-20 gap-10 text-secondary-1 border-b border-quaternary-3">
            <h1 className="text-heading5 font-semibold">{title}</h1>
            {children}
        </div>
    );
};

export default FormSection;