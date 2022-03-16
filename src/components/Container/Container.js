import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>
        <article className="flex flex-col gap-12 min-h-vh">{children}</article>
      </main>

      <Footer />
    </>
  );
};

export default Container;
