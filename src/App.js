import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    //  className='max-w-7xl mx-auto'
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="appointment" element={ <Appointment/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
