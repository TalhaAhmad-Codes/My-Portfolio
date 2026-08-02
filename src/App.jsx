import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen p-8 bg-slate-50 text-slate-900">
      {/* Navigation and interactive links go OUTSIDE <Routes> */}
      <nav className="mb-6">
        <Link to="/" className="text-blue-600 hover:underline font-semibold">
          Welcome to my Portfolio
        </Link>
      </nav>

      {/* <Routes> ONLY contains <Route> components */}
      <Routes>
        <Route
          path="/"
          element={<div className="text-2xl font-bold">Hello, World!</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
