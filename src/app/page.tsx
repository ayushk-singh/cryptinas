import ContentSection from "@/components/content-3";
import Features from "@/components/features-1";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <Features />
      <TeamSection />
      <Footer />
    </div>
  );
}
