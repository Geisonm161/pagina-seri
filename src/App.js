import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainView from './view/MainView/MainView';
import Order from './view/OrderView/OrderView';
import SelectArticleView from './view/SelectArticleView/SelectArticleView';
import ProductsView from './view/ProductsView/ProductsView';
import ContactView from './view/ContactView/ContactView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<MainView/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/order/:article' element={<Order/>} />
        <Route path='/select' element={<SelectArticleView/>} />
        <Route path='/products' element={<ProductsView/>} />
        <Route path='/contact' element={<ContactView/>} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
