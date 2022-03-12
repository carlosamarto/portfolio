import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="container">
        <article className="min-h-initial">{children}</article>
      </main>

      <Footer />
    </>
  );
};

export default Container;
