// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddWeight from './pages/Addweight';
import VisualizeWeek from './pages/VisualizeWeek';
import VisualizeMonth from './pages/VisualizeMonth';
import CustomVisualize from './pages/CustomVisualize';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-weight" element={<AddWeight />} />
         <Route path="/visualize/week" element={<VisualizeWeek />} />
        <Route path="/visualize/month" element={<VisualizeMonth />} />
        <Route path="/visualize/custom" element={<CustomVisualize />} />
      </Routes>
    </Router>
  );
}

export default App;
