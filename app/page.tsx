import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Story from "@/components/Story/Story";
import MenuPreview from "@/components/MenuPreview/MenuPreview";
import Gallery from "@/components/Gallery/Gallery";
import Chef from "@/components/Chef/Chef";
import Testimonials from "@/components/Testimonials/Testimonials";
import Booking from "@/components/Booking/Booking";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import MotionEffects from "@/components/MotionEffects";
import RestaurantJsonLd from "@/components/RestaurantJsonLd";
import WebsiteJsonLd from "@/components/WebsiteJsonLd";
import MenuJsonLd from "@/components/MenuJsonLd";

export default function Home() {
  return (
    <>
      <RestaurantJsonLd />
      <WebsiteJsonLd />
      <MenuJsonLd />
      <MotionEffects />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Story />
        <MenuPreview />
        <Gallery />
        <Chef />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
