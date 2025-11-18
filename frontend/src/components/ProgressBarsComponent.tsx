import { progressBars } from "../assets/assets"

const ProgressBarsComponent = () => {
  return (
    <div className="space-y-4">
        { progressBars.map((data,idx)=>(
           <div key={idx} className="space-y-2">
            <div className="flex justify-between">
               <h4 className="text-sm font-semibold text-gray-800">{data.title}</h4>
               <p className="text-gray-400 font-light text-xs">{data.progress}%</p>
            </div>
            <div className="bg-gray-300 rounded-full w-full h-2 overflow-hidden">
             <div style= {{width:`${data.progress}%`}} className="bg-blue-400 h-full"></div>
            </div>
           </div>
        )) }
    </div>
  )
}

export default ProgressBarsComponent