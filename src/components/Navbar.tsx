import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TaskMaster Pro</h1>
        <p>My Awesome App</p>
      </div>
    </nav>
  );
}

export default Navbar;