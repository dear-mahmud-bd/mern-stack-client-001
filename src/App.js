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
import AllProduct from './Pages/Shared/AllProduct';
import Footer from './Pages/Shared/Footer';
import { ToastContainer } from 'react-toastify';
import NotFound from './Pages/Shared/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import StockUpdate from './Pages/StockUpdate/StockUpdate';
import DeleteItem from './Pages/DeleteItem/DeleteItem';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-screen flex flex-col bg-primary'>
        <Header />
        <main className='mt-0 md:mt-20 px-4 md:px-16 py-4 w-full bg-primary'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/service' element={
              <RequireAuth>
                <Service />
              </RequireAuth>
            } />
            <Route path='/stock-update/:id' element={<StockUpdate />} />
            <Route path='/allitem' element={<AllProduct />} />
            <Route path='/additem' element={<AddItem />} />
            <Route path='/deleteitem' element={<DeleteItem />} />
            <Route path='/register' element={<Register />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
      <ToastContainer></ToastContainer>
    </AnimatePresence>
  );
}

export default App;
