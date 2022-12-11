/* eslint-disable no-unused-vars */
import AppRouter from "./Router";
import { useState, useEffect } from "react";
import { authService } from "../FBI";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUsers);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
    setIsLoggedIn(true);
    const uid = user.uid;
    } else {
    setIsLoggedIn(false);
    }
    setInit(true);
    });
    }, []);

  return (
  <>
    <AppRouter isLoggedIn={isLoggedIn} />
    <footer>&copy; ywitter {new Date().getFullYear()}</footer>
  </>
  );
}

export default App;
