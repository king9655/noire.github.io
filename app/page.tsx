import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import Intro from "@/components/Intro";
import Rooms from "@/components/Rooms";
import Experiences from "@/components/Experiences";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Restaurant from "@/components/Restaurant";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BookingWidget />
        <Intro />
        <Rooms />
        <Experiences />
        <Story />
        <Gallery />
        <Restaurant />
        <Location />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
