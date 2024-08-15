import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="min-h-screen flex bg-green-100">
      <aside className="w-64 bg-blue-600 text-white p-6">
        <h1 className="text-2xl font-semibold mb-6">Admin Panel</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${isActive ? 'bg-blue-400' : 'hover:bg-gray-600'}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${isActive ? 'bg-blue-400' : 'hover:bg-gray-600'}`
                }
              >
                Users
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/admin/settings"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${isActive ? 'bg-blue-400' : 'hover:bg-gray-600'}`
                }
              >
                Settings
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/admin/feedbacks"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${isActive ? 'bg-blue-400' : 'hover:bg-gray-600'}`
                }
              >
                Feedbacks
              </NavLink>
              </li>
            <li className="mb-4">
              <NavLink
                to="/admin/residuos"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${isActive ? 'bg-blue-400' : 'hover:bg-gray-600'}`
                }
              >
                Residuos
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPage;
