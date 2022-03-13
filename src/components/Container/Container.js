import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>
        <article className="flex flex-col lg:gap-2 md:gap-12 gap-24 min-h-vh">
          {children}
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Container;
