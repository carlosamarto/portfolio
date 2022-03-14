import About from "./components/sections/About";
import Intro from "./components/sections/Intro";
import Featured from "./components/sections/Featured";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Intro />
      <About />
      <Featured />
    </Container>
  );
}

export default App;
