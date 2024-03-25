import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/home";
import LoginPage from "./pages/Login/login";
import SignUpPage from "./pages/Register/signUp";
import SinglePostPage from "./pages/Posts/post";
import NewPostPage from "./pages/Posts/createPost";
import TimeLinePage from "./pages/Posts/timeLine"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/post" element={<SinglePostPage />} />
      <Route path="/newpost" element={<NewPostPage />} />
      <Route path="/pages" element={<TimeLinePage />} />

      <Route
        path="/*"
        element={
          <>
            <HomePage></HomePage>
          </>
        }
      />
    </Routes>
  );
}

export default App;
