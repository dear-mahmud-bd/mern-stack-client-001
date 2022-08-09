import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import { AnimatePresence } from 'framer-motion';
import Register from './Pages/Login/Register';
import Login from './Pages/Login/Login';
import Service from './Pages/Service/Service';
import RequireAuth from './Pages/Login/RequireAuth';
import AddItem from './Pages/Protect/AddItem';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-screen flex flex-col bg-primary'>
        <Header />
        <main className='mt-0 md:mt-1 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/service' element={
              <RequireAuth>
                <Service />
              </RequireAuth>
            } />
            <Route path='/additem' element={<AddItem />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
