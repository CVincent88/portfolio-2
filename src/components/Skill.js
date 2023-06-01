import styled, { keyframes } from 'styled-components'
import Zoom from 'react-reveal/Zoom'

const pulse = keyframes`
  0% {transform: scale(1);}
  50% {transform: scale(1.2);}
  100% {transform: scale(1);}
`;

const Container = styled.li`
  width: 50%;
  margin: 20px 0;
  list-style-type: none;

  @media(min-width: 600px){
    width: 33%;
  }
  @media(min-width: 768px){
    width: 20%;
    margin: 30px 0;
  }
  @media(min-width: 1440px){
    width: 10%;
    margin: 30px 0;
  }

  &:hover img{
    animation: ${pulse} .9s ease-out infinite
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Skillname = styled.span`
  color: #fff;
  margin: 8px 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
`;


function Skill({ name, logo }) {
  return(
    <Container >
      <Zoom>
        <InnerContainer>
          <img src={logo} alt={`${name} logo`}/>
          <Skillname>{name}</Skillname>
        </InnerContainer>
      </Zoom>
    </Container>
  )
}

export default Skill