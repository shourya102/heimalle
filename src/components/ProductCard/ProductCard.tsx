import React from "react";
import "./ProductCard.css";
import {MdStar} from "react-icons/md";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({image, title, description}) => {
    return (
        <div className="bg-primary-1 flex flex-col w-[19rem] h-[44rem] dark-shadow-blur">
            <div className="h-[24rem] p-50">
                <img className="w-full h-full bg-cover" src={image} alt={image}/>
            </div>
            <div className="flex flex-col flex-grow gap-20 bg-quaternary-5 pt-10">
                <div className="flex flex-col p-10 justify-between gap-10 flex-grow items-center">
                    <div className="gap-10 flex-grow text-secondary-1 px-15">
                        <div className="text-paragraph4 font-semibold text-center">{title}</div>
                        <div className="text-paragraph5 text-center text-wrap px-10">{description}</div>
                    </div>
                    <div className="gap-10 flex flex-col text-paragraph3">
                        <div className="text-yellow-500 flex gap-10">
                            <MdStar/><MdStar/><MdStar/><MdStar/><MdStar/>
                        </div>
                        <div className="flex gap-10">
                            <span className="text-tertiary-3 font-semibold text-paragraph4">₹ 8,000</span>
                            <span
                                className="px-10 py-5 font-semibold text-paragraph5 text-secondary-1 bg-primary-1 rounded-lg">per month</span>
                        </div>
                    </div>
                </div>
                <div className="flex p-10 items-center justify-center text-paragraph4 text-primary-1 bg-tertiary-3">
                    CHECK OUT
                </div>
            </div>
        </div>
    );
};

export default ProductCard;