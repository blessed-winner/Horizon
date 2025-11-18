import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { lineData } from "../assets/assets"

const LineChartComponent = () => {
  return (
    <div className="w-full h-64">
        <ResponsiveContainer>
            <LineChart data={lineData} margin={{top: 10, right: 20, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray = "3 3"/>
                <XAxis dataKey="name"/>
                <YAxis domain={[0, 100]}/>
                <Tooltip content={({active, payload, label}) => {
                    if(active && payload && payload.length){
                        return(
                          <div style={{
                            background:"#fff",
                            padding:"8px 12px",
                            borderRadius: 6,
                            boxShadow: "0 0 6px rgba(0,0,0,0.15)"
                          }}>
                            <strong>{label}</strong>
                            <br/>
                            <span className="text-sm text-blue-400">
                               messages : {payload[0].value}
                            </span>
                            </div>  
                        )
                    }
                    return null
                }}
                />
                <Line type="monotone" dataKey="value" stroke="#29A9FF" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default LineChartComponent