import {IoIosHappy} from "react-icons/io";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {sendVerificationOtp, verifyOtp} from "../../actions/authActions.ts";
import {CgSpinner} from "react-icons/cg";

const OtpPage = () => {
    const {email} = useParams() as { email: string };
    const [otpList, setOtpList] = useState<string[]>(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState<number>(120);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const dispatch = useAppDispatch();
    const {loadingSendOtp, loadingVerifyOtp, success, error} = useAppSelector((state) => state.auth);

    const handleOtpChange = (index: number, value: string) => {
        const newOtpList = [...otpList];
        const numericRegex = /^[0-9]$/;
        if (numericRegex.test(value)) {
            newOtpList[index] = value;
        }
        setOtpList(newOtpList);
    }

    const convertSecondsToTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
    };

    const handleSubmit = () => {
        dispatch(verifyOtp({email: email, otp: otpList.join("")}));
    }

    const handleResend = () => {
        dispatch(sendVerificationOtp(email));
        if (success) {
            setOtpList(["", "", "", "", "", ""]);
            setTimer(120);
        }
        if (error) {
            console.log(error);
        }
    };

    const handleKeyActions = (e: React.KeyboardEvent, index: number) => {
        if (e.key === "Backspace" && index > 0) {
            const newOtpList = [...otpList];
            if (newOtpList[index] === "") {
                newOtpList[index - 1] = "";
                inputRefs.current[index - 1]?.focus();
            } else {
                newOtpList[index] = "";
            }
            setOtpList(newOtpList);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        } else { // @ts-expect-error
            if (e.target.value !== "" && e.key >= "0" && e.key <= "9" && index < otpList.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTimer(prevState => prevState - 1);
        }, 1000);
        return () => clearTimeout(timerId);
    }, [timer]);

    return (
        <div className="flex justify-center w-full bg-primary-1">
            <div
                className="flex min-h-[53rem] flex-col justify-center items-center w-full md:w-2/3 lg:w-[40%] gap-30 p-20">
                <div className="text-heading3 text-secondary-1 gap-10 flex w-full items-center">
                    <span><IoIosHappy/></span>
                    <h1>Confirm Account!</h1>
                </div>
                <div className="text-paragraph3 text-secondary-1 gap-10 flex w-full items-center">
                    <p>Please check your email address or mobile number for OTP and enter below for verification</p>
                </div>
                <div className="text-paragraph3 flex justify-center gap-2">
                    {otpList.map((otp, index) => (
                        <input type="text" key={index} value={otp} placeholder="0" maxLength={1}
                               className="w-70 h-70 text-center border border-secondary-1"
                               inputMode="numeric"
                               pattern="[0-9]*"
                               ref={(ref) => inputRefs.current[index] = ref}
                               onKeyDown={(e) => handleKeyActions(e, index)}
                               onChange={(e) => handleOtpChange(index, e.target.value)}/>
                    ))}
                </div>
                <div
                    className="text-quaternary-3 text-paragraph3 hover:text-quaternary-2 flex justify-center gap-30">
                    {loadingSendOtp ? <span className="animate-spin"><CgSpinner size={36}/></span> :
                        <button onClick={handleResend}>Resend Confirmation</button>}
                </div>
                <button onClick={handleSubmit}
                        className="bg-tertiary-3 p-20 flex justify-center text-heading5 font-semibold hover:bg-tertiary-2 transition-colors duration-300 text-primary-1 w-full">
                    {loadingVerifyOtp ? <span className="animate-spin"><CgSpinner size={36}/></span> : "Confirm"}
                </button>
                <div className="text-quaternary-3 text-paragraph3 hover:text-quaternary-2 flex justify-center gap-30">
                    <Link to="/register">Already have an account?</Link>
                </div>
                <div className="text-secondary-1 text-paragraph3 flex justify-center gap-30">
                    <span>{timer > 0 ? convertSecondsToTime(timer) : "OTP Expired"}</span>
                </div>
                <div className="border border-quaternary-5 w-full">
                </div>
                <div className="text-quaternary-3 text-paragraph3 flex justify-center gap-30">
                    <span>Resend OTP via SMS</span>
                </div>
            </div>
        </div>
    );
};

export default OtpPage;