"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
  Input,
  Flex,
} from "@chakra-ui/react";
import {
  Search,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon } from "../components/icons/GithubIcon";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { projectsData } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

const categories = [
  "All",
  "Web App",
  "Mobile App",
  "Enterprise & Cloud",
  "AI & Tools",
] as const;

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.titleTh && project.titleTh.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="#0a0a0c">
      <Navbar />

      <Box as="main" flex="1" py={{ base: 12, md: 16 }}>
        <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
          <VStack gap={10} align="stretch">
            {/* Header */}
            <VStack align="flex-start" gap={3}>
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
                Project Catalog
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                fontWeight="700"
                color="#ffffff"
                letterSpacing="-0.02em"
              >
                Projects & Software Systems
              </Heading>
              <Text fontSize="sm" color="#9ca3af" maxW="2xl" lineHeight="relaxed">
                {t(
                  "รวบรวมโปรเจกต์การพัฒนาทั้ง Web Application, Cross-Platform Mobile Application, โซลูชันคลาวด์องค์กร (Power Platform) และเครื่องมือ AI อัตโนมัติ",
                  "Catalog of software development projects spanning web applications, mobile platforms, enterprise cloud workflows, and AI tooling."
                )}
              </Text>
            </VStack>

            {/* Filter and Search Bar */}
            <Box
              bg="#121215"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
              rounded="2xl"
              p={{ base: 4, sm: 6 }}
            >
              <Flex
                direction={{ base: "column", lg: "row" }}
                gap={4}
                justify="space-between"
                align={{ base: "stretch", lg: "center" }}
              >
                {/* Category Pills (Wrap - Never clipped) */}
                <HStack
                  gap={2}
                  flexWrap="wrap"
                >
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <Button
                        key={cat}
                        size="sm"
                        rounded="full"
                        fontSize="xs"
                        fontWeight={isSelected ? "600" : "400"}
                        bg={isSelected ? "#9bdb6b" : "#17181c"}
                        color={isSelected ? "#0a0a0c" : "#9ca3af"}
                        borderWidth="1px"
                        borderColor={isSelected ? "#9bdb6b" : "rgba(255, 255, 255, 0.1)"}
                        onClick={() => setSelectedCategory(cat)}
                        _hover={{
                          borderColor: "#9bdb6b",
                          color: isSelected ? "#0a0a0c" : "#ffffff",
                        }}
                      >
                        {cat === "All" ? t("ทุกหมวดหมู่ (All)", "All") : cat}
                      </Button>
                    );
                  })}
                </HStack>

                {/* Search Input */}
                <Box minW={{ base: "full", sm: "280px", lg: "320px" }}>
                  <HStack
                    bg="#17181c"
                    borderWidth="1px"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    rounded="xl"
                    px={3}
                    py={1.5}
                    _focusWithin={{ borderColor: "#9bdb6b" }}
                  >
                    <Search size={16} color="#9ca3af" />
                    <Input
                      placeholder={t("ค้นหาชื่อโปรเจกต์ หรือ Tech Stack...", "Search projects or tech stack...")}
                      border="none"
                      outline="none"
                      bg="transparent"
                      fontSize="xs"
                      color="#ffffff"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      _focus={{ boxShadow: "none" }}
                    />
                  </HStack>
                </Box>
              </Flex>
            </Box>

            {/* Results Counter */}
            <Flex justify="space-between" align="center" fontSize="xs" color="#9ca3af">
              <Text>
                {t(
                  `พบทั้งหมด ${filteredProjects.length} รายการ`,
                  `Found ${filteredProjects.length} projects`
                )}
              </Text>
              {searchQuery && (
                <Button
                  size="xs"
                  variant="ghost"
                  color="#9bdb6b"
                  onClick={() => setSearchQuery("")}
                >
                  {t("ล้างการค้นหา", "Clear Search")}
                </Button>
              )}
            </Flex>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={6}>
                {filteredProjects.map((project) => (
                  <Box
                    key={project.id}
                    bg="#17181c"
                    borderWidth="1px"
                    borderColor="rgba(255, 255, 255, 0.08)"
                    rounded="2xl"
                    p={{ base: 6, sm: 8 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    transition="all 0.25s ease"
                    _hover={{
                      borderColor: "rgba(155, 219, 107, 0.35)",
                      shadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
                      transform: "translateY(-2px)",
                    }}
                  >
                    <VStack align="flex-start" gap={4}>
                      <Flex justify="space-between" align="flex-start" w="full" gap={3}>
                        <VStack align="flex-start" gap={2} flex="1">
                          <Badge
                            bg="rgba(155, 219, 107, 0.12)"
                            color="#9bdb6b"
                            borderWidth="1px"
                            borderColor="rgba(155, 219, 107, 0.25)"
                            px={2.5}
                            py={0.5}
                            rounded="full"
                            fontSize="xs"
                          >
                            {project.category}
                          </Badge>
                          <VStack align="flex-start" gap={1}>
                            <Link href={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
                              <Text
                                fontWeight="700"
                                fontSize={{ base: "lg", sm: "xl" }}
                                color="#ffffff"
                                _hover={{ color: "#9bdb6b" }}
                                transition="color 0.15s"
                              >
                                {project.title}
                              </Text>
                            </Link>
                            {language === "th" && project.titleTh && (
                              <Text fontSize="xs" color="#9bdb6b" fontWeight="500">
                                {project.titleTh}
                              </Text>
                            )}
                          </VStack>
                        </VStack>

                        {/* Top-Right: Duration & App Icon (Yellow box) */}
                        <VStack align="flex-end" gap={2.5} flexShrink={0}>
                          <Text fontSize="xs" color="#9ca3af">
                            {project.duration}
                          </Text>
                          {project.icon && (
                            <Link href={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
                              <Box
                                w={{ base: "54px", sm: "64px" }}
                                h={{ base: "54px", sm: "64px" }}
                                rounded="2xl"
                                overflow="hidden"
                                position="relative"
                                shadow="0 6px 18px rgba(0, 0, 0, 0.45)"
                                transition="transform 0.2s ease, shadow 0.2s ease"
                                _hover={{
                                  transform: "scale(1.08)",
                                  shadow: "0 8px 24px rgba(155, 219, 107, 0.3)",
                                }}
                              >
                                <Image
                                  src={project.icon}
                                  alt={project.title}
                                  fill
                                  sizes="64px"
                                  style={{ objectFit: "cover" }}
                                />
                              </Box>
                            </Link>
                          )}
                        </VStack>
                      </Flex>

                      <Text fontSize="sm" color="#9ca3af" lineHeight="relaxed">
                        {language === "th" ? project.excerptTh || project.excerpt : project.excerpt}
                      </Text>

                      {/* Metrics */}
                      {project.metrics && project.metrics.length > 0 && (
                        <HStack
                          gap={3}
                          p={3}
                          w="full"
                          rounded="xl"
                          bg="rgba(255, 255, 255, 0.02)"
                          borderWidth="1px"
                          borderColor="rgba(255, 255, 255, 0.06)"
                        >
                          {project.metrics.map((m) => (
                            <VStack key={m.label} align="flex-start" gap={0} flex={1}>
                              <Text fontSize="xs" color="#6b7280">
                                {language === "th" ? m.labelTh || m.label : m.label}
                              </Text>
                              <Text fontSize="sm" fontWeight="700" color="#ffffff">
                                {language === "th" && m.valueTh ? m.valueTh : m.value}
                              </Text>
                            </VStack>
                          ))}
                        </HStack>
                      )}

                      {/* Tech stack pills */}
                      <HStack gap={1.5} flexWrap="wrap" pt={1}>
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            bg="rgba(255, 255, 255, 0.04)"
                            color="#d1d5db"
                            borderWidth="1px"
                            borderColor="rgba(255, 255, 255, 0.08)"
                            fontSize="xs"
                            px={2}
                            py={0.5}
                            rounded="md"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </HStack>
                    </VStack>

                    {/* Footer */}
                    <Flex
                      justify="space-between"
                      align="center"
                      pt={5}
                      mt={4}
                      borderTopWidth="1px"
                      borderColor="rgba(255, 255, 255, 0.06)"
                    >
                      <Link href={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
                        <Button
                          size="sm"
                          variant="ghost"
                          color="#9bdb6b"
                          _hover={{ bg: "rgba(155, 219, 107, 0.08)" }}
                          p={0}
                        >
                          {t("ดูรายละเอียดเชิงลึก", "View Details")}
                          <ArrowRight size={14} style={{ marginLeft: "4px" }} />
                        </Button>
                      </Link>

                      <HStack gap={2}>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              padding: "6px",
                              borderRadius: "6px",
                              color: "#9ca3af",
                              textDecoration: "none",
                            }}
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon size={16} />
                          </a>
                        )}
                        {project.virusTotalUrl && (
                          <a
                            href={project.virusTotalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              padding: "6px",
                              borderRadius: "6px",
                              color: "#9bdb6b",
                              textDecoration: "none",
                            }}
                            aria-label="VirusTotal Verified Clean"
                            title="VirusTotal 100% Clean"
                          >
                            <ShieldCheck size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              padding: "6px",
                              borderRadius: "6px",
                              color: "#9ca3af",
                              textDecoration: "none",
                            }}
                            aria-label={
                              project.liveUrl.includes("drive.google.com")
                                ? "Download from Google Drive"
                                : project.liveUrl.includes("play.google.com")
                                ? "Google Play Store"
                                : "Live Demo"
                            }
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </HStack>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            ) : (
              <Box
                py={16}
                textAlign="center"
                bg="#121215"
                rounded="2xl"
                borderWidth="1px"
                borderColor="rgba(255, 255, 255, 0.08)"
              >
                <VStack gap={3}>
                  <Text fontSize="lg" fontWeight="600" color="#ffffff">
                    {t("ไม่พบผลงานที่ตรงกับการค้นหา", "No matching projects found")}
                  </Text>
                  <Text fontSize="sm" color="#9ca3af">
                    {t(
                      "ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่อื่นเพื่อค้นหาโปรเจกต์",
                      "Try searching with different keywords or select another category filter."
                    )}
                  </Text>
                  <Button
                    size="sm"
                    bg="#9bdb6b"
                    color="#0a0a0c"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                    mt={2}
                  >
                    {t("รีเซ็ตตัวกรองทั้งหมด", "Reset Filters")}
                  </Button>
                </VStack>
              </Box>
            )}
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
