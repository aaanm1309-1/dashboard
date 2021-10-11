import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { 
  Container,
  Content,
  Filters,
} from './styles';

const List: React.FC = () => {
  const months = [
    {value: 7,label: 'Julho'},
    {value: 8,label: 'Agosto'},
    {value: 9,label: 'Setembro'},
  ];
  const years = [
    {value: 2022,label: 2022},
    {value: 2021,label: 2021},
    {value: 2020,label: 2020},
  ];
  return (
      <Container>
          <ContentHeader 
            title='Saidas'
            lineColor='#E44C4E'>
            <SelectInput options={months}/>
            <SelectInput options={years}/>

          </ContentHeader>

          <Filters>
            <button 
              type='button'
              className='tag-filter tag-filter-recurrent'>
              Recorrentes
            </button>
            <button 
              type='button'
              className='tag-filter tag-filter-eventual'>
              Eventual
            </button>

          </Filters>
            
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