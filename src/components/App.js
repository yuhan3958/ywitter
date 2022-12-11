/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AppRouter from "./Router";
import { authService } from "../FBI"


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(authService.currentUsers);
  return (
  <>
    <AppRouter isLoggedIn={isLoggedIn} />
    <footer>&copy; ywitter {new Date().getFullYear()}</footer>
  </>
  );
}

export default App;
