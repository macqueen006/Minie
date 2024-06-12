import React from 'react'

const CardGridSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
           {/* Card  */}
          <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-navy-blue first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-background/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="#">
            <div className="mb-5">
              <div className="mt-5">
                <p className="font-semibold text-5xl text-white">50%</p>
                <h3 className="mt-5 font-medium text-lg text-white">Enhancement in Customer Engagement</h3>
                <p className="mt-1 text-neutral-400">With the aim of optimizing customer interactions and boosting brand loyalty, the team at Minimal leveraged Mailchimp powerful tools and expertise to deliver exceptional results.</p>
              </div>
            </div>
            <p className="mt-auto">
              <span className="font-medium text-sm text-primary pb-1 border-b-2 border-neutral-700 group-hover:border-background transition focus:outline-none group-focus:border-background">
                Case study
              </span>
            </p>
          </a>
           {/* End Card  */}

           {/* Card  */}
          <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-navy-blue first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-background/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="#">
            <div className="mb-5">
              <div className="mt-5">
                <p className="font-semibold text-5xl text-white">28%</p>
                <h3 className="mt-5 font-medium text-lg text-white">Rise in E-commerce</h3>
                <p className="mt-1 text-neutral-400">In collaboration with Shopify, Minimal embarked on a mission to revolutionize the e-commerce experience for a fictitious fashion brand, Style Aura.</p>
              </div>
            </div>
            <p className="mt-auto">
              <span className="font-medium text-sm text-primary pb-1 border-b-2 border-neutral-700 group-hover:border-background transition focus:outline-none group-focus:border-background">
                Case study
              </span>
            </p>
          </a>
           {/* End Card  */}

           {/* Card  */}
          <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-navy-blue first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-background/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="#">
            <div className="mb-5">
              <div className="mt-5">
                <p className="font-semibold text-5xl text-white">15%</p>
                <h3 className="mt-5 font-medium text-lg text-white">Streamlining Development</h3>
                <p className="mt-1 text-neutral-400"> With the goal of accelerating project delivery and enhancing collaboration among development teams, Minimal leveraged GitLab comprehensive suite of tools and Minimal expertise in digital product development.</p>
              </div>
            </div>
            <p className="mt-auto">
              <span className="font-medium text-sm text-primary pb-1 border-b-2 border-neutral-700 group-hover:border-background transition focus:outline-none group-focus:border-background">
                Case study
              </span>
            </p>
          </a>
           {/* End Card  */}
        </div>
  )
}

export default CardGridSection
