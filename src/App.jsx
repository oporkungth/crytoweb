import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import CryptoHome from './pages/CryptoHome';
import CryptoDetail from './pages/CryptoDetail';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App