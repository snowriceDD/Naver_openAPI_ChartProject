import { useState } from "react";
import useTrendData from "../lib/hooks/useTrendData";
import { InputForm } from "../lib/components/InputForm";
import { TrendData } from "../lib/hooks/useTrendData";
import { Chart, ChartData } from "../lib/components/Chart";
import s from 'styled-components';

export function PagesShoppingInsight() {
  const [params, setParams] = useState({
    startDate: '2017-08-01', 
    endDate: '2017-09-30', 
    timeUnit: 'month', 
    category: '50000000',
    keyword: '정장',
    device: '', 
    gender: '',
    ages: ['20', '30'],
  });
  const onSubmit = (param: TrendData) => {
    setParams(param);
  };
  const [data, loading, error] = useTrendData(params);
  const transformData = (RequestData: any[]): ChartData[] => {
    const transformedData: { [key: string]: any } = {};
    RequestData[0].data.forEach((RequestData: { period: string | number; group: string | number; ratio: any; }) => {
      if (!transformedData[RequestData.period]) {
        transformedData[RequestData.period] = {
          period: RequestData.period,
          10: 0,
          20: 0,
          30: 0,
          40: 0,
          50: 0,
          60: 0,
        };
      }
      transformedData[RequestData.period][RequestData.group] = RequestData.ratio;
    });
    return Object.values(transformedData) as ChartData[];
  };
  const chartData = data ? transformData(data.results) : [];
  
  if (loading) return <p>데이터를 불러오는 중입니다...</p>;
  if (error) return <p>데이터를 불러오는 데 실패했습니다.</p>;
  if (!data) return null;
  const dataLength = (data.results[0].data.length);
  return (
    <div>
      <h3>Naver openapi - Shopping Insight API</h3>
      <InputForm onSubmit={onSubmit} />
      <DataIndicator>
        데이터가 '{dataLength}' 개 있습니다.
      </DataIndicator>
      <Chart transData={chartData}/>
    </div>
  );
}

const DataIndicator = s.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  font-size: 1.3rem;
  font-weight: 700;
`