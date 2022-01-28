import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import AmorP from './pages/AmorP'
import Amorpp from './pages/Amorpp'
import Page404 from './pages/Page404'

function App() {
  return (
    <div className=" font-spartan">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="amorp" element={<AmorP />} />
        <Route path="amorpp" element={<Amorpp />} />
        <Route path="page404" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
