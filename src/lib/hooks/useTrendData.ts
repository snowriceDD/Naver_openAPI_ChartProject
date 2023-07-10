/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useEffect } from 'react';
import axios from 'axios';

interface TrendData {
  statusCode: number;
  body: string;
}

const useTrendData = () => {
  const [trendData, setTrendData] = useState<TrendData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const client_id = import.meta.env.VITE_APP_N_CLIENT_ID;
      const client_secret = import.meta.env.VITE_APP_N_CLIENT_SECRET;

      const apiUrl = "http://localhost:3001/proxy";

      const requestBody =  {
        startDate: '2017-08-01',
        endDate: '2017-09-30',
        timeUnit: 'month',
        keywords: ['키워드1', '키워드2'],
        category: '50000000',
        device: 'pc',
        ages: ['20', '30'],
        gender: 'f',
      };

      try {
        console.log(apiUrl)
        const response = await axios.post(apiUrl, requestBody, {
          headers: {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret,
            'Content-Type': 'application/json',
          },
        });

        setTrendData({
          statusCode: response.status,
          body: JSON.stringify(response.data),
        });
      } catch (error) {
        console.error('Error fetching trend data:', error);
      }
    };

    fetchData();
  }, []);

  return trendData;
};

export default useTrendData;