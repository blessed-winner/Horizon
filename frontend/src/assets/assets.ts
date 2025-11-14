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
    
