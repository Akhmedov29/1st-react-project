import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LikedImg from "./components/LikedImg";
import ProtectRoute from "./components/ProtectRoute";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const location = useLocation();
  const login = location.pathname === "/login" || location.pathname === "/signup"

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })

    return () => unsubscribe()

  }, [])
  return (
    <div>
      {!login && <Navbar user={user} setUser={setUser} />}
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute user={user}>
              <Home />
            </ProtectRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
        path="/login" 
        element={user ? <Navigate to={'/'}/> : <Login setUser={setUser}/>} />
        <Route path="/signup" element={user ? <Navigate to={'/'}/> : <SignUp/>} />
        <Route path="/likedimg" element={<LikedImg />} />
      </Routes>
    </div>
  );
}

export default App;
