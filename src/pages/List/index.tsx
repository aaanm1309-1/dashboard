/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */


import React, {useMemo, useState, useEffect} from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import {  v4 as uuidv4 } from 'uuid';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';


import { 
  Container,
  Content,
  Filters,
} from './styles';


interface IRouteParams {
  match: {
    params: {
      type: string
    }
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  type:string;
  frequency:string;
  dateFormatted:string;
  tagColor:string;

}

const List: React.FC<IRouteParams> = ({match}) => {

  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = 
        useState<string>(String (new Date().getMonth()+1));
  const [yearSelected, setYearSelected] = 
        useState<string>(String (new Date().getFullYear()));
  

  const { type} = match.params;

  const typePage = useMemo(() => {
    return type === 'entry-balance' ? 
      {title: 'Entradas',
      lineColor: '#f7931B'} : 
      {title: 'Saídas',
      lineColor:'#E44C4E'};
  },[type]);

  // const months = [
  //   {value: 7,label: 'Julho'},
  //   {value: 8,label: 'Agosto'},
  //   {value: 9,label: 'Setembro'},
  //   {value: 10,label: 'Outubro'},
  //   {value: 11,label: 'Novembro'},
  //   {value: 12,label: 'Dezembro'},
  //   {value: 4,label: 'Abril'},
  //   {value: 5,label: 'Maio'},
  //   {value: 6,label: 'Junho'},
  //   {value: 1,label: 'Janeiro'},
  //   {value: 2,label: 'Fevereiro'},
  //   {value: 3,label: 'Março'},
  // ];
  const listData = useMemo(() => {
    return type === 'entry-balance' ? 
      gains : 
      expenses;
  },[type]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    listData.forEach(item => {
      const year = new Date(item.date).getFullYear();
      if (!uniqueYears.includes(year)){
        uniqueYears.push(year);
      }
    });
    return uniqueYears.map(year => {
          return {
              value: year,
              label: year,
          };
        });
    

  },[ listData ]);

  const months = useMemo(() => {
      return listOfMonths.map((month, index) => {
        return {
            value: index + 1,
            label: month,
        };
      });

  },[  ]);



  useEffect(() => {
        const filteredData = 
            // listData.map((item) =>{
            listData.filter((item) =>{
                const date =  new Date(item.date);
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                return month === Number(monthSelected)
                      && year === Number(yearSelected);
            });
          const response = filteredData.map((item) =>{
                 return {
                  // id: String(Math.random() * listData.length),
                id: uuidv4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                type: item.type,
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
              };

            })
    setData(response) ;
  },[listData,monthSelected,yearSelected]);

  return (
      <Container>
          <ContentHeader 
            title={typePage.title}
            lineColor={typePage.lineColor}>
            <SelectInput options={months} 
              onChange={(e) => setMonthSelected(e.target.value)}
              defaultValue={monthSelected}/>
            <SelectInput options={years}
              onChange={(e) => setYearSelected(e.target.value)}
              defaultValue={yearSelected}/>


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
            {
              data.map(item => (
                <HistoryFinanceCard
                key={item.id}
                tagColor={item.tagColor}
                title={item.description}
                subtitle={item.dateFormatted}
                amount={item.amountFormatted}
              />
              ))
            }
            

            {/* <HistoryFinanceCard
              tagColor='#E33C4E'
              title='Conta de Luz'
              subtitle='27/07/2021'
              amount='R$ 130,00'
            /> */}


          </Content>
      </Container>
  );
};


export default List;