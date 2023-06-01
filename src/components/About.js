import styled from "styled-components";
import Fade from "react-reveal/Fade";

import profile_picture_small from "../assets/images/photo_profil_small.jpg";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0 5vw;
   margin-bottom: 30px;
   min-height: 100vh;
`;

const Title = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 80px 0;
   @media (min-width: 600px) {
      margin: 100px 0 100px 0;
   }
`;

const Name = styled.h1`
   font-family: "Dosis", sans-serif;
   font-weight: 700;
   font-size: 36px;
   letter-spacing: 1px;
   margin-top: 40px;
   @media (min-width: 600px) {
      font-size: 50px;
      margin-top: 0px;
   }
`;

const Function = styled.span`
   font-family: "Titillium Web", sans-serif;
   font-syle: italic;
   font-size: 300;
   font-size: 26px;
`;

const InnerContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   @media (min-width: 600px) {
      flex-direction: row;
      margin-bottom: 40px;
   }
`;

const PhotoContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   & img {
      border-radius: 5px;
   }
`;

const Text = styled.p`
   font-family: "Dosis", sans-serif;
   font-weight: 500;
   text-align: justify;
   line-height: 24px;
   max-width: 550px;
   font-size: 20px;
   letter-spacing: 1px;
   @media (min-width: 600px) {
      margin-left: 15px;
   }
   @media (min-width: 900px) {
      margin-left: 40px;
   }
`;

function About() {
   return (
      <Container id="about">
         <Fade left>
            <Title>
               <Name>CÔME VINCENT</Name>
               <Function>Développeur web</Function>
            </Title>
         </Fade>
         <Fade right>
            <InnerContainer>
               <PhotoContainer>
                  <img src={profile_picture_small} alt="Côme Vincent" />
               </PhotoContainer>
               <Text>
                  Rigoureux, polyvalent et récemment diplômé, je souhaite mettre
                  mes compétences à votre service tout en continuant à me
                  former. Les différentes professions que j'ai pu exercer m'ont
                  appris à penser et réfléchir autrement, à appréhender les
                  problèmes sous différents angles, à travailler sous pression
                  et à toujours me remettre en question afin de progresser en
                  permanence et acquérir une grande ouverture d'esprit.{" "}
               </Text>
            </InnerContainer>
         </Fade>
      </Container>
   );
}

export default About;
