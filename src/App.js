import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { ProductListing } from './pages/ProductListing/ProductListing';
import { Cart } from './pages/Cart/Cart';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

            {/* <ProductListing /> */}
        </div>
    );
}

export default App;
