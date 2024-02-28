import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MyFeateruSection from "@/components/MyFeatureSection";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
         
          <HeroSection/>
          <FeaturedCourses/>
          <MyFeateruSection/>
          <TestimonialCard/>
          <UpcomingWebinar/>
    </main>
  );
}
