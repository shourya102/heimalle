import {IoMdLocate, IoMdPerson, IoMdPricetag} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";
import React from "react";

const Header : React.FC = () => {
    return (
        <div className="bg-primary-1 md:px-50 sm:px-20 md:py-30 sm:py-20 flex justify-between">
            <div className="flex gap-10">
                <button>
                    <img className="w-[14rem] px-30" alt="logo" src="/src/assets/svgs/asset-svg (8).svg"/>
                </button>
                <div className="xl:flex hidden gap-20 text-heading5 text-secondary-1">
                    <button>Home</button>
                    <button>Explore</button>
                    <button>About us</button>
                    <button>Contact us</button>
                </div>
            </div>
            <div className="xl:flex hidden gap-20">
                <button className="text-secondary-1 text-heading5 gap-20 flex items-center">
                    <span><IoMdLocate/></span>
                    <span>New Delhi</span>
                </button>
                <button
                    className="flex items-center px-15 py-10 text-primary-1 text-heading5 gap-20 bg-tertiary-3 border border-tertiary-4">
                    <span>Want to Rent?</span>
                    <span><IoMdPricetag/></span>
                </button>
                <button className="w-[5rem] h-[5rem] bg-secondary-1 rounded-full flex items-center justify-center">
                    <span className="text-quaternary-4 text-heading4"><IoMdPerson/></span>
                </button>
            </div>
            <div className="xl:hidden flex p-20">
                <button className="text-heading5"><span><GiHamburgerMenu/></span></button>
            </div>
        </div>
    );
};

export default Header;