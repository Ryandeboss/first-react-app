import logo from './logo.svg';
import './App.css';
// import react logic
import { useContext } from 'react';

// import componenets
import NavBar from './components/NavBar';
import Hero from './components/hero';
import CardSection from './components/card_section'
import Footer from './components/footer'

// import context
import { ThemeContext } from './contexts/ThemeContext';


function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div id = 'root' style={{ backgroundColor: isDarkMode ? '#222' : '#fafafa', minHeight: '100vh' }}>
      <NavBar />
      <Hero />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;
