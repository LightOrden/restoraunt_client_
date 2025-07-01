import React from 'react';
import { Link } from 'react-router-dom'; // Імпортуємо Link для навігації
import './Login.css';
import logo from '../../assets/logo.png'; // Імпортуємо логотип

function Login() {
  return (
    <div className="login-container h-screen flex items-center justify-center bg-black">
      <div className="flex w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        {/* Ліва частина з формою */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl text-white mb-6">Вхід</h2>
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="email">
                Логін
              </label>
              <input
                className="w-full p-3 border border-gray-700 rounded bg-black text-white"
                id="email"
                type="email"
                placeholder="Введіть ваш email"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-white text-sm mb-2" htmlFor="password">
                Пароль
              </label>
              <input
                className="w-full p-3 border border-gray-700 rounded bg-black text-white"
                id="password"
                type="password"
                placeholder="Введіть ваш пароль"
              />
              <i className="fas fa-eye absolute right-3 top-10 text-gray-500"></i>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-white text-sm">
                <input className="mr-2" type="checkbox" />
                Запам'ятати мене
              </label>
              <a className="text-orange-500 text-sm" href="#">
                Забули пароль
              </a>
            </div>
            <button className="w-full bg-orange-500 text-white py-3 rounded">Увійти</button>
          </form>
          <p className="text-white text-sm mt-6">
            Немає акаунту?{' '}
            <Link to="/register" className="text-orange-500">
              Зареєструватися
            </Link>
          </p>
        </div>

        <div className="w-1/2  rounded-r-lg flex items-center justify-center">
          <img src={logo} alt="Restaurant Logo" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Login;
