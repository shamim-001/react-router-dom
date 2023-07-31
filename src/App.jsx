import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <nav className="sm:max-w-sm mx-auto flex gap-2 bg-slate-800 text-white">
        <Link className="px-2 py-1 hover:bg-slate-900" to={"/"}>
          Home
        </Link>
        <Link className="px-2 py-1 hover:bg-slate-900" to={"/about"}>
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
