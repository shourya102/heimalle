import {IoMdLocate, IoMdLogIn, IoMdPricetag} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useGetUserPersonalQuery} from "../../services/authService.ts";
import {setCredentials} from "../../features/authSlice.ts";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {motion, useTime, useTransform} from "framer-motion";
import {CgSpinner} from "react-icons/cg";

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const {userInfo, userToken} = useAppSelector((state) => state.auth);
    const {data, isFetching} = useGetUserPersonalQuery('User', {
        pollingInterval: 60000,
        skip: !userToken
    });
    const time = useTime();

    interface Navigation {
        id: number,
        name: string,
        to: string
    }

    const navigationList: Navigation[] = [
        {
            id: 0,
            name: "Home",
            to: "/"
        },
        {
            id: 1,
            name: "Explore",
            to: "/explore"
        },
        {
            id: 2,
            name: "About us",
            to: "/about"
        },
        {
            id: 3,
            name: "Contact us",
            to: "/contact"
        }
    ];

    const rotate = useTransform(time, [0, 3000], [0, 360], {
        clamp: false,
    });

    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, red, orange, yellow, green, blue, indigo, violet, red)`;
    });

    useEffect(() => {
        if (data) {
            dispatch(setCredentials({userInfo: data}));
        }
    }, [data, dispatch, userToken]);

    return (
        <div className="bg-primary-1 md:px-50 sm:px-20 md:py-30 sm:py-20 flex justify-between">
            <div className="flex gap-10">
                <button>
                    <img className="w-[14rem] px-30" alt="logo" src="/svgs/asset-svg (8).svg"/>
                </button>
                <div className="xl:flex items-center hidden gap-20 text-heading5 text-secondary-1">
                    {navigationList.map((navigation: Navigation) =>
                        <Link className="hover:text-tertiary-3 transition-colors duration-300" to={navigation.to}
                              key={navigation.id}>{navigation.name}</Link>)}
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
                {isFetching && !userInfo && <span>
                    <div className="text-heading5 flex items-center justify-center w-70 h-70" >
                        <motion.span animate={{rotate: 360}} transition={{duration: 2, repeat: Infinity, ease: "linear"}}><CgSpinner/></motion.span>
                    </div>
                </span>}
                {userToken && userInfo && <Link to="/profile"
                                                  className="w-70 h-70 bg-secondary-1 rounded-full text-quaternary-3 uppercase text-heading5 flex items-center justify-center">
                    {userInfo.pic ? <img className="w-full h-full object-cover rounded-full" src={userInfo.pic} alt="profile"/> :
                        <span>{userInfo.displayName[0]}</span>}
                </Link>}
                {!userToken && <button
                    className="relative">
                    <Link to="/login" className="bg-secondary-1 z-10 scale-95 relative text-heading5 text-primary-1 px-15 py-10 flex items-center justify-center gap-10"><span>Login</span>
                        <span><IoMdLogIn/></span></Link>
                    <motion.div className="absolute inset-0" style={{background: rotatingBg}}/>
                </button>}
            </div>
            <div className="xl:hidden flex p-20">
                <button className="text-heading5"><span><GiHamburgerMenu/></span></button>
            </div>
        </div>
    );
};

export default Header;