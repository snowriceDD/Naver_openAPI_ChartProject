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
        <ResponsiveContainer width="100%" height={500}>
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
            <XAxis dataKey='period' />
            <YAxis domain={[0, 100]} tickCount={11} />
            <Tooltip />
            <Legend verticalAlign="top"height={36} iconSize={20} iconType="rect"/>
            <Line type="monotone" dataKey="10" stroke="#8884d8" dot={false}/>
            <Line type="monotone" dataKey="20" stroke="#82ca9d" dot={false} />
            <Line type="monotone" dataKey="30" stroke="#123456" dot={false} />
            <Line type="monotone" dataKey="40" stroke="#FF0000" dot={false} />
            <Line type="monotone" dataKey="50" stroke="#00FF00" dot={false} />
            <Line type="monotone" dataKey="60" stroke="#0000FF" dot={false} />
        </LineChart>
        </ResponsiveContainer>
    )
}