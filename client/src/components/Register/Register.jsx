import React from 'react';
import './Register.css';
import logo from '../../assets/logo.png';

export function Register() {
  return (
    <div className="register-container flex w-full max-w-4xl bg-black rounded-lg overflow-hidden">
      <div className="w-1/2 p-8">
        <h2 className="text-3xl text-white mb-6">Реєстрація</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="name">Ім'я</label>
            <input
              className="w-full p-3 border border-gray-700 rounded bg-black text-white"
              id="name"
              type="text"
              placeholder="Введіть ваше ім'я"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-3 border border-gray-700 rounded bg-black text-white"
              id="email"
              type="email"
              placeholder="Введіть ваш email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="password">Пароль</label>
            <input
              className="w-full p-3 border border-gray-700 rounded bg-black text-white"
              id="password"
              type="password"
              placeholder="Введіть ваш пароль"
            />
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded">Зареєструватися</button>
        </form>
        <p className="text-white text-sm mt-6">
          Вже маєте акаунт? <a className="text-orange-500" href="/login">Увійти</a>
        </p>
      </div>
      <div className="w-1/2  rounded-r-lg flex items-center justify-center">
          <img src={logo} alt="Restaurant Logo" className="max-w-full h-auto" />
        </div>
    </div>
  );
}

export default Register;
