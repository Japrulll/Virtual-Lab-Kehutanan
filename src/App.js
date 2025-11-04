import React, { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // ⏱️ tampil 3 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          {/* isi halaman utama kamu di sini */}
        </>
      )}
    </div>
  );
}

export default App;
