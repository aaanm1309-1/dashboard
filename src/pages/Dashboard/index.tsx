import React from 'react';
import { Container } from './styles';
import ContentHeader from "../../components/ContentHeader";
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {

  const options = [
    {value: 'Adriano',label: 'Adriano'},
    {value: 'Maria',label: 'Maria'},
    {value: 'Joaquina',label: 'Joaquina'},
  ];
  const frutas = [
    {value: 'Banana',label: 'Banana'},
    {value: 'Abacate',label: 'Abacate'},
    {value: 'Melancia',label: 'Melancia'},
  ];
  return (
      <Container>
          <ContentHeader 
            title='Dashboard'
            lineColor='#F7931B'>
            <SelectInput options={options}/>
            <SelectInput options={frutas}/>

          </ContentHeader>
      </Container>
  );
};


export default Dashboard;