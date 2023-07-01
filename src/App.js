import {Suspense, lazy} from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./view/Landing/Landing";
const Order  = lazy(()=>import("./view/OrderView/OrderView")) ;
const  ProductsView = lazy(()=>import("./view/ProductsView/ProductsView")) ;
const NetworksLocationView  = lazy(()=>import("./view/NetworksLocationView/NetworksLocationView")) ;
const  WorkshopView = lazy(()=>import("./view/WorkshopView/WorkshopView")) ;
const  MainView = lazy(()=>import("./view/MainView/MainView")) ;
const  SelectArticleView = lazy(()=>import("./view/SelectArticleView/SelectArticleView")) ;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Suspense fallback={<Landing/>}><MainView/></Suspense>} />
          <Route path="/taller" element={<Suspense fallback={<Landing/>}><WorkshopView/></Suspense>} />
          <Route path="/order" element={<Suspense fallback={<Landing/>}><Order/></Suspense>} />
          <Route path="/order/:article" element={<Suspense fallback={<Landing/>}><Order/></Suspense>} />
          <Route path="/select" element={<Suspense fallback={<Landing/>}><SelectArticleView /></Suspense>} />
          <Route path="/products" element={<Suspense fallback={<Landing/>}>< ProductsView/></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<Landing/>}><NetworksLocationView/></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
