import styled from "styled-components";

import github_icon from "../assets/images/icons/github.svg";
import search_icon from "../assets/images/icons/search.svg";

const Container = styled.div`
   display: flex;
   flex-basis: 100%;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: background-color 0.2s linear;
   &:hover {
      background-color: rgba(0, 0, 0, 0.3);
   }
`;

const Link = styled.a`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   padding: 5px 0;
`;

function LinkIcon({ type, link }) {
   return (
      <Container>
         {type === "github" ? (
            <Link href={link}>
               <img src={github_icon} alt="GitHub icon" />
            </Link>
         ) : (
            <Link href={link}>
               <img src={search_icon} alt="Go to website icon" />
            </Link>
         )}
      </Container>
   );
}

export default LinkIcon;
