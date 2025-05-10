import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import OtpPage from "./pages/OtpPage/OtpPage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import {Provider} from "react-redux";
import store from "./store/store.ts";

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route element={<Home/>} path="/"/>
                        <Route element={<Login/>} path="/login"/>
                        <Route element={<Register/>} path="/register"/>
                        <Route element={<OtpPage/>} path={`/otp/:email`}/>
                        <Route element={<ProfilePage/>} path={"/profile"}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </Provider>
        </div>
    );
};

export default App;