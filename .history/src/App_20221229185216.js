import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Home/Navigation/Navigation";
import Promo from "./Components/Home/Promo/Promo";
import NewArrivals from "./Components/Home/NewArrivals/NewArrivals";
import Brands from "./Components/Home/Brands/Brands";
import Home from "./Components/Home/Home/Home";
import AuthProvider from "./Components/Authentication/context/AuthProvider";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:bookStoreId" element={<InsideShop />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/inventory" element={<Inventory />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
