import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { axiosInstance } from "./lib/axios";
import Login from "./pages/auth/Login";
import Profile from "./pages/auth/Profile";
import Register from "./pages/auth/Register";
import Chat from "./pages/chats/Chat";
import { useAppStore } from "./store";
import { AUTH_ROUTES } from "./utils/constants";

const App = () => {
  const { userInfo, setUserInfo } = useAppStore();
  console.log("userInfo: ", userInfo);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await axiosInstance.get(AUTH_ROUTES.CURRENT_USER);
        console.log("data: ", data);
        setUserInfo(data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    if (!fetchUserInfo) fetchUserInfo();
  }, [userInfo, setUserInfo]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
