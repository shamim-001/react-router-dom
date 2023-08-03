import "../server";

import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import VanPage from "./pages/van/VanPage";
import VanDetailsPage from "./pages/van/VanDetailsPage";

import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./pages/host/HostLayout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index exact element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="van" element={<VanPage />} />
          <Route path="van/:id" element={<VanDetailsPage />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
