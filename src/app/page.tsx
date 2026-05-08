import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhySection from "./components/WhySection";
import MenuSection from "./components/MenuSection";
import ReviewsSection from "./components/ReviewsSection";
import GallerySection from "./components/GallerySection";
import ReservationsSection from "./components/ReservationsSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import FloatingCTAs from "./components/FloatingCTAs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <MenuSection />
        <ReviewsSection />
        <GallerySection />
        <ReservationsSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
