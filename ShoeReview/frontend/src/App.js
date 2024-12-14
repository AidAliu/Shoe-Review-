import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import CreateShoe from "./pages/CreateShoe";
import ShoeDashboard from "./pages/ShoeDashboard";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ShoeDashboard />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/create-shoe" element={<CreateShoe />} />
            </Routes>
        </Router>
    );
}

export default App;
