import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterSection from './components/FooterSection';

import Home from "./pages/Home";
import LoanPage from "./pages/LoanPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import GuarantorForm from "./pages/GuarantorForm";
import UpdateBorrowerInfo from "./pages/UpdateBorrowerInfo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loanPage" element={<LoanPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/guarantor" element={<GuarantorForm />} />
        <Route path="/update-borrower-info" element={<UpdateBorrowerInfo />} />
      </Routes>
      <FooterSection />
     
    </Router>
  );
};

export default App;
