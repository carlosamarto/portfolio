import { Main } from "./components/container/Main";
import { About } from "./components/sections/About";
import { Intro } from "./components/sections/Intro";
import { Contact } from "./components/sections/Contact";
import { Projects } from "./components/sections/Projects";
import { Featured } from "./components/sections/Featured";

function App() {
  return (
    <Main>
      <Intro />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </Main>
  );
}

export { App };
