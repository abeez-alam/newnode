import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';
import UserRoutes from './components/routes/Private';
import UserDashboard from './Pages/user/UserDashboard';
import YourOrder from './Pages/user/YourOrder';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={}></Route> */}
         <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<UserRoutes />}>
        <Route path='' element={<UserDashboard />} />
        <Route path='your-order' element={<YourOrder />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
