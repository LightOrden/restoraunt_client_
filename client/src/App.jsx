import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import Login from './components/Login/Login';
import FoodMenu from "./components/FoodMenu";

function App() {
  return (
    <Router ClassName="bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/menu" element={ <FoodMenu /> }/>
      </Routes>
    </Router>
  );
}

export default App;
