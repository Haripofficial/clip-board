import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import './App.css';
import CategoryList from "./page/categoryList/CategoryList";
import ClipBoardList from "./page/clipList/ClipBoardList";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CategoryList />} />
          <Route exact path="/clip/:category" element={<ClipBoardList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
