import styled from "styled-components";

const Container = styled.div`
   position: fixed;
   height: 100vh;
   width: 100vw;
   background-color: rgba(0, 0, 0, 1);
   opacity: ${(props) => (props.visible ? "1" : "0")};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   z-index: 998;
   transform: ${(props) => (props.visible ? "scale(1)" : "scale(0)")};
   transition: all 0.3s linear;
`;

const Link = styled.a`
   font-family: "Open sans", "sans-serif";
   color: #f9f9f9;
   font-size: 36px;
   font-weight: 600;
   margin: 10px 0;
   cursor: pointer;
   text-decoration: none;
   &:hover {
      color: #ababab;
   }
   transition: color 0.3s linear;
`;

function Menu({ menuVisible, toggleMenu }) {
   return (
      <Container visible={menuVisible}>
         <Link href="#about" onClick={() => toggleMenu()}>
            À Propos
         </Link>
         <Link href="#skills" onClick={() => toggleMenu()}>
            Compétences
         </Link>
         <Link href="#projects" onClick={() => toggleMenu()}>
            Projets
         </Link>
         <Link href="#contact" onClick={() => toggleMenu()}>
            Contact
         </Link>
         <Link href="https://www.linkedin.com/in/côme-vincent/">Linkedin</Link>
         <Link href="https://github.com/CVincent88">Github</Link>
      </Container>
   );
}

export default Menu;
