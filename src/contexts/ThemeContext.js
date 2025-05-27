import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    // set the useState delcaration
    const [isDarkMode, setIsDarkMode] = useState(false);

    // set the toggle logic for the state, which will
    // used in the returned (html) part of the funciton 
    const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

    return (
        <ThemeContext.Provider value = {{ isDarkMode, toggleTheme}}> 
            {children}
        </ThemeContext.Provider>
    );

}
