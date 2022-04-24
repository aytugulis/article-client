import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TestPage } from "./pages/TestPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/login" element={<TestPage />} />
        <Route path="/register" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
