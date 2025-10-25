import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TipsAndTrends from "@/components/TipsAndTrends";
import Team from "@/components/Team";
import ODS from "@/components/ODS";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <TipsAndTrends />
        <Team />
        <ODS />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
