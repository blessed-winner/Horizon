import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { barData } from "../assets/assets"

const BarChartComponent = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
         <BarChart data={barData} barSize={150}>
            <CartesianGrid strokeDasharray="4 4" vertical={true} opacity={0.4}/>
            <XAxis dataKey="name" tick={{ fontSize: 12 }}/>
            <YAxis tick={{fontSize: 12}}/>
            <Tooltip cursor={{opacity: 0.1}} contentStyle={{borderRadius:"10px"}}/>
            <Bar dataKey="value" fill="#3C83F6" radius={[10, 10, 0, 0]}>
                <LabelList dataKey="value" position="top" style={{fill:"#000", fontSize: 12}}/>
            </Bar>
         </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent