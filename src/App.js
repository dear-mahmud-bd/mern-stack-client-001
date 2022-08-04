import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Banner';
import Footer from './Pages/Shared/Footer';
import { AnimatePresence } from 'framer-motion';
import Register from './Pages/Login/Register';
import Login from './Pages/Login/Login';

function App() {
  return (
    <AnimatePresence>
      <div className='w-screen h-screen flex flex-col bg-primary'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
