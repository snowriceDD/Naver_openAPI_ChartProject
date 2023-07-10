import { getTrends } from "../lib/utils/getTrends";

// export function postData() {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     const url = import.meta.env.VITE_APP_N_URL;
//     return getTrends.post<PostData>('https://openapi.naver.com/v1/datalab/shopping/category/keyword/age');
// }

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