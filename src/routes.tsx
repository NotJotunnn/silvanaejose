import PageLayout from "./components/PageLayout";
import GiftShop from "./pages/GiftShop";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import { HashRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/presentes" element={<GiftShop />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
