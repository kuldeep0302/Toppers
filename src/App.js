import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Onboarding1 from './Pages/Onboarding1';
import Onboarding2 from './Pages/Onboarding2';
import Onboarding3 from './Pages/Onboarding3';
import Onboarding4 from './Pages/Onboarding4';
import Onboarding6 from './Pages/Onboarding6';
import Onboarding8 from './Pages/Onboarding8';
import Onboarding9 from './Pages/Onboarding9';
import Register from './Pages/Register';
import Resetpassword from './Pages/Resetpassword';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return(
    <div classname="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Onboarding1' element={<Onboarding1 />} />
          <Route path='/Onboarding2' element={<Onboarding2 />} />
          <Route path='/Onboarding3' element={<Onboarding3 />} />
          <Route path='/Onboarding4' element={<Onboarding4 />} />
          <Route path='/Onboarding6' element={<Onboarding6 />} />
          <Route path='/Onboarding8' element={<Onboarding8 />} />
          <Route path='/Onboarding9' element={<Onboarding9 />} />
        </Routes>
      </Router>
      {/* <Login /> */}
      {/* <Onboarding1 /> */}
      {/* <Onboarding2 /> */}
      {/* <Onboarding3 /> */}
      {/* <Onboarding4 /> */}
      {/* <Onboarding6 /> */}
      {/* <Onboarding8 /> */}
      {/* <Onboarding9 /> */}
      {/* <Register /> */}
      {/* <Resetpassword /> */}

    </div>
  )
  
}



export default App;
