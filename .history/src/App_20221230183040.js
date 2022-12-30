import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Home/Navigation/Navigation";
import Home from "./Components/Home/Home/Home";
import AuthProvider from "./Components/Authentication/context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <Swi>
            <Route exact path="/" element={<Home />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/register" element={<Register />} />
            <Route  path="/:routeId" element={<Products />} />
          </Swi>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
