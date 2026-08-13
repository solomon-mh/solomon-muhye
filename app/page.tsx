import About from "@/components/About";
import SkillsAndTools from "@/components/SkillsAndTools";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroSection from "@/components/Hero";
import Blog from "@/components/Blog";
import { projects } from "@/data/projects";
import { siteConfig, siteUrl } from "@/lib/siteConfig";

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((proj, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: proj.title,
      description: proj.description,
      url: proj.demoLink || proj.githubLink,
      creator: { "@id": `${siteUrl}#person` },
      keywords: proj.tech.join(", "),
    },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}#webpage`,
  url: siteUrl,
  name: siteConfig.title,
  description: siteConfig.description,
  isPartOf: { "@id": `${siteUrl}#website` },
  about: { "@id": `${siteUrl}#person` },
  primaryImageOfPage: `${siteUrl}/opengraph-image`,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <main className="w-5/6 lg:w-1/2 mx-auto space-y-12">
        <HeroSection />
        <About />
        <Experience />
        <SkillsAndTools />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
