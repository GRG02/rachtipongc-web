"use client";

import * as React from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import {
  Sparkles,
  Zap,
  Cpu,
  Bot,
  Terminal,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Wrench,
  FileSpreadsheet,
  Palette,
  Layers,
} from "lucide-react";
import { skillCategories } from "../data/skills";
import { useLanguage } from "../context/LanguageContext";

const categoryIcons: Record<string, React.ElementType> = {
  "AI Development": Cpu,
  "AI Chatbots": Bot,
  "Programming Languages": Terminal,
  "Web & Frontend": Globe,
  "Mobile & Native UI": Smartphone,
  "Power Platform": Zap,
  "Databases": Database,
  "Third-Party & Cloud": Cloud,
  "Developer Tools": Wrench,
  "Office Tools": FileSpreadsheet,
  "Design Tools": Palette,
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const { language, t } = useLanguage();

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeCategory);

  return (
    <Box
      as="section"
      id="skills"
      py={{ base: 14, md: 20 }}
      borderBottomWidth="1px"
      borderColor="rgba(255, 255, 255, 0.06)"
      bg="#0a0a0c"
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack gap={{ base: 8, md: 10 }} align="stretch">
          {/* Section Header */}
          <VStack align="center" textAlign="center" gap={3}>
            <Badge
              bg="rgba(155, 219, 107, 0.12)"
              color="#9bdb6b"
              borderWidth="1px"
              borderColor="rgba(155, 219, 107, 0.25)"
              px={3}
              py={1}
              rounded="full"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Technical Skills
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              fontWeight="700"
              color="#ffffff"
              letterSpacing="-0.01em"
            >
              Technical Skills & Competencies
            </Heading>
            <Text fontSize="sm" color="#9ca3af" maxW="xl">
              {t(
                "ครอบคลุมการพัฒนาเว็บและโมบายล์แอปพลิเคชันสมัยใหม่, การประยุกต์ใช้ Generative AI, และเครื่องมืออัตโนมัติระดับองค์กร",
                "Covering modern web & mobile development, Generative AI application, and enterprise cloud automation workflows."
              )}
            </Text>
          </VStack>

          {/* Category Filter Pills (Wrap Layout - Never Clipped) */}
          <HStack
            gap={2}
            justify="center"
            flexWrap="wrap"
            py={2}
            w="full"
          >
            <Button
              size="sm"
              rounded="full"
              fontSize="xs"
              fontWeight={activeCategory === "all" ? "600" : "400"}
              bg={activeCategory === "all" ? "#9bdb6b" : "#17181c"}
              color={activeCategory === "all" ? "#0a0a0c" : "#9ca3af"}
              borderWidth="1px"
              borderColor={activeCategory === "all" ? "#9bdb6b" : "rgba(255, 255, 255, 0.1)"}
              onClick={() => setActiveCategory("all")}
              _hover={{
                borderColor: "#9bdb6b",
                color: activeCategory === "all" ? "#0a0a0c" : "#ffffff",
              }}
              transition="all 0.15s"
            >
              {t("All Categories", "All Categories")}
            </Button>

            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.category;
              const Icon = categoryIcons[cat.category] || Layers;
              return (
                <Button
                  key={cat.category}
                  size="sm"
                  rounded="full"
                  fontSize="xs"
                  fontWeight={isActive ? "600" : "400"}
                  bg={isActive ? "#9bdb6b" : "#17181c"}
                  color={isActive ? "#0a0a0c" : "#9ca3af"}
                  borderWidth="1px"
                  borderColor={isActive ? "#9bdb6b" : "rgba(255, 255, 255, 0.1)"}
                  onClick={() => setActiveCategory(cat.category)}
                  _hover={{
                    borderColor: "#9bdb6b",
                    color: isActive ? "#0a0a0c" : "#ffffff",
                  }}
                  transition="all 0.15s"
                >
                  <Icon size={13} style={{ marginRight: "6px" }} />
                  {cat.category}
                </Button>
              );
            })}
          </HStack>

          {/* Skill Cards Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
            {displayedCategories.map((cat) => {
              const Icon = categoryIcons[cat.category] || Layers;
              return (
                <Box
                  key={cat.category}
                  bg="#121215"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  p={6}
                  rounded="2xl"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  transition="all 0.2s"
                  _hover={{
                    borderColor: "rgba(155, 219, 107, 0.35)",
                    shadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
                    transform: "translateY(-2px)",
                  }}
                >
                  <Box>
                    <HStack gap={3} mb={3}>
                      <Box
                        p={2}
                        rounded="lg"
                        bg="rgba(155, 219, 107, 0.1)"
                        color="#9bdb6b"
                      >
                        <Icon size={18} />
                      </Box>
                      <VStack align="flex-start" gap={0}>
                        <Text fontWeight="600" fontSize="sm" color="#ffffff">
                          {cat.category}
                        </Text>
                        {language === "th" && cat.categoryTh && (
                          <Text fontSize="11px" color="#9bdb6b">
                            {cat.categoryTh}
                          </Text>
                        )}
                      </VStack>
                    </HStack>

                    <Text fontSize="xs" color="#9ca3af" mb={4} lineHeight="tall">
                      {language === "th" ? cat.descriptionTh || cat.description : cat.description}
                    </Text>

                    <HStack gap={2} flexWrap="wrap">
                      {cat.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          bg={
                            skill.highlight
                              ? "rgba(155, 219, 107, 0.12)"
                              : "rgba(255, 255, 255, 0.04)"
                          }
                          color={skill.highlight ? "#9bdb6b" : "#d1d5db"}
                          borderWidth="1px"
                          borderColor={
                            skill.highlight
                              ? "rgba(155, 219, 107, 0.3)"
                              : "rgba(255, 255, 255, 0.08)"
                          }
                          px={2.5}
                          py={1}
                          rounded="md"
                          fontSize="xs"
                          fontWeight={skill.highlight ? "600" : "400"}
                          display="inline-flex"
                          alignItems="center"
                          gap={1}
                        >
                          {skill.highlight && <Sparkles size={11} />}
                          {skill.name}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
