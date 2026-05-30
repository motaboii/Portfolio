import Hero from "@/components/Hero"
import Layout from "@/components/Layout";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProjectsSection />
    </Layout>
  );
}