import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class PersonalPieChart extends PureComponent {
  // static demoUrl =
  //   "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

  render() {
    const { statData } = this.props;
    return (
      <PieChart width={200} height={180} onMouseEnter={this.onPieEnter}>
        <Pie
          data={statData}
          cx={100}
          cy={40}
          innerRadius={20}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={8}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend align="center" />
      </PieChart>
    );
  }
}
