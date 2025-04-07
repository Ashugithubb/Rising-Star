import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import Tests from "./Components/Tests";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Login Page as the default page */}
      <Route path="/home" element={<HomePage />} /> {/* Home Page after login */}
      <Route path="/tests" element={<Tests />} />
    </Routes>
  );
}

export default App;
