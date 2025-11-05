import React, { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Register from "./components/Register";
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
