import {IoIosHappy, IoLogoFacebook, IoLogoGoogle, IoLogoTwitter} from "react-icons/io";

const Login = () => {
    return (
        <div className="flex justify-center w-full bg-primary-1">
            <div className="flex min-h-[53rem] flex-col justify-center items-center w-full md:w-2/3 lg:w-1/2 gap-30 p-20">
                <div className="text-heading3 text-secondary-1 gap-10 flex w-full items-center">
                    <span><IoIosHappy/></span>
                    <h1>Welcome Back!</h1>
                </div>
                <div className="text-paragraph3 w-full flex gap-10 items-center">
                    <span className="w-[12px] h-[46px] bg-secondary-1"></span>
                    <input type="text" className="p-20 text-secondary-1 w-full bg-quaternary-5" placeholder="Email"/>
                </div>
                <div className="text-paragraph3 w-full flex gap-10 items-center">
                    <span className="w-[12px] h-[46px] bg-secondary-1"></span>
                    <input type="password" className="p-20 text-secondary-1 w-full bg-quaternary-5" placeholder="Password"/>
                </div>
                <button className="bg-tertiary-3 p-20 text-paragraph3 text-primary-1 w-full">Login</button>
                <div className="text-quaternary-3 text-paragraph3 flex justify-center gap-30">
                    <span className="pr-30 border-r-2 border-quaternary-5">Forget Password</span><span>New here?</span>
                </div>
                <div className="border border-quaternary-5 w-full">
                </div>
                <div className="flex gap-20">
                    <button className="bg-tertiary-3 text-primary-1 text-paragraph1"><IoLogoGoogle/></button>
                    <button className="bg-tertiary-3 text-primary-1 text-paragraph1"><IoLogoFacebook/></button>
                    <button className="bg-tertiary-3 text-primary-1 text-paragraph1"><IoLogoTwitter/></button>
                </div>
            </div>
        </div>
    );
};

export default Login;