"use client";
import Header from "@/components/header/Header";
import HeroSection from "@/components/sections/HeroSection";
import ClientSection from "@/components/sections/ClientSection";
import CardGridSection from "@/components/sections/CardGridSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import ApproachSection from "@/components/sections/ApproachSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
    <Header />
   {/* ========== END HEADER ==========  */}

   {/* ========== MAIN CONTENT ==========  */}
  <main id="content">
        {/* Hero  */}
        <HeroSection />
     {/* End Hero  */}

        {/* Clients  */}
        <ClientSection />
     {/* End Clients  */}

     {/* Case Stories  */}
    <div className="bg-navy-blue bg-gradient-to-t from-neutral-800 to-transparent">
      <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
         {/* Title  */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Success stories</h2>
          <p className="mt-1 text-neutral-400">Global brands see measurable success when they collaborate with us. From higher conversion and payment approval rates to faster processing speeds. Discover their stories here.</p>
        </div>
         {/* End Title  */}

         {/* Card Grid  */}
        <CardGridSection />
         {/* End Card Grid  */}

      </div>
    </div>
     {/* End Case Stories  */}

     {/* Testimonials  */}
    <TestimonialsSection />
     {/* End Testimonials  */}

     {/* Stats  */}
    <StatsSection />
     {/* End Stats  */}

     {/* Approach  */}
    <ApproachSection />
     {/* End Approach  */}

     {/* Contact  */}
    <ContactSection />
     {/* End Contact  */}
   </main>
   {/* ========== END MAIN CONTENT ==========  */}

   {/* ========== FOOTER ==========  */}
    <Footer />
    {/* ========== END FOOTER ==========  */}
    </>
  );
}
