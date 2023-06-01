import { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'

import FormInput from './FormInput'

const Container = styled.div`
  width: 100%;
  background-color: #444444;
  margin-top: 20px;
  padding: 30px 0 30px 0;
`;

const InnerContainer = withReveal(styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media(min-width: 768px){
    flex-direction: row;
    justify-content: space-around;
  }
`, <Fade left/>);

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  color: #f9f9f9;
  font-family: 'Dosis', sans-serif;
  font-weight: 500;
  font-size: 26px;
  letter-spacing: 1px;
  @media(min-width: 600px){
    font-size: 35px;
  }
`;

const Text = styled.p`
  color: #f9f9f9;
  font-family: 'Titillium Web', sans-serif;
  font-syle: italic;
  font-weight: 100;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 10px;
  @media(min-width: 600px){
    font-size: 22px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 0 30px;
`;

const SubmitButton = styled.a`
  font-family: 'Dosis', sans-serif;
  text-decoration: none;
  border-radius: 4px;
  padding: 10px 15px;
  background-color: #444444;
  margin-top: 15px;
  border: 1px solid #f9f9f9;
  color: #f9f9f9;
  outline: none;
  transition: all .3s linear;
  &:hover{
    background-color: #f9f9f9;
    color: #444444;
  }
  &:active{
    background-color: #f9f9f9;
    color: #444444;
  }
`;

function Contact() {

  const [name, setName] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');
  

  return(
    <Container id="contact">
      <InnerContainer>
        <Header>
          <Title>Contact</Title>
          <Text>Pour plus d'information,<br/> n'hésitez pas à m'envoyer un message !</Text>
        </Header>
        <FormContainer>
          <FormInput type="text" placeholder="Nom" value={name} onChange={setName} />
          <FormInput type="text" placeholder="Objet" value={object} onChange={setObject}/>
          <FormInput type="textarea" placeholder="Votre message" value={message} onChange={setMessage}/>
          <SubmitButton href={`mailto:come.vincent@live.fr?subject=${name} - ${object}&body=${message}`} >Envoyer</SubmitButton>
        </FormContainer>
      </InnerContainer>
    </Container>
  )
}

export default Contact