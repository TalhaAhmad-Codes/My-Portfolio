import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
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
