import {ArrowRight, BarChart3, CheckCircle, MessageSquare, Shield, TrendingUp, Users, Zap, type LucideIcon} from 'lucide-react'
import { landingData, uniqueUpdates } from '../assets/assets'
const Landing = () => {
  const iconsMap:Record<string,LucideIcon> = {
    Chart:BarChart3,
    MessageBox:MessageSquare,
    Users:Users,
    Check:CheckCircle,
    Lightning:Zap,
    Shield:Shield,
    Slope:TrendingUp
  }
  return (
    <div >
        <div className="bg-gray-100 px-4 py-24">
            <div className="flex flex-col items-center justify-center">
               <h1 className="text-7xl font-bold text-blue-500">Team Productivity Hub</h1>
               <p className="text-gray-500 max-w-2xl text-center text-2xl mt-4">Collaborate in real-time, track progress and boost your team's productivity with our modern workspace solution</p>
            </div>
            <div className="bg-primary/40 px-2 py-8 flex justify-center items-center space-x-4 text-white font-medium ">
                <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-300 px-8 py-3 rounded-lg cursor-pointer">
                  Get Started Free
                  <span className='pl-2'>
                    <ArrowRight className='size-4'/>
                  </span>
                </button>
                <button className='text-black rounded-lg border px-8 py-3 border-gray-300 hover:text-white hover:bg-gradient-to-r from-blue-500 to-blue-300 transition-all cursor-pointer'>Watch Demo</button>
            </div>
        </div>
        <div className='bg-gradient-to-t from-gray-300 to-gray-50 px-6 py-15'>
            <div className='flex flex-col items-center space-y-2 p-8'>
              <h2 className='text-gray-800 text-4xl font-bold'>Everything you need to succeed</h2>
              <p className='text-gray-500 text-lg'>Powerful features to keep your team aligned and productive</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-12 py-6'>
               {landingData.map((data,idx)=>{
                const IconComponent = iconsMap[data.icon] ;
                return(
                  <div key={idx} className='shadow-lg px-8 py-8 rounded-lg'>
                       <div className='space-y-3'>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center rounded-lg">
                            {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                          </div>
                          <h3 className='text-xl font-semibold text-gray-800'>{data.title}</h3>
                          <p className='text-gray-500 max-w-[295px]'>{data.text}</p>
                       </div>
                    </div> 
                )
                })}
            </div>
            <div className='px-6 py-15'>
               <div>
                <h2 className='text-gray-800 text-4xl font-bold'>Why teams love our platform</h2>
                <p className='text-gray-500 text-lg'>Built for modern teams who demand speed, reliability, and seamless collaboration</p>
                <div className='px-5 py-8 space-y-4'>
                  {uniqueUpdates.map((data,idx)=>{
                     const IconComponent = iconsMap[data.icon]
                     return(
                       <div key={idx} className='flex flex-col justify-center'>
                        <div className='flex items-center gap-3 mb-2'>
                          <IconComponent className='w-5 h-5 text-blue-500'/>
                           <h5 className='font-medium text-lg'>{data.title}</h5> 
                        </div>
                         <p className='text-gray-500 text-md pl-8'>{data.text}</p>
                      </div>
                     )
                  })}
                </div>
               </div>
               <div>

               </div>
            </div>
        </div>
    </div>
  )
}

export default Landing