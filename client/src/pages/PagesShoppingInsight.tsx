/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from "react";
import useTrendData from "../lib/hooks/useTrendData";
import { InputForm } from "../lib/components/InputForm";
import { TrendData } from "../lib/hooks/useTrendData";
import { Chart, ChartData } from "../lib/components/Chart";

export function PagesShoppingInsight() {
  const [ppap, setPpap] = useState({});
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
  // const transformData = (data: any) => {
  //   (data.results[0])
    
  // }
  const transformData = (RequestData: any[]): ChartData[] => {
    const transformedData: { [key: string]: any } = {};
  
    RequestData.forEach((RequestData) => {
      if (!transformedData[RequestData.period]) {
        transformedData[RequestData.period] = {
          name: RequestData.period,
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
    console.log(RequestData)
    return Object.values(transformedData) as ChartData[]; // 형변환을 추가
  };
  const chartData = data ? transformData(data.results) : [];

  
  if (loading) return <p>데이터를 불러오는 중입니다...</p>;
  if (error) return <p>데이터를 불러오는 데 실패했습니다.</p>;
  if (!data) return null;
  
  return (
    <div>
      <h1>데이터</h1>
      <InputForm onSubmit={onSubmit} />
      <Chart transData={chartData}/>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      
    </div>
  );
}
