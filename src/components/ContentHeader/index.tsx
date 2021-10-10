import React from 'react';
import { 
  Container,
  Title,
  Controllers,
  TitleContainer,

} from './styles';


const ContentHeader: React.FC = () => {


  return (
    <Container>
      <TitleContainer>
        <Title>Título</Title>
      </TitleContainer>
      <Controllers>
        <button type="button">Botão A</button>
        <button type="button">Botão B</button>

      </Controllers>
      
    </Container>
  );
};


export default ContentHeader;