import React from "react";

interface CityButtonProps {
    city: string;
    className?: string;
}

const CityButton: React.FC<CityButtonProps> = ({city, className}) => {
    return (
        <div className={`${className} p-10 bg-tertiary-3 text-primary-1 text-paragraph3 border border-tertiary-2`}>
            {city}
        </div>
    );
};

export default CityButton;