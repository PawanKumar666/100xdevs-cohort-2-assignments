import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Dashboard from '../components/Dashboard';
import NavBar from '../components/NavBar';

function App() {

  return (
    <div>
      {/* <div>
        <button onClick={() => navigate("/")}>Landing Page</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      </div> */} {/* With the above code, the html, css and js files are refetched on navigation*/ }
      
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
