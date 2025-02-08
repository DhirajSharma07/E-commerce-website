import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Herosection from './Component/Herosection';
import Shop from './Component/Shop';
import Repairservice from './Component/Repairservice';
import Shoppage from './Component/Shoppage';
import Individualcomponet from './Component/Individualcomponet';
import Home from './Component/Home';
import Discountcomp from './Component/Discountcomp';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Main page */}
        <Route path="/shop" element={<Shop />} /> {/* Home Content */}
        <Route path="/repairservice" element={<Repairservice />} />
        <Route path="/Discountcomp" element={<Discountcomp />} />
        <Route path="/individualcomponet" element={<Individualcomponet />} />
        <Route path="/herosection" element={<Herosection />} />
        <Route path="/shoppage" element={<Shoppage />} />
      </Routes>
    </Router>
  );
}

export default App;
