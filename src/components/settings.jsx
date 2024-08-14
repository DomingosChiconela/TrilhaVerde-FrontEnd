import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [siteName, setSiteName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/settings', { siteName });
      alert('Settings updated successfully.');
    } catch (error) {
      console.error('Error updating settings', error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Settings</h3>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Site Name:</span>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
