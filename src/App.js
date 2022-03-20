import About from "./components/sections/About";
import Intro from "./components/sections/Intro";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import Featured from "./components/sections/Featured";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Intro />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
