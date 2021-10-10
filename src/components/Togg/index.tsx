import React from 'react';

import { 
  Container,
  ToggleLabel,
  ToggleSelector
 } from './styles';


const Togg: React.FC = () => {
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector 
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={() => console.log('mudou')}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};


export default Togg;