import About from "./components/sections/About";
import Intro from "./components/sections/Intro";
import Featured from "./components/sections/Featured";
import Container from "./components/Container/Container";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

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
