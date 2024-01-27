import Camp from "@/components/Camp";
import Enrollment from "@/components/Enrollment";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import KidsActivities from "@/components/KidsActivities";
import OurClasses from "@/components/OurClasses";
import Testimonials from "@/components/Testimonials";
import OurTeachers from "@/components/OurTeachers";
import RecentNews from "@/components/RecentNews";
import DiscoverOurImage from "@/components/DiscoverOurImage";
import EnrollmentNow from "@/components/EnrollmentNow";
import KidsSection from "@/components/KidsSection";
import TeachersSection from "@/components/TeachersSection";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Enrollment />
      <KidsActivities />
      <Features />
      <OurClasses />
      <KidsSection />
      <Testimonials />
      <ReviewSection />
      <OurTeachers />
      <TeachersSection />
      <RecentNews />
      <DiscoverOurImage />
      <EnrollmentNow />
    </>
  );
}
