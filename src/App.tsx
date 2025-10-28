import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import UserList from './components/UserList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      
      <Navbar />

      {/* Main content area */}
      <main className="container mx-auto p-4">
        <TaskManager />
        <UserList />
      </main>

      <Footer />

    </div>
  );
}

export default App;