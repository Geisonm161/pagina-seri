import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./view/OrderView/OrderView";
import SelectArticleView from "./view/SelectArticleView/SelectArticleView";
import ProductsView from "./view/ProductsView/ProductsView";
import NetworksLocationView from "./view/NetworksLocationView/NetworksLocationView";
import WorkshopView from "./view/WorkshopView/WorkshopView";
import MainView from "./view/MainView/MainView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainView />} />
          <Route path="/taller" element={<WorkshopView />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/:article" element={<Order />} />
          <Route path="/select" element={<SelectArticleView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/contact" element={<NetworksLocationView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
