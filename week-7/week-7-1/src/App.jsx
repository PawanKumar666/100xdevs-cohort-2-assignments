import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import NavBar from './components/NavBar';
// Why to load all the components and create a big js file to send the user at once, instead of loading the components on demand?
// Answer: It is not a good idea to load all the components and create a big js file to send the user at once, instead of loading the components on demand.
// It is better to load the components on demand and send the user to the desired page.
// Lazy loading in react solves this

// import Dashboard from React.lazy(() => import('../components/Dashboard'));

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"))

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
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Landing /></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
