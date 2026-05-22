import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Hours from "@/components/Hours";
import ContactBanner from "@/components/ContactBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Hours />
      <ContactBanner />
    </>
  );
}
