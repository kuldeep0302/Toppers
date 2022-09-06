import logo from './logo.svg'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Componants/Home';
import About from './Componants/About';
import Navbar from './Componants/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/Home" element= {<Home/>} /> 
      <Route path="/About" element= {<About/>} /> 
     
      </Routes>
      </BrowserRouter>

</div>
  );
}

export default App;
