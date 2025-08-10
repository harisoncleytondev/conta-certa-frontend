import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = [
  '#c3593f',
  '#457b9d',
  '#2a9d8f',
  '#f4a261',
  '#e9c46a',
  '#264653',
  '#8d99ae',
];

export const DynamicChart = ({
  type,
  data,
  dataKey,
  innerRadius = 0,
  outerRadius = '80%',
}) => {
  const renderChart = () => {
    switch (type.toLowerCase()) {
      case 'bar':
        return (
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{ fill: '#333' }} />
            <YAxis tick={{ fill: '#333' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey={dataKey} fill={COLORS[0]} radius={[10, 10, 0, 0]} />
          </BarChart>
        );

      case 'line':
        return (
          <LineChart data={data}>
            <XAxis dataKey="name" tick={{ fill: '#333' }} />
            <YAxis tick={{ fill: '#333' }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={COLORS[0]}
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        );

      case 'pie':
        return (
          <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              dataKey={dataKey}
              nameKey="name"
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              stroke="#FFF"
              strokeWidth={1}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color || COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`R$ ${value}`, name]} />
            <Legend formatter={(value) => value} />
          </PieChart>
        );

      default:
        break;
    }
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      {renderChart()}
    </ResponsiveContainer>
  );
};
