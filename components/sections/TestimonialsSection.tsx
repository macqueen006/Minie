import React from 'react'

const TestimonialsSection = () => {
  return (
    <div className="bg-navy-blue">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
         {/* Title  */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Minimal reviews</h2>
          <p className="mt-1 text-neutral-400">With over 30 awards, and achievements, we proudly demonstrate our unwavering dedication to excellence and client success.</p>
        </div>
         {/* End Title  */}

         {/* Grid  */}
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div>
             {/* Blockquote  */}
            <blockquote>
              <p className="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                To say that switching to Minimal has been life-changing is an understatement. My business has tripled since then.
              </p>

              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="md:hidden flex shrink-0 size-12 border rounded-full overflow-hidden">
                    <img className="w-full h-full" src="https://images.unsplash.com/photo-1621264448270-9ef00e88a935?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                  </div>
                  <div className="ms-4 md:ms-0">
                    <div className="text-base font-semibold text-white">Nicole Grazioso</div>
                    <div className="text-xs text-neutral-400">Director Payments & Risk | Airbnb</div>
                  </div>
                </div>
              </footer>
            </blockquote>
             {/* End Blockquote  */}
          </div>
           {/* End Col  */}

          <div className="hidden md:block mb-24 md:mb-0">
            <img className="rounded-xl max-h-[320px] w-full" src="https://images.unsplash.com/photo-1621264448270-9ef00e88a935?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
          </div> 
           {/* End Col */}
        </div>
         {/* End Grid  */}
      </div>
    </div>
  )
}

export default TestimonialsSection