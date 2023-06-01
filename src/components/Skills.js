import styled from 'styled-components'

import Skill from './Skill'
import logo_html_small from '../assets/images/icons/html5-small.svg'
import logo_html from '../assets/images/icons/html5.svg'
import logo_css_small from '../assets/images/icons/css3-small.svg'
import logo_css from '../assets/images/icons/css3.svg'
import logo_sass_small from '../assets/images/icons/sass-small.svg'
import logo_sass from '../assets/images/icons/sass.svg'
import logo_javascript_small from '../assets/images/icons/javascript-small.svg'
import logo_javascript from '../assets/images/icons/javascript.svg'
import logo_react_small from '../assets/images/icons/react-small.svg'
import logo_react from '../assets/images/icons/react.svg'
import logo_vuejs_small from '../assets/images/icons/vuejs-small.svg'
import logo_vuejs from '../assets/images/icons/vuejs.svg'
import logo_redux_small from '../assets/images/icons/redux-small.svg'
import logo_redux from '../assets/images/icons/redux.svg'
import logo_node_small from '../assets/images/icons/nodejs-small.svg'
import logo_node from '../assets/images/icons/nodejs.svg'
import logo_php_small from '../assets/images/icons/php-small.svg'
import logo_php from '../assets/images/icons/php.svg'
import logo_mysql_small from '../assets/images/icons/mysql-small.svg'
import logo_mysql from '../assets/images/icons/mysql.svg'
import logo_mongodb_small from '../assets/images/icons/mongodb-small.svg'
import logo_mongodb from '../assets/images/icons/mongodb.svg'

const Container = styled.div`
  background-color: #444444;
  padding-top: 20px;
  overflow: hidden;
  min-height: 100vh;
`;

const SkillWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-between;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  color: #f9f9f9;
  font-family: 'Dosis', sans-serif;
  font-weight: 500;
  font-size: 35px;
  letter-spacing: 1px;
  margin: 15px 0 30px 0;
`;

function Skills() {

  return(
    <Container id="skills">
      <Title>Mes compétences</Title>
      <SkillWrapper>
        <Skill name="HTML5" logo={window.screen.width < 768 ? logo_html_small : logo_html}/>
        <Skill name="CSS3" logo={window.screen.width < 768 ? logo_css_small : logo_css}/>
        <Skill name="Sass" logo={window.screen.width < 768 ? logo_sass_small : logo_sass}/>
        <Skill name="Javascript" logo={window.screen.width < 768 ? logo_javascript_small : logo_javascript}/>
        <Skill name="React & React Native" logo={window.screen.width < 768 ? logo_react_small : logo_react}/>
        <Skill name="Vue.js" logo={window.screen.width < 768 ? logo_vuejs_small : logo_vuejs}/>
        <Skill name="Redux" logo={window.screen.width < 768 ? logo_redux_small : logo_redux}/>
        <Skill name="Node.js" logo={window.screen.width < 768 ? logo_node_small : logo_node}/>
        <Skill name="PHP" logo={window.screen.width < 768 ? logo_php_small : logo_php}/>
        <Skill name="MySQL" logo={window.screen.width < 768 ? logo_mysql_small : logo_mysql}/>
        <Skill name="MongoDB" logo={window.screen.width < 768 ? logo_mongodb_small : logo_mongodb}/>
      </SkillWrapper>
    </Container>
  )
}

export default Skills