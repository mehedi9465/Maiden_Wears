import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Home/Navigation/Navigation";
import Promo from "./Components/Home/Promo/Promo";
import NewArrivals from "./Components/Home/NewArrivals/NewArrivals";
import Brands from "./Components/Home/Brands/Brands";
import Home from "./Components/Home/Home/Home";
import AuthProvider from "./Components/Authentication/context/AuthProvider";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Switch
} from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Products from "./Components/Products/Products";
import { Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:routeId" element={<Products />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
