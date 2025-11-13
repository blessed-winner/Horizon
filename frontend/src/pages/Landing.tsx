import {ArrowRight} from 'lucide-react'
const Landing = () => {
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
        <div>
            <div>

            </div>
            <div>

            </div>
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default Landing