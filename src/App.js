import './App.css';


import Home from './Components/Home/Home';
import GlobalStyle from '../src/Components/styles/GlobalStyle';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer'
import FormPage from './Components/FormPage/FormPage';
import Navbar from './Components/Navbar';
import About from './Pages/About/About';
import Export from './Pages/Export/Export';
import Manufacturing from './Pages/Manufacturing/Manufacturing';
import Marketing from './Pages/Marketing/Marketing';
import SdgEnv from './Pages/SdgEnvpage/SdgEnv';
import Farming from './Pages/Farming/Farming';
// import Career from './Components/Career/Career';



function App() {
  return (
    <div>
    {/* <Header/> */}
    <Navbar/>
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/farming" element={<Farming/>} />
        <Route path="/export" element={<Export/>} />
        <Route path="/manufacturing" element={<Manufacturing/>} />
        <Route path="/marketing" element={<Marketing/>} />
        <Route path="/sdg" element={<SdgEnv/>}/>
        <Route path="/contact" element={<FormPage />} />
    </Routes>
    <Footer/>

    <GlobalStyle/>
    </div>
  );
}

export default App;
