import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Landing from "../pages/Landing/Landing";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Quality from "../pages/Quality/Quality";
import Explore from "../pages/Explore/Explore";
import KnowMore from "../pages/KnowMore/KnowMore";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="quality" element={<Quality />} />
        <Route path="explore" element={<Explore />} />
        <Route path="know-more" element={<KnowMore />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;