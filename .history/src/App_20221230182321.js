import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Home/Navigation/Navigation";
import Home from "./Components/Home/Home/Home";
import AuthProvider from "./Components/Authentication/context/AuthProvider";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Navigation />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/:routeId" element={<Products />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
