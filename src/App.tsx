import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home/>} path="/"/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
};

export default App;