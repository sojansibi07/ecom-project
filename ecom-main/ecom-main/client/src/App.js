
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './components/homepage';
import Calculator from './components/calc';
import Login from './components/login';
import Register from './components/register';
import Error from './components/error';
function App() {
  return (
    <>
    <NavBar /> 
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/error' element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
