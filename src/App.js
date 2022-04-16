import React from "react";
import {
  BrowserRouter,
  Routes,
  Route, Switch, Navigate
} from "react-router-dom";


import './App.css';
import CategoryList from "./page/categoryList/CategoryList";
import ClipBoardList from "./page/clipList/ClipBoardList";
import { LoginButton } from "./page/login/Login";

function App() {

  const isAuthenticated = () => {
    const token = localStorage.getItem("User");
    return token ? true : false;
  };

  const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/" /> : children;
  };
  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />
  };


  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<PublicRoute ><LoginButton /></PublicRoute>} />

          <Route exact path="/" element={
            <PrivateRoute>
              <CategoryList />
            </PrivateRoute>} />
          <Route exact path="/clip/:category" element={
            <PrivateRoute>
              <ClipBoardList />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
