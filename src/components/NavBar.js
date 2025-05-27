import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function NavBar (){
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return(
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: isDarkMode ? '#333' : '#eee',
      color: isDarkMode ? '#fff' : '#000'
    }}>
      <div className="logo">
        <h1>MySite</h1>
      </div>
      <div className="nav-buttons">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>
      </div>
    </nav>
    )
}


export default NavBar;