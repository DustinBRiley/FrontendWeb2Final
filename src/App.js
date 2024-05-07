import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Account from './pages/account/Account';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';
import Shop from './pages/shop/Shop';
import PageNotFound from './pages/404/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
