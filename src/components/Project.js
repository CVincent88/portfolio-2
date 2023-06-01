import styled from "styled-components";

import LinkIcon from "./LinkIcon";

const Container = styled.div`
   width: 25%;
   border-radius: 4px;
   box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   margin: 0 20px;
   @media (min-width: 800px) {
      min-width: 300px;
   }
`;

const Image = styled.img`
   width: 100%;
`;

const Description = styled.div`
   padding: 10px;
`;

const Title = styled.h3`
   padding: 10px 0;
   font-family: "Open Sans", sans-serif;
   font-weight: 800;
   color: #2c2c2c;
`;

const Text = styled.p`
   font-family: "Open Sans", sans-serif;
   font-weight: 400;
   text-align: justify;
   line-height: 22px;
`;

const Footer = styled.div`
   display: flex;
   flex-direction: row;
   border-top: 1px solid rgba(0, 0, 0, 0.3);
   width: 100%;
`;

function Project({ name, image, description, link }) {
   return (
      <Container>
         <div>
            <Image src={image} alt={`${name} screenshot`} />
            <Description>
               <Title>{name}</Title>
               <Text>{description}</Text>
            </Description>
         </div>
         <Footer>
            {Object.keys(link).map((item, index) => (
               <LinkIcon type={item} link={link[item]} key={index} />
            ))}
         </Footer>
      </Container>
   );
}

export default Project;
