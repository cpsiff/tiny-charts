import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Chart = ( {data} ) => {
  return (
    <BarChart
        width={500}
        height={300}
        data={data}
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
        <Bar dataKey="democrat" stackId="a" fill="#377eb8" />
        <Bar dataKey="republican" stackId="a" fill="#e41a1c" />
        <Bar dataKey="other" stackId="a" fill="#e0cf1a" />
    </BarChart>
  );
};
export default Chart;