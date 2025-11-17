import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { pieData } from "../assets/assets"

const COLORS = ["#3C83F6", "#1FB1F9", "#DADEE7"]

const PieChartComponent = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartComponent
