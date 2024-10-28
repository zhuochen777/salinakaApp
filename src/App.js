import { createContext, useState } from "react";
import "./App.css";
import routers from "./router";
import { useRoutes } from "react-router-dom";

export const isSignedinContext = createContext();

function App() {
  const element = useRoutes(routers);
  const [isSignedin, setIsSignedin] = useState(false);
  const [signupInfo, setSignupInfo] = useState(null)


  return (
    <>
      <isSignedinContext.Provider value={{isSignedin, setIsSignedin, signupInfo, setSignupInfo}}>
        {element}
      </isSignedinContext.Provider>
    </>
  );
}

export default App;
