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
  Switch,
} from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/:routeId">
              <Products></Products>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
