import {IoIosHappy, IoLogoFacebook, IoLogoGoogle, IoLogoTwitter} from "react-icons/io";
import {useEffect, useState} from "react";
import {registerUser, sendVerificationOtp} from "../../actions/authActions.ts";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {CgSpinner} from "react-icons/cg";

const Register = () => {
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {loading, userInfo, error, success} = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(registerUser({username, email, password}));
    }

    useEffect(() => {
        if (success) {
            dispatch(sendVerificationOtp(email));
            navigate(`/otp/${email}`);
        }
        if (userInfo) {
            console.log(userInfo);
        }
        if (error) {
            console.log(error);
        }
    }, [dispatch, email, error, navigate, success, userInfo]);

    return (
        <div className="flex justify-center w-full bg-primary-1">
            <div
                className="flex min-h-[53rem] flex-col justify-center items-center w-full md:w-2/3 lg:w-1/2 gap-30 p-20">
                <div className="text-heading3 text-secondary-1 gap-10 flex w-full items-center">
                    <span><IoIosHappy/></span>
                    <h1>Let's Get Started!</h1>
                </div>
                <div className="text-paragraph3 w-full flex gap-10 items-center">
                    <span className="w-[12px] h-[46px] bg-secondary-1"></span>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                           className="p-20 text-secondary-1 w-full bg-quaternary-5" placeholder="Email"/>
                </div>
                <div className="text-paragraph3 w-full flex gap-10 items-center">
                    <span className="w-[12px] h-[46px] bg-secondary-1"></span>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                           className="p-20 text-secondary-1 w-full bg-quaternary-5"
                           placeholder="Username"/>
                </div>
                <div className="text-paragraph3 w-full flex gap-10 items-center">
                    <span className="w-[12px] h-[46px] bg-secondary-1"></span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           className="p-20 text-secondary-1 w-full bg-quaternary-5"
                           placeholder="Password"/>
                </div>
                <button onClick={handleSubmit}
                        className="bg-tertiary-3 flex justify-center items-center p-20 hover:bg-tertiary-2 transition-colors duration-300 text-heading5 font-semibold text-primary-1 w-full">
                    {loading ? <span className="animate-spin"><CgSpinner size={36}/></span> : "Register"}
                </button>
                <div className="text-quaternary-3 text-paragraph3 flex justify-center gap-30">
                    <Link className="hover:text-quaternary-2" to={"/login"}>Already have an account?</Link>
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

export default Register;