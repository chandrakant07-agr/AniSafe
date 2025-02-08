import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Home/Home'
import Adopt from "./Adopt/Adopt";
import Help from "./Help/Help"
import Donate from "./Donate/Donate"


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              < Home />
            </>
          }
        />

        {/* AdoptPet Route */}
        <Route
          path="/adoptpet"
          element={
            <>
              <Adopt />
            </>
          }
        />
        {/* Donate Route */}
        <Route
          path="/Donate"
          element={
            <>
              < Donate />
            </>
          }
        />
        {/* Help Route */}
        <Route
          path="/Help"
          element={
            <>
              < Help />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
