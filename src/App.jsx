import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SideBar from "./components/layout/SideBar";
import CookieBanner from "./components/ui/CookieBanner";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Pentakuhl from "./pages/Pentakuhl";

export default function App() {
  return (
    <BrowserRouter>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <SideBar />
        <CookieBanner />

        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/pentakuhl" element={<Pentakuhl />} />
          </Routes>
        </div>
      </motion.div>
    </BrowserRouter>
  );
}
