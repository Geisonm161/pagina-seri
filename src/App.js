import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./view/Landing/Landing";
const Order = lazy(() => import("./view/OrderView/OrderView"));
const ProductsView = lazy(() => import("./view/ProductsView/ProductsView"));
const NetworksLocationView = lazy(() =>
  import("./view/NetworksLocationView/NetworksLocationView")
);
const WorkshopView = lazy(() => import("./view/WorkshopView/WorkshopView"));
const MainView = lazy(() => import("./view/MainView/MainView"));
const SelectArticleView = lazy(() =>
  import("./view/SelectArticleView/SelectArticleView")
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Landing/>}>
          <Routes>
            <Route index element={<MainView />} />
            <Route path="/taller" element={<WorkshopView />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order/:article" element={<Order />} />
            <Route path="/select" element={<SelectArticleView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/contact" element={<NetworksLocationView />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
