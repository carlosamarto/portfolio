import "./Globals.css";
import { App } from "./App";
import { NotFound } from "./404";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
);
