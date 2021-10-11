import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { 
  Container,
  Content,
} from './styles';

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
          <Content>
            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Conta de Luz'
              subtitle='27/07/2021'
              amount='R$ 130,00'
            />

            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Conta de Agua'
              subtitle='27/07/2021'
              amount='R$ 90,00'
            />

            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Aluguel'
              subtitle='27/07/2021'
              amount='R$ 1500,00'
            />

            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Prestação do Carro'
              subtitle='27/07/2021'
              amount='R$ 1450,00'
            />

            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Conta de Luz'
              subtitle='27/07/2021'
              amount='R$ 130,00'
            />

            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Conta de Luz'
              subtitle='27/07/2021'
              amount='R$ 130,00'
            />

            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Conta de Luz'
              subtitle='27/07/2021'
              amount='R$ 130,00'
            />

            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Conta de Luz'
              subtitle='27/07/2021'
              amount='R$ 130,00'
            />

            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Conta de Luz'
              subtitle='27/07/2021'
              amount='R$ 130,00'
            />

            <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Conta de Luz'
              subtitle='27/07/2021'
              amount='R$ 130,00'
            />

          </Content>
      </Container>
  );
};


export default List;