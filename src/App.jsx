import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoanPage from "./pages/LoanPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loanPage" element={<LoanPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
     
    </Router>
  );
};

export default App;
