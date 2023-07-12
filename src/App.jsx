// import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { Landing, Error, Register } from "./pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Profile,
  AddJob,
  AllJobs,
  Stats,
  SharedLayout,
  ProtectedRoute,
} from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
