import "./globals.css";
import App from "./App";
import NotFound from "./404";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
