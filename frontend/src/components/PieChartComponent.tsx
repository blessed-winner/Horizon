import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import type { PieLabelRenderProps } from "recharts"
import { pieData } from "../assets/assets"

const COLORS = ["#3C83F6", "#1FB1F9", "#DADEE7"]

// renderLabel must return JSX or ReactNode
const renderLabel = (props: PieLabelRenderProps) => {
  const { name, percent, cx, cy,index, midAngle, outerRadius} = props
  const RADIAN = Math.PI/180
  const radius = outerRadius! * 1.2
  const x = cx! + radius*Math.cos(-midAngle! * RADIAN)
  const y = cy! + radius*Math.sin(-midAngle!*RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index]}
      textAnchor={x > cx! ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
      >
      {`${name} ${(percent! * 100).toFixed(0)}%`}
    </text>
  )
}


  const customTooltip = ({
    active,
    payload,
  }:{
    active?:boolean
    payload?:any
  })=>{
    if(active && payload && payload.length){
      const item = payload[0]
      return(
        <div className="bg-white p-3 rounded shadow text-gray-700 text-xs">
          <p className="font-semibold">{item.name} : {item.value}%</p>
        </div>
      )
    }
    return null
  }
const PieChartComponent = () => {

  return (
    <div className="w-full h-68">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            labelLine={false}
            label = {renderLabel}
          >
            {pieData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={customTooltip}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartComponent
