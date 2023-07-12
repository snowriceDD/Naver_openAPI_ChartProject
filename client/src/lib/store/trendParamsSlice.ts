import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TrendParams {
    startDate: string;
    endDate: string;
    timeUnit: string;
    category: string;
    keyword: string;
    device: string;
    gender: string;
    ages: string[];
}

const initialState: TrendParams = {
    startDate: '',
    endDate: '',
    timeUnit: '',
    category: '',
    keyword: '',
    device: '',
    gender: '',
    ages: [''],
  };

const trendParamsSlice = createSlice({
    name: 'trendParams',
    initialState,
    reducers: {
        setTrendParams(_state, action: PayloadAction<TrendParams>) {
        return action.payload;
        },
    },
});

export const { setTrendParams } = trendParamsSlice.actions;
export default trendParamsSlice.reducer;