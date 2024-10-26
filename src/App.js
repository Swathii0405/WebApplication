

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import Trip from './Trip/Trip';






function App() {

  
  return (
    <div className='App'>

     
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/trip'element={<Trip/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/service' element = {<Service/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
