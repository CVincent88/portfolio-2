import styled from "styled-components";

const Container = styled.button`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 15px;
   right: 15px;
   cursor: pointer;
   z-index: 999;
   border: none;
   background-color: transparent;
   padding: ${(props) => (props.isMenuVisible ? "0" : "6px 0")};
`;

const BlackLine = styled.span`
   width: 20px;
   height: 3px;
   background-color: #444444;
   border: none;
   border-radius: 3px;
   opacity: ${(props) => (props.isMenuVisible ? "0" : "1")};
   transition: opacity 0.3s linear;
`;
const WhiteLine = styled.span`
   width: 20px;
   height: 3px;
   background-color: #f9f9f9;
   border: none;
   border-radius: 3px;
   opacity: ${(props) => (props.isMenuVisible ? "0" : "1")};
   transition: opacity 0.3s linear;
`;

const CrossLine = styled.div`
   width: 20px;
   height: 3px;
   background-color: #f9f9f9;
   border: none;
   border-radius: 3px;
   transform: ${(props) =>
      props.side === "right"
         ? "rotate(45deg) translateY(1.5px)"
         : "rotate(-45deg) translateY(-1.5px)"};
   transform-origin: ${(props) =>
      props.side === "right" ? "bottom center" : "top center"};
   /* The opacity should work the other way around, but for some reason it doesn't */
   opacity: ${(props) => (props.isMenuVisible ? "0" : "1")};
   transition: opacity 0.3s linear;
`;

function MenuButton({ isMenuVisible, onClick }) {
   return (
      <Container onClick={() => onClick()}>
         {isMenuVisible ? (
            <>
               <CrossLine side="right" />
               <CrossLine side="left" />
            </>
         ) : (
            <>
               <BlackLine> </BlackLine>
               <WhiteLine> </WhiteLine>
               <BlackLine> </BlackLine>
               <WhiteLine> </WhiteLine>
               <BlackLine> </BlackLine>
               <WhiteLine> </WhiteLine>
            </>
         )}
      </Container>
   );
}

export default MenuButton;
