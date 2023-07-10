/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosRequestConfig } from 'axios';

type TimeUnit = 'date' | 'week' | 'month';
// type Device = '' | 'pc' | 'mo';
// type Gender = '' | 'm' | 'f';
// type Ages = '10' | '20' | '30' | '40' | '50' | '60';
type Category =
  | '50000008' // 패션의류
  | '50000000' // 생활/건강
  | '50000005' // 출산/육아
  | '50000003' // 디지털/가전
  | '50000004' // 가구/인테리어
  | '50000001' // 패션잡화
  | '50000007' // 스포츠/레저
  | '50000002' // 화장품/미용
  | '50000006' // 식품
  | '50005542' // 도서
  | '50000009' // 여가/생활편의
  | '50000010'; // 면세점

export interface PostData {
    startDate: string;
    endDate: string;
    timeUnit: TimeUnit;
    category: Category;
    keyword: string;
}

// export async function getTrends(postData: PostData) {
//     try {
//       const { keyword, startDate, endDate, timeUnit, category } = postData;
//       const apiUrl = '/v1/datalab/shopping/category/keywords';
//       const requestConfig: AxiosRequestConfig = {
//         headers: {
//           'X-Naver-Client-Id': import.meta.env.VITE_APP_N_CLIENT_ID,
//           'X-Naver-Client-Secret': import.meta.env.VITE_APP_N_CLIENT_SECRET,
//           'Content-Type': 'application/json',
//         },
//         responseType: 'json',
//         method: 'POST',
//         data: JSON.stringify({
//           "startDate": startDate,
//           "endDate": endDate,
//           "timeUnit": timeUnit,
//           "category": category,
//           "keyword": [
//             {
//               "name": keyword,
//             }
//           ],
//           "device": "",
//           "gender": "",
//           "ages": ["20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74"],
//         }),
//       };
  
//       const response = await axios.post(apiUrl, requestConfig);
  
//       if (response.status === 200) {
//         console.log(response.data);
//         return response.data;
//       }
//     } catch (error) {
//       console.error(`Error fetching trend data: ${error}`);
//     }
//   }

export async function getTrends(postData: PostData) {
  try {
    // const apiUrl = '/v1/datalab/shopping/category/keywords';
    const apiUrl = '/v1/datalab/shopping/categories';
    const request_body = {
      "startDate": "2017-08-01",
      "endDate": "2017-09-30",
      "timeUnit": "month",
      "category": [
          {"name": "패션의류", "param": ["50000000"]},
          {"name": "화장품/미용", "param": ["50000002"]}
      ],
      "device": "pc",
      "ages": ["20", "30"],
      "gender": "f"
    };
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'X-Naver-Client-Id': import.meta.env.VITE_APP_N_CLIENT_ID,
        'X-Naver-Client-Secret': import.meta.env.VITE_APP_N_CLIENT_SECRET,
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(
      apiUrl,
      request_body,
      requestConfig
      );

    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error(`Error fetching trend data: ${error}`);
  }
}