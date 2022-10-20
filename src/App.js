import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./Components/Customer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/customer" element={<Customer />} />
      </Routes>
    </div>
  );
}

export default App;
