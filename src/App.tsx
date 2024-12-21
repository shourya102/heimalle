import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";

const App = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home/>} path="/"/>
                    <Route element={<Login/>} path="/login"/>
                    <Route element={<Register/>} path="/register"/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
};

export default App;