import Award from "@/components/Award";
import CaseStudy from "@/components/CaseStudy";
import ClientFeedback from "@/components/ClientFeedback";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import RecentBlog from "@/components/RecentBlog";
import Section from "@/components/Section";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Section />
      <Services />
      <CaseStudy />
      <ClientFeedback />
      <RecentBlog />
      <Award />
      <NewsLetter />
    </>
  );
};

export default Home;
