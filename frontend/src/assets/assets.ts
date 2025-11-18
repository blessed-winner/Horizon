interface landingItem{
    icon:string,
    title:string,
    text:string
}
export const landingData:landingItem[] = [
    {
      icon:"Chart",
      title:"Analytics Dashboard",
      text:"Track tasks, monitor progress, and visualize team performance with beautiful, real-time charts and insights."
    },
    {
        icon:"MessageBox",
        title:"Real-Time Chat",
        text:"Connect instantly with your team through seamless real-time messaging, file sharing, and notifications."
    },
    {
        icon:"Users",
        title:"Team Collaboration",
        text:"See who's online, share updates, assign tasks, and work together efficiently in one unified workspace."
    }
]

export const uniqueUpdates:landingItem[] = [
    {
        icon:"Check",
        title:"Real-time updates",
        text:"See changes instantly without refreshing the page"
    },
    {
        icon:"Lightning",
        title:"Lightning fast",
        text:"Optimized for speed and performance"
    },
    {
        icon:"Shield",
        title:"Secure by default",
        text:"Enterprise-grade security for your data"
    },
    {
        icon:"Slope",
        title:"Boost productivity",
        text:"Increase team efficiency by up to 40%"
    }
]

interface FooterLinks{
    title:string,
    links:string[]
}

export const footerLinks:FooterLinks[] = [
    {
        title:"Product",
        links:[ "Features","Pricing","Security","Roadmap" ]
    },
    {
        title:"Company",
        links:[ "About","Blog", "Careers", "Contact" ]
    },
    {
        title:"Legal",
        links:[ "Privacy","Terms","Cookie Policy","Licences" ]
    }
]


export const socialIcons = [ "Twitter","GitHub","LinkedIn","Mail" ]

interface DashboardData{
    title:string,
    numbers:string,
    statistics:string,
    icon:string
}
export const dashboardData:DashboardData[] = [
    {
        title:"Total Tasks",
        numbers:"142",
        statistics:"+12% from last month",
        icon:"CheckCircle"
    },
    {
        title:"Active Users",
        numbers:"32",
        statistics:"24 active now",
        icon:"Users"
    },
    {
        title:"Messages Today",
        numbers:"562",
        statistics:"+18% from yesterday",
        icon:"MessageSquare"
    },
    {
        title:"Avg Response Time",
        numbers:"2.4h",
        statistics:"-0.3h improvement",
        icon:"Clock"
    }
]

type Point = {
    name:string,
    value:number
}

export const pieData:Point[] = [
  {name:"Completed", value:68},
  {name:"In Progress",value:22},
  {name:"Pending",value:10}
]

export const barData:Point[] = [
    {name:"Active",value:24},
    {name:"Idle",value:8}
]

export const lineData:Point[] = [
    {name:"Mon",value:45},
    {name:"Tue",value:60},
    {name:"Wed",value:54},
    {name:"Thur",value:77},
    {name:"Fri",value:80},
    {name:"Sat",value:32},
    {name:"Sun",value:27}
]

type Progress = {
    title:string,
    progress:number
}

export const progressBars:Progress[] = [
    { title:"Website Redesign", progress:85 },
    { title:"Mobile App", progress:60 },
    { title:"API Integration", progress:45 },
    { title:"Marketing Campaign", progress: 90 }
]

type Message = {
    sender:string,
    content:string
}

export const messages:Message[] = [
  { sender:"Sarah", content:"Hey team! Welcome to our productivity hub" },
  { sender:"Mike", content:"This is amazing! love the realtime features" },
  { sender:"You", content:"Can't wait to start collaborating here" }
]

type Priority = "high" | "medium" |"low" 
type Status = "Pending" | "Completed" | "In Progress"
type Task = {
  title:string,
  priority:Priority,
  dueDate:string,
  status:Status
}

export const tasks:Task[] = [
  { title:"Design new landing page", priority:"high", dueDate:"2024-01-20", status:"In Progress" },
  { title:"Implement authentication", priority:"high", dueDate:"2024-01-15", status:"Completed" },
  { title:"Setup analytics dashboard", priority:"medium", dueDate:"2024-01-25", status:"Pending" },
  { title:"Write documentation", priority:"high", dueDate:"2024-01-30", status:"In Progress" },
  { title:"Code review for feature X", priority:"low", dueDate:"2024-01-18", status:"Pending" }
]
    


    
