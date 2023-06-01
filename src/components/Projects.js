import Project from "./Project";
import Fade from "react-reveal/Fade";

import { projects } from "../utils/ProjectList";
import styled from "styled-components";

const Container = styled.div`
   padding: 40px 0;
   min-height: 100vh;
`;

const Title = styled.h3`
   text-align: center;
   margin-bottom: 40px;
   color: #000;
   font-family: "Dosis", sans-serif;
   font-weight: 500;
   font-size: 35px;
   letter-spacing: 1px;
`;

const InnerContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-around;
   gap: 20px;
`;

function Projects() {
   return (
      <Container id="projects">
         <Title>Mes projets</Title>
         <Fade right>
            <InnerContainer>
               {projects.map((project, index) => (
                  <Project
                     name={project.name}
                     image={project.image}
                     description={project.description}
                     link={project.link}
                     key={index}
                  />
               ))}
            </InnerContainer>
         </Fade>
      </Container>
   );
}

export default Projects;
