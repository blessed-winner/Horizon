import {ArrowRight, BarChart3, CheckCircle, Github, Linkedin, Mail, MailIcon, MessageSquare, Shield, TrendingUp, Twitter, Users, Zap, type LucideIcon} from 'lucide-react'
import { footerLinks, landingData, socialIcons, uniqueUpdates } from '../assets/assets'
const Landing = () => {
  const iconsMap:Record<string,LucideIcon> = {
    Chart:BarChart3,
    MessageBox:MessageSquare,
    Users:Users,
    Check:CheckCircle,
    Lightning:Zap,
    Shield:Shield,
    Slope:TrendingUp,
    Twitter:Twitter,
    GitHub:Github,
    LinkedIn:Linkedin,
    Mail:MailIcon
  }
  return (
    <div>
        <div className="bg-gray-100 px-4 py-24">
            <div className="flex flex-col items-center justify-center">
               <h1 style={{fontFamily:"Parisienne"}} className="text-7xl font-bold text-blue-500 text-center">Horizon</h1>
               <p className="text-gray-500 max-w-2xl text-center text-xl mt-4">Collaborate in real-time, track progress and boost your team's productivity with our modern workspace solution</p>
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
        <div className='bg-gradient-to-t from-gray-200 to-gray-50 px-6 py-15'>
            <div className='flex flex-col items-center space-y-2 p-8'>
              <h2 className='text-gray-800 text-4xl font-bold'>Everything you need to succeed</h2>
              <p className='text-gray-500 text-lg'>Powerful features to keep your team aligned and productive</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8  mx-auto max-w-6xl'>
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
              <div className='mx-auto px-4 py-12'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center'>
               <div>
                <h2 className='text-gray-800 text-4xl font-bold mb-6'>Why teams love our platform</h2>
                <p className='text-gray-500 text-lg'>Built for modern teams who demand speed, reliability, and seamless collaboration</p>
                   <div className='py-8 space-y-4'>
                  {uniqueUpdates.map((data,idx)=>{
                     const IconComponent = iconsMap[data.icon]
                     return(
                       <div key={idx} className='flex flex-col justify-center'>
                        <div className='flex items-center gap-3 mb-2'>
                          <IconComponent className='w-5 h-5 text-blue-500'/>
                           <h5 className='font-medium text-md'>{data.title}</h5> 
                        </div>
                         <p className='text-gray-500 text-md pl-8'>{data.text}</p>
                      </div>
                     )
                  })}
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='bg-white rounded-2xl w-[525px] h-[325px] flex items-center justify-center shadow-glow p-8'>
                   <div className='bg-blue-100 p-4 rounded-lg h-[260px] w-[460px] flex justify-center items-center'>
                       <BarChart3 className='text-blue-300 w-25 h-25'/>
                    </div>
               </div>
            </div>
              </div>
              </div>
        </div>
        <div className='px-4 py-20 mx-auto flex justify-center bg-gray-50'>
            <div className='bg-white shadow-xl shadow-blue-100 rounded-2xl p-12 max-w-4xl mx-auto space-y-8 text-center'>
               <h1 className='text-5xl text-gray-900 font-bold'>Ready to transform your team?</h1>
               <p className='text-xl text-gray-400'>Join thousands of teams already using our platform to achieve more together.</p>
               <div className='flex justify-center'>
                   <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-300 px-8 py-3 rounded-lg cursor-pointer text-white font-medium">
                  Start Free Today
                  <span className='pl-2'>
                    <ArrowRight className='size-4'/>
                  </span>
                </button>
               </div>
              </div>
        </div>
        <footer className='bg-gray-50 border-t-1 border-gray-300'>
          <div className='px-4 py-8 border-b border-gray-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 border-b border-gray-300'>
              <div className='space-y-3'> 
               <h5 style={{fontFamily:"Parisienne"}} className='text-2xl text-blue-500 font-semibold'>Horizon</h5>
               <p className='text-gray-400 max-w-[300px] text-sm'>
                Empowering teams to collaborate better, work smarter, and achieve more together.
               </p>
               <div className='flex gap-2'>
                  { socialIcons.map((icon,idx)=>{
                    const IconComponent = iconsMap[icon]
                    return(
                      <div key={idx} className='hover:bg-blue-400 hover:text-white transition-all p-2 rounded-xl cursor-pointer'>
                         <IconComponent className='w-4 h-4'/>
                      </div>
                       )
                  }) }
               </div>
              </div>
                  {footerLinks.map((link,idx)=>(
                       <div key={idx}>
                          <h6 className='mb-4 font-medium text-gray-900'>{link.title}</h6>
                          { link.links.map((l,idx)=>(
                             <ul key={idx} className='text-sm'>
                               <li className='cursor-pointer mb-2 text-gray-400'>{l}</li>
                             </ul>
                          )) }
                       </div>
                  ))}
            </div>
           <div className='flex justify-center pt-6'>
              <p className='text-gray-500 text-sm text-shadow-md'>&copy; 2025 <span style={{fontFamily:"Parisienne"}} className='text-blue-500'>Horizon.</span> All Rights Reserved.</p>
           </div>
          </div>
         </footer>
    </div>
  )
}

export default Landing