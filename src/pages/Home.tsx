import MainLayout from "../components/layout/MainLayout";

import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function Home() {
  return (
    <MainLayout>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default Home;