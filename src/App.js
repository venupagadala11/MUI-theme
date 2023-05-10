import React,{useState} from 'react';
import './App.css';
import AppFeatures from './Components/AppFeatures/AppFeatures';
import Header from './Components/Header/Header'
import MusicApp from './Components/MusicApp/MusicApp';
import ProductAnalysis from './Components/Product-Analysis/ProductAnalysis.jsx';
import FeaturesAnalysis from './Components/Features-Anlaysis/FeaturesAnalysis';
import Service from './Components/Services/Service';
import Customers from './Components/Customers/Customers';
import Download from './Components/Download/Download';
import Footer from './Components/Footer/Footer';
import { createContext } from "react";

export const ThemeContext= createContext(null);

function App() {

  const [theme, setTheme] = useState('light');
  const value = {theme, setTheme}


 
  return (
    <ThemeContext.Provider value={value}>
    <div className="app" data-theme={theme}>
      <Header />
      <MusicApp/>
      <AppFeatures/>
      <ProductAnalysis/>
      <FeaturesAnalysis/>
      <Service/>
      <Customers/>
      <Download/>
      <Footer/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
