import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Simulation from './pages/simulation/simulation';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Simulation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
