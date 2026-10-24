import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutPreviewSection } from "./components/AboutPreviewSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="#0a0a0c">
      <Navbar />
      <Box as="main" flex="1">
        <HeroSection />
        <AboutPreviewSection />
        <SkillsSection />
        <ExperienceSection />
      </Box>
      <Footer />
    </Box>
  );
}
