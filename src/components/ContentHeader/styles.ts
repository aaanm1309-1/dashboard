import styled from "styled-components";

interface ITitleProps {
  lineColor: string;
}


export const Container = styled.div`


  width: 100%; 

  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;


`;


export const TitleContainer = styled.div`
`;

export const Title = styled.h2<ITitleProps>`

  &::after { 
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${props => props.lineColor};
  }


`;

export const Controllers = styled.div`
  display: flex;
  flex-direction: row;

`;


