import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { ManageQR } from "./pages/ManageQR";
import  {History}  from "./pages/History";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-qr" element={<ManageQR />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settlement-history" element={<History/>} />
      </Routes>
    </Router>
  );
}

export default App;


