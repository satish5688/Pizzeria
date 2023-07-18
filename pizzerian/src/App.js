import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Componets/NavBar';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import OrderPage from './Pages/OrderPage';
import BuildPage from './Pages/BuildPage';
import Footer from './Componets/Footer';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/order' element={<OrderPage/>}/>
        <Route path='/build' element={<BuildPage/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
