import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const List: React.FC = () => {
  const options = [
    {value: 'Adriano',label: 'Adriano'},
    {value: 'Maria',label: 'Maria'},
    {value: 'Joaquina',label: 'Joaquina'},
  ];
  return (
      <Container>
          <ContentHeader 
            title='Saidas'
            lineColor='#E44C4E'>
            <SelectInput options={options}/>

          </ContentHeader>
      </Container>
  );
};


export default List;