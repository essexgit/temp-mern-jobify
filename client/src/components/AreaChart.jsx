import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip
          contentStyle={{ color: "#888" }}
          itemStyle={{ color: "#888" }}
        />
        <Area type="monotone" dataKey="count" stroke="#2cb1bc" fill="#befafd" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
