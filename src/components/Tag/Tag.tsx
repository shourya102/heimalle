import React from "react";

interface TagProps {
    children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({children}) => {
    return (
        <div className="p-5 rounded-2xl gap-5 text-paragraph5 text-tertiary-3 flex items-center justify-center bg-primary-1">
            <span className="rounded-full bg-tertiary-3 w-[8px] h-[8px]"/>
            <span>{children}</span>
        </div>
    );
};

export default Tag;