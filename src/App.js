import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';
import Login from './Components/Login/Login';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Navigate to="/panel/login" replace />} />
        <Route path='/panel/login' index element={<Login />} />
        <Route path='/panel/home' index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
