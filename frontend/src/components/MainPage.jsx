import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-6">Medicine Management System</h1>
      <div className="space-x-4">
        <Link
          to="/admin"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Admin
        </Link>
        <Link
          to="/operator"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Operator
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
