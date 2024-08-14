import React from 'react';
import AdminPage from '../Pages/admin';

const Dashboard = () => {
  return (
    <div>
   
      <h3 className="text-2xl font-semibold mb-4">Dashboard Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold">User Statistics</h4>
          <p>Number of users: 120</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold">System Health</h4>
          <p>Status: All systems operational</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold">Recent Activity</h4>
          <p>Last login: 10 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
