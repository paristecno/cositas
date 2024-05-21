import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Landing/Home/Home";
import Detalle from './components/Detail/Detalle/Detalle';

function App() {
  return (
    <Router basename="/cositas">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detalle />} />
      </Routes>
    </Router>
  );
}

export default App;
