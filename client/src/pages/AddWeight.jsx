import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddWeight = () => {
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  // Get today's date in yyyy-mm-dd format
  const maxDate = new Date().toISOString().split('T')[0];

  const handleAddWeight = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:5000/api/weight/add',
        { weight, date },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('✅ Weight added successfully!');
      setIsError(false);
      setWeight('');
      setDate('');

      // Hide message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to add weight.');
      setIsError(true);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-start p-14">
      {/* Header Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => navigate('/visualize/week')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Visualize Past Week
        </button>
        <button
          onClick={() => navigate('/visualize/month')}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          Visualize Past Month
        </button>
        <button
          onClick={() => navigate('/visualize/custom')}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Custom Visualization
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleAddWeight} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Add Your Weight</h2>

        <label className="block mb-2 font-medium">Weight (in kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded"
        />

        <label className="block mb-2 font-medium">Date</label>
        <input
          type="date"
          value={date}
          max={maxDate}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded"
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Weight
        </button>

        {message && (
          <p
            className={`text-center mt-4 font-semibold ${
              isError ? 'text-red-600' : 'text-green-700'
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddWeight;
