/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useEffect } from 'react';
import axios from 'axios';

interface TrendData {
  startDate: string;
  endDate: string;
  timeUnit: string;
  category: string;
  keyword: string;
  device: string;
  gender: string;
  ages: string[];
}

const useTrendData = (reqParams: TrendData) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);


  useEffect(() => {
    const fetchData = async () => {
      const client_id = import.meta.env.VITE_APP_N_CLIENT_ID;
      const client_secret = import.meta.env.VITE_APP_N_CLIENT_SECRET;
      const apiUrl = "http://localhost:3001/proxy";


      try {
        console.log(apiUrl)
        const response = await axios.post(apiUrl, reqParams, {
          headers: {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret,
            'Content-Type': 'application/json',
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reqParams]);

  return [data, loading, error];
};

export default useTrendData;