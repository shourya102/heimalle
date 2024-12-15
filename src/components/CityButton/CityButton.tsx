interface CityButtonProps {
    city: string;
}

const CityButton: React.FC<CityButtonProps> = ({city}) => {
    return (
        <div className="p-10 bg-tertiary-3 text-primary-1 text-paragraph3 border border-tertiary-2">
            {city}
        </div>
    );
};

export default CityButton;