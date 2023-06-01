import { useState } from "react";
import styled from "styled-components";

import MenuButton from "./components/MenuButton";
import Menu from "./components/Menu";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Wrapper = styled.div`
   background-color: #f9f9f9;
`;

const Container = styled.div`
   position: relative;
`;

function App() {
   const [isMenuVisible, setIsMenuVisible] = useState(false);

   const toggleMenu = () => {
      setIsMenuVisible((prevState) => !prevState);
   };

   return (
      <Wrapper className="App">
         <Container>
            <MenuButton onClick={toggleMenu} isMenuVisible={isMenuVisible} />
            <Menu menuVisible={isMenuVisible} toggleMenu={toggleMenu} />
            <About />
            <Skills />
            <Projects />
            <Contact />
         </Container>
      </Wrapper>
   );
}

export default App;
