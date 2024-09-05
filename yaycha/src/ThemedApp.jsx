import { createContext, useState } from "react";

import App from "./App";

export const AppContext = createContext();

export default function ThemedApp(){
    const [mode, setMode] = useState("dark");
    
    return (
        <AppContext.Provider value={{mode: "dark"}}>
            <App/>
        </AppContext.Provider>
    )
}