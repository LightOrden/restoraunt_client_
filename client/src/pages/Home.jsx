import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl mb-8">Ласкаво просимо!</h1>
      <div className="space-x-4">
        <Link to="/login" className="bg-orange-500 py-2 px-4 rounded text-white">Увійти</Link>
        <Link to="/register" className="bg-orange-500 py-2 px-4 rounded text-white">Зареєструватися</Link>
      </div>
    </div>
  );
}

export default Home;
