import {IoIosHappy, IoLogoFacebook, IoLogoGoogle, IoLogoTwitter} from "react-icons/io";

const OtpPage = () => {
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
                    <input type="text" placeholder="0" maxLength={1}
                           className="w-70 h-70 text-center border border-secondary-1"/>
                    <input type="text" placeholder="0" maxLength={1}
                           className="w-70 h-70 text-center border border-secondary-1"/>
                    <input type="text" placeholder="0" maxLength={1}
                           className="w-70 h-70 text-center border border-secondary-1"/>
                    <input type="text" placeholder="0" maxLength={1}
                           className="w-70 h-70 text-center border border-secondary-1"/>
                    <input type="text" placeholder="0" maxLength={1}
                           className="w-70 h-70 text-center border border-secondary-1"/>
                    <input type="text" placeholder="0" maxLength={1}
                           className="w-70 h-70 text-center border border-secondary-1"/>

                </div>
                <div className="text-quaternary-3 text-paragraph3 flex justify-center gap-30">
                    <span>Resend Confirmation</span>
                </div>
                <button className="bg-tertiary-3 p-20 text-paragraph3 text-primary-1 w-full">Confirm</button>
                <div className="text-quaternary-3 text-paragraph3 flex justify-center gap-30">
                    <span>Already have an account?</span>
                </div>
                <div className="text-secondary-1 text-paragraph3 flex justify-center gap-30">
                    <span>15:00 left</span>
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