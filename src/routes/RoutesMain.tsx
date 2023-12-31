import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { UserPage } from "../pages/UserPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/Register" element={<RegisterPage/>} />
            <Route path="/user" element={<UserPage/>} />
        </Routes>
    )
}