import React from "react";

export const FoodMenu = () => {
  return (
    <div className="flex bg-gray-900 h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-black p-4">
        <div className="text-3xl font-bold text-orange-500 mb-8">Logo</div>
        <div className="text-gray-400 mb-4">Меню</div>
        <div className="space-y-4">
          <button className="w-full text-left bg-orange-500 text-white py-2 px-4 rounded">Страва дня</button>
          <button className="w-full text-left border border-orange-500 text-white py-2 px-4 rounded">Супи</button>
          <button className="w-full text-left border border-orange-500 text-white py-2 px-4 rounded">Гарнір</button>
          <button className="w-full text-left border border-orange-500 text-white py-2 px-4 rounded">Десерти</button>
          <button className="w-full text-left border border-orange-500 text-white py-2 px-4 rounded">Коктейлі</button>
          <button className="w-full text-left border border-orange-500 text-white py-2 px-4 rounded">Салати</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-900">
        {/* Header */}
        <div className="flex items-center mb-8">
          <input
            type="text"
            placeholder="Пошук"
            className="flex-1 p-2 rounded bg-gray-800 text-white"
          />
          <i className="fas fa-search text-gray-400 ml-2"></i>
          <i className="fas fa-shopping-cart text-orange-500 ml-4"></i>
          <i className="fas fa-user-circle text-gray-400 ml-4"></i>
        </div>

        {/* Banner */}
        <div className="bg-gray-800 p-8 rounded mb-8 text-center text-2xl">Банер</div>

        {/* Food Items */}
        <div className="grid grid-cols-3 gap-4">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded">
                <img
                  src="https://placehold.co/300x200"
                  alt="Food Item"
                  className="rounded mb-4"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white">Food Item {index + 1}</div>
                    <div className="text-orange-500">$5.00</div>
                  </div>
                  <button className="bg-gray-700 text-white p-2 rounded">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default FoodMenu;
