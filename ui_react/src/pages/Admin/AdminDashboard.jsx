import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D')` }}>
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          {/* Logo */}
          <div className="text-center mb-6">
            <img src="/logo.svg" alt="ADMIN" className="h-8 w-auto mx-auto" />
          </div>
          {/* Navigation */}
          <nav>
            <ul>
              <li className="mb-2">
                <Link to="/userdashboard" className="text-sm text-gray-800 hover:text-blue-600">Dashboard</Link>
              </li>
              <li className="mb-2">
                <Link to="/events" className="text-sm text-gray-800 hover:text-blue-600">Events</Link>
              </li>
              <li className="mb-2">
                <Link to="/orders" className="text-sm text-gray-800 hover:text-blue-600">Orders</Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
          {/* Extra fields */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Party Event Management</h3>
            <p className="text-sm text-gray-600">Total Events: 100</p>
            <p className="text-sm text-gray-600">Total Users: 500</p>
            {/* Add more extra fields as needed */}
          </div>
          {/* End of extra fields */}
        </div>
      </div>
      {/* Main content area */}
      <div className="flex-1">
        {/* Your main content goes here */}
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
          {/* Content */}
          <div className="bg-white rounded-md shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Manage Events</h2>
            <ul className="space-y-4">
              <li className="text-gray-700">Event 1 - Date, Time</li>
              <li className="text-gray-700">Event 2 - Date, Time</li>
              <li className="text-gray-700">Event 3 - Date, Time</li>
              {/* Add more events */}
            </ul>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
            <ul className="space-y-4">
              <li className="text-gray-700">Order 1 - User, Date</li>
              <li className="text-gray-700">Order 2 - User, Date</li>
              <li className="text-gray-700">Order 3 - User, Date</li>
              {/* Add more orders */}
            </ul>
          </div>
          {/* Add more content sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
