import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f6f2] text-[#17211b] transition-colors duration-300 antialiased dark:bg-gray-950 dark:text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <footer className="border-t border-slate-200 px-6 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © 2026 Talha Ahmad. All Rights are Reserved.
      </footer>
    </div>
  );
}

export default App;
