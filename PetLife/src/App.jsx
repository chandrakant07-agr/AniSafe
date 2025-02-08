import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Home/Home'
import Adopt from "./Adopt/Adopt";
import Help from "./Help/Help"
import Donate from "./Donate/Donate"
import ShowAdopt from "./ShowAdopt/ShowAdopt"

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <Home />
          }
        />

        {/* AdoptPet Route */}
        <Route
          path="/adoptpet"
          element={
            <Adopt />
          }
        />

        {/* AdoptPet Show Route (correct route for :id) */}
        <Route 
          path="/adoptpet/:id" 
          element={
            <ShowAdopt />
          } 
        />

        {/* Donate Route */}
        <Route
          path="/donate"
          element={
            <Donate />
          }
        />

        {/* Help Route */}
        <Route
          path="/help"
          element={
            <Help />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
