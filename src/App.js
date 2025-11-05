import React, { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Register from "./components/Register";
import bgImage from './assets/bg-img-login.png';
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [page, setPage] = useState("home"); // 'home' | 'auth'

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <div className="App">
      {page === "home" ? (
        <>
          <Navbar onUserClick={() => setPage("auth")} />
          {/* isi homepage kamu di sini */}
          <div 
          className="auth-container"
          style={{
            backgroundImage: `linear-gradient( rgba(255,255,255,0.85), rgba(102,189,168,0.85)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}></div>
        </>
      ) : page === "auth" ? (
        <Auth onBack={() => setPage("home")} onRegister={() => setPage("register")} />
      ) : (
        <Register onBack={() => setPage("auth")} />
      )}
    </div>
  );
}

export default App;
