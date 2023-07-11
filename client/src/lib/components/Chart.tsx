/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";

export interface ChartData {
    name: string,
    10: number,
    20: number,
    30: number,
    40: number,
    50: number,
    60: number,
}

interface ChartProps {
    transData: ChartData[];
}

export const Chart = ({transData}: ChartProps) => {

    return (
        <ResponsiveContainer width="100%" height={400}>
        <LineChart
            data={transData}
            margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="20" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="30" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
    )
}