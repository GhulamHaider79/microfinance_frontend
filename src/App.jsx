import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoanPage from "./pages/LoanPage";


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loanPage" element={<LoanPage />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<RegisterCar />} /> */}
      </Routes>
     
    </Router>
  );
};

export default App;
