import {IoIosHappy, IoLogoFacebook, IoLogoGoogle, IoLogoTwitter} from "react-icons/io";
import {loginUser} from "../../actions/authActions.ts";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {CgSpinner} from "react-icons/cg";

const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const API_URL_OAUTH: string = 'https://rento-system.onrender.com/oauth2/authorization';
    const {loading, userInfo, error, success} = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function isValidEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }

    const handleSubmit = () => {
        if (isValidEmail(usernameOrEmail)) {
            dispatch(loginUser({email: usernameOrEmail, password}));
        } else {
            dispatch(loginUser({username: usernameOrEmail, password}));
        }
    }

    useEffect(() => {
        if (success) {
            navigate("/");
        }
        if (error) {
            console.log(error);
        }
    }, [error, navigate, success, userInfo]);

    const handleGoogle = () => {
        window.open(`${API_URL_OAUTH}/google`, '_blank');
    };

    return (
        <div className="flex justify-center w-full bg-primary-1">
            <div
                className="flex min-h-[53rem] flex-col justify-center items-center w-full md:w-2/3 lg:w-1/2 gap-30 p-20">
                <div className="text-heading3 text-secondary-1 gap-10 flex w-full items-center">
                    <span><IoIosHappy/></span>
                    <h1>Welcome Back!</h1>
                </div>
                <div className="text-paragraph3 w-full flex gap-10 items-center">
                    <span className="w-[12px] h-[46px] bg-secondary-1"></span>
                    <input type="text" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)}
                           className="p-20 text-secondary-1 w-full bg-quaternary-5" placeholder="Email"/>
                </div>
                <div className="text-paragraph3 w-full flex gap-10 items-center">
                    <span className="w-[12px] h-[46px] bg-secondary-1"></span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           className="p-20 text-secondary-1 w-full bg-quaternary-5"
                           placeholder="Password"/>
                </div>
                <button onClick={handleSubmit}
                        className="bg-tertiary-3 flex justify-center hover:bg-tertiary-2 transition-colors duration-300 p-20 text-heading5 font-semibold text-primary-1 w-full">
                    {loading ? <span className="animate-spin"><CgSpinner size={36}/></span> : "Login"}
                </button>
                <div className="text-quaternary-3 text-paragraph3 flex justify-center gap-30">
                    <span
                        className="pr-30 border-r-2 border-quaternary-5 hover:text-quaternary-2">Forget Password</span>
                    <Link className="hover:text-quaternary-2" to={"/register"}>New here?</Link>
                </div>
                <div className="border border-quaternary-5 w-full">
                </div>
                <div className="flex gap-20">
                    <button onClick={handleGoogle}
                            className="bg-tertiary-3 text-primary-1 hover:bg-tertiary-2 transition-colors duration-300 text-paragraph1">
                        <IoLogoGoogle/></button>
                    <button className="bg-tertiary-3 text-primary-1 text-paragraph1"><IoLogoFacebook/></button>
                    <button className="bg-tertiary-3 text-primary-1 text-paragraph1"><IoLogoTwitter/></button>
                </div>
            </div>
        </div>
    );
};

export default Login;