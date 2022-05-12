import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignUpPage from "./Components/Pages/SignUpPage";
import Auth from './Components/Auth';
import HomePage from './Components/Pages/HomePage';

export default function App(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/SignUpPage" element={
              <Auth component={"/Home"}>
                <SignUpPage />
              </Auth>
            }/>
            <Route path="/" element={<Navigate replace to="/SignUpPage" />} />
            <Route path="/Home" element={
              <Auth component={"/SignUpPage"}>
                <HomePage />
              </Auth>
            }/>
        </Routes>
    </BrowserRouter>
    );
}