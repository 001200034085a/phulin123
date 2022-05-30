import React, {useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext,autoLogin,generateInitialUsers } from "../Dangky/user";
import NavbarHistory from "./NavbarHistory";
import ThongTin from "./ThongTin";
import ChienTich from "./ChienTich";
import TrangChu from "./TrangChu";
import ThoiKy from "./ThoiKy";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";





export default function HistoryApp(){
  generateInitialUsers();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const theUser = autoLogin();
    setCurrentUser(theUser);
  }, []);

  return (
   <div>
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
    <BrowserRouter>
      <NavbarHistory></NavbarHistory>
      <Routes>
        <Route path="/" element={<TrangChu/>}></Route>
        <Route path="/tt" element={<ThongTin></ThongTin>}></Route>
        <Route path="/tk" element={<ThoiKy></ThoiKy>}></Route>
        <Route path="/ct" element={<ChienTich></ChienTich>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/signup" element={<SignupForm/>}></Route>
        <Route path="*" element={<h1>404 Not Found !!!</h1>}></Route>
      </Routes>
    </BrowserRouter>
    
    </AuthContext.Provider>
    
   </div> 
  )

  
}