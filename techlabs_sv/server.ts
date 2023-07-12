import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/proxy", async (req: Request, res: Response) => {
  const naverApiUrl = 'https://openapi.naver.com/v1/datalab/shopping/category/keyword/age';
  const naver_api_id = process.env.VITE_APP_N_CLIENT_ID
  const naver_api_secret = process.env.VITE_APP_N_CLIENT_SECRET;
  
  try {
    const apiResponse = await axios.post(naverApiUrl, req.body, {
      headers: {
        "Content-Type": "application/json",
        "X-Naver-Client-Id": naver_api_id,
        "X-Naver-Client-Secret": naver_api_secret,
      },
    });

    res.send(apiResponse.data);
  } catch (err: any) {
    console.error(err);
    res.status(500).send("Error: Unable to fetch data.");
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});