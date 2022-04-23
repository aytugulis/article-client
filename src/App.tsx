import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TextInput } from "./components/TextInput";
import { Heart, Horse } from "phosphor-react";
import { TestScreen } from "./Screens/TestScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TestScreen />} />
        <Route path="/login" element={<>login</>} />
        <Route path="/register" element={<>register</>} />
      </Routes>
    </Router>
  );
}

export default App;
