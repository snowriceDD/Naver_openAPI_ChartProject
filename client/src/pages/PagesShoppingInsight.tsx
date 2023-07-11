/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from "react";
import useTrendData from "../lib/hooks/useTrendData";
import { InputForm } from "../lib/components/InputForm";

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
  const onSubmit = (param: any) => {
    // 입력 값 처리
    console.log(param);
  };

  const [data, loading, error] = useTrendData(params);

  if (loading) return <p>데이터를 불러오는 중입니다...</p>;
  if (error) return <p>데이터를 불러오는 데 실패했습니다.</p>;
  if (!data) return null;

  return (
    <div>
      <h1>데이터</h1>
      <InputForm onSubmit={onSubmit} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
