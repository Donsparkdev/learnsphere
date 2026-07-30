import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import FeaturedCourses from "../components/home/FeaturedCourses";
import Categories from "../components/home/Categories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;
