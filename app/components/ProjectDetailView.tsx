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
  Flex,
  Separator,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Download,
  FileText,
  Scale,
  Maximize2,
  X,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { Project } from "../types/portfolio";
import { useLanguage } from "../context/LanguageContext";

interface ProjectDetailViewProps {
  project: Project;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const { language, t } = useLanguage();
  const [activeScreenshot, setActiveScreenshot] = React.useState<{
    image: string;
    title: string;
    titleTh: string;
    tag: string;
    tagTh: string;
    description: string;
    descriptionTh: string;
  } | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveScreenshot(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Box as="main" flex="1" py={{ base: 10, md: 16 }}>
      <Container maxW="5xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack gap={8} align="stretch">
          {/* Breadcrumb & Back Link */}
          <Flex justify="space-between" align="center" flexWrap="wrap" gap={3}>
            <HStack gap={2} fontSize="xs" color="#9ca3af">
              <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>
                {t("หน้าแรก", "Home")}
              </Link>
              <ChevronRight size={13} />
              <Link href="/projects" style={{ color: "#9ca3af", textDecoration: "none" }}>
                {t("ผลงานทั้งหมด", "Projects")}
              </Link>
              <ChevronRight size={13} />
              <Text color="#9bdb6b" fontWeight="500">
                {project.title}
              </Text>
            </HStack>

            <Link href="/projects" style={{ textDecoration: "none" }}>
              <Button
                size="xs"
                variant="outline"
                borderColor="rgba(255, 255, 255, 0.12)"
                color="#ffffff"
                _hover={{ borderColor: "#9bdb6b", color: "#9bdb6b" }}
              >
                <ArrowLeft size={13} style={{ marginRight: "6px" }} />
                {t("ย้อนกลับไปหน้ารวมผลงาน", "Back to Projects")}
              </Button>
            </Link>
          </Flex>

          {/* Project Hero Header */}
          <Box
            bg="#121215"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.08)"
            rounded="2xl"
            p={{ base: 6, sm: 8, md: 10 }}
            position="relative"
            overflow="hidden"
          >
            <VStack align="flex-start" gap={5}>
              <HStack gap={3}>
                <Badge
                  bg="rgba(155, 219, 107, 0.15)"
                  color="#9bdb6b"
                  borderWidth="1px"
                  borderColor="rgba(155, 219, 107, 0.3)"
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="xs"
                >
                  {project.category}
                </Badge>
                <Text fontSize="xs" color="#9ca3af">
                  {project.duration}
                </Text>
              </HStack>

              <Flex align="center" gap={{ base: 3, sm: 4 }} w="full">
                {project.icon && (
                  <Box
                    w={{ base: "64px", sm: "76px" }}
                    h={{ base: "64px", sm: "76px" }}
                    rounded="2xl"
                    overflow="hidden"
                    position="relative"
                    shadow="0 8px 24px rgba(0, 0, 0, 0.5)"
                    flexShrink={0}
                  >
                    <Image
                      src={project.icon}
                      alt={project.title}
                      fill
                      sizes="80px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                )}
                <VStack align="flex-start" gap={1}>
                  <Heading
                    as="h1"
                    fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                    fontWeight="700"
                    color="#ffffff"
                    letterSpacing="-0.02em"
                  >
                    {project.title}
                  </Heading>
                  {language === "th" && project.titleTh && (
                    <Text fontSize="md" color="#9bdb6b" fontWeight="500">
                      {project.titleTh}
                    </Text>
                  )}
                </VStack>
              </Flex>

              <Text fontSize={{ base: "sm", sm: "md" }} color="#9ca3af" lineHeight="relaxed">
                {language === "th"
                  ? project.descriptionTh || project.description
                  : project.description}
              </Text>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <HStack gap={4} flexWrap="wrap" pt={2} w="full">
                  {project.metrics.map((m) => (
                    <Box
                      key={m.label}
                      p={3.5}
                      rounded="xl"
                      bg="#17181c"
                      borderWidth="1px"
                      borderColor="rgba(255, 255, 255, 0.08)"
                      minW="120px"
                    >
                      <Text fontSize="xs" color="#6b7280">
                        {language === "th" ? m.labelTh || m.label : m.label}
                      </Text>
                      <Text fontSize="lg" fontWeight="700" color="#9bdb6b">
                        {language === "th" && m.valueTh ? m.valueTh : m.value}
                      </Text>
                    </Box>
                  ))}
                </HStack>
              )}

              {/* Project Links CTA */}
              <HStack gap={3} pt={2} flexWrap="wrap">
                {project.liveUrl && (
                  <a
                    href={
                      project.id === "pood-lite"
                        ? (process.env.NEXT_PUBLIC_POODLITE_STANDALONE_URL || "https://poodlite.com")
                        : project.liveUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="sm"
                      bg="#9bdb6b"
                      color="#0a0a0c"
                      fontWeight="600"
                      _hover={{ bg: "#8cd05b", shadow: "0 0 16px rgba(155, 219, 107, 0.35)" }}
                    >
                      {project.id === "pood-lite" ? (
                        <>
                          <ExternalLink size={15} style={{ marginRight: "6px" }} />
                          {t("ไปยังหน้าเว็บไซต์ (Official Website)", "Visit Official Website")}
                        </>
                      ) : project.liveUrl.includes("drive.google.com") ? (
                        <>
                          <Download size={15} style={{ marginRight: "6px" }} />
                          {t("ดาวน์โหลดโปรแกรม (Google Drive)", "Download Program (Google Drive)")}
                        </>
                      ) : project.liveUrl.includes("play.google.com") ? (
                        <>
                          <ExternalLink size={15} style={{ marginRight: "6px" }} />
                          {t("ดาวน์โหลดบน Google Play", "Download on Google Play")}
                        </>
                      ) : (
                        <>
                          <ExternalLink size={15} style={{ marginRight: "6px" }} />
                          {t("ดูแอปพลิเคชัน (Live Demo)", "Live Application")}
                        </>
                      )}
                    </Button>
                  </a>
                )}

                {/* VirusTotal Security Verification */}
                {project.virusTotalUrl && (
                  <a
                    href={project.virusTotalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      borderColor="rgba(155, 219, 107, 0.4)"
                      bg="rgba(155, 219, 107, 0.08)"
                      color="#9bdb6b"
                      fontWeight="600"
                      _hover={{
                        borderColor: "#9bdb6b",
                        bg: "rgba(155, 219, 107, 0.16)",
                        shadow: "0 0 16px rgba(155, 219, 107, 0.2)",
                      }}
                    >
                      <ShieldCheck size={16} style={{ marginRight: "6px" }} />
                      {t("ผลตรวจไวรัส: ปลอดภัย 100% (VirusTotal Clean)", "VirusTotal 100% Clean (0/72 Detections)")}
                    </Button>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      borderColor="rgba(255, 255, 255, 0.2)"
                      color="#ffffff"
                      fontWeight="600"
                      _hover={{ borderColor: "#9bdb6b", color: "#9bdb6b", bg: "rgba(155, 219, 107, 0.05)" }}
                    >
                      <GithubIcon size={15} style={{ marginRight: "6px" }} />
                      {t("ดูซอร์สโค้ด (Source Code)", "View Source Code")}
                    </Button>
                  </a>
                )}
              </HStack>
            </VStack>
          </Box>

          {/* Deep Dive Grid */}
          <SimpleGrid columns={{ base: 1, lg: 12 }} gap={8}>
            {/* Main Content (8 cols) */}
            <Box gridColumn={{ base: "span 1", lg: "span 8" }}>
              <VStack gap={6} align="stretch">
                {/* Free & Ad-Free Freeware Guarantee Card */}
                {project.id === "pood-lite" && (
                  <Box
                    bg="linear-gradient(135deg, rgba(155, 219, 107, 0.08) 0%, rgba(23, 24, 28, 0.95) 100%)"
                    borderWidth="1px"
                    borderColor="rgba(155, 219, 107, 0.3)"
                    rounded="2xl"
                    p={{ base: 5, sm: 6 }}
                    shadow="0 8px 24px rgba(0, 0, 0, 0.4)"
                  >
                    <HStack gap={3.5} align="flex-start">
                      <div className="p-2.5 rounded-xl bg-[rgba(155,219,107,0.15)] text-[#9bdb6b] shrink-0 mt-0.5 inline-flex items-center justify-center">
                        <Sparkles size={22} />
                      </div>
                      <VStack align="flex-start" gap={1.5}>
                        <HStack gap={2} flexWrap="wrap">
                          <Text fontWeight="700" fontSize="md" color="#ffffff">
                            {t("ใช้งานได้ฟรี 100% ไม่มีโฆษณา (Freeware)", "100% Free to Use & Ad-Free")}
                          </Text>
                          <Badge
                            bg="rgba(155, 219, 107, 0.15)"
                            color="#9bdb6b"
                            borderWidth="1px"
                            borderColor="rgba(155, 219, 107, 0.3)"
                            fontSize="xs"
                            px={2.5}
                            py={0.5}
                            rounded="full"
                          >
                            No Ads & No Subscription
                          </Badge>
                        </HStack>
                        <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                          {t(
                            "Pood Lite เป็นโปรแกรมฟรีแวร์ (Freeware) สำหรับการใช้งานส่วนบุคคลโดยไม่มีค่าใช้จ่าย ไม่มีการแทรกโฆษณาใดๆ ทั้งสิ้น ไม่มีการเก็บค่าบริการรายเดือน และทำงานแบบ Offline 100% บนเครื่องของคุณอย่างปลอดภัย",
                            "Pood Lite is released as 100% free software for personal productivity. It contains zero advertisements, requires no monthly subscriptions, and operates completely offline on your local CPU."
                          )}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                )}

                {/* Problem Statement */}
                {project.problemStatement && (
                  <Box
                    bg="#17181c"
                    borderWidth="1px"
                    borderColor="rgba(255, 255, 255, 0.08)"
                    rounded="2xl"
                    p={6}
                  >
                    <Text fontWeight="700" fontSize="md" color="#ffffff" mb={2}>
                      {t("โจทย์และความท้าทาย (The Challenge)", "The Challenge & Context")}
                    </Text>
                    <Text fontSize="sm" color="#9ca3af" lineHeight="relaxed">
                      {language === "th"
                        ? project.problemStatementTh || project.problemStatement
                        : project.problemStatement}
                    </Text>
                  </Box>
                )}

                {/* Solution Architecture */}
                {project.solution && (
                  <Box
                    bg="#17181c"
                    borderWidth="1px"
                    borderColor="rgba(255, 255, 255, 0.08)"
                    rounded="2xl"
                    p={6}
                  >
                    <Text fontWeight="700" fontSize="md" color="#ffffff" mb={2}>
                      {t("แนวทางการพัฒนาและสถาปัตยกรรม (The Solution)", "Engineering Solution")}
                    </Text>
                    <Text fontSize="sm" color="#9ca3af" lineHeight="relaxed">
                      {language === "th"
                        ? project.solutionTh || project.solution
                        : project.solution}
                    </Text>
                  </Box>
                )}

                {/* Key Features */}
                <Box
                  bg="#17181c"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  rounded="2xl"
                  p={6}
                >
                  <Text fontWeight="700" fontSize="md" color="#ffffff" mb={4}>
                    {t("คุณสมบัติหลักของระบบ (Key Features)", "Key Features & Capabilities")}
                  </Text>
                  <VStack align="stretch" gap={3}>
                    {(language === "th" && project.keyFeaturesTh
                      ? project.keyFeaturesTh
                      : project.keyFeatures
                    ).map((feature, idx) => (
                      <HStack key={idx} align="flex-start" gap={3}>
                        <span className="text-[#9bdb6b] mt-0.5 shrink-0 inline-flex">
                          <CheckCircle2 size={16} />
                        </span>
                        <Text fontSize="sm" color="#d1d5db" lineHeight="relaxed">
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </Box>

            {/* Sidebar Info (4 cols) */}
            <Box gridColumn={{ base: "span 1", lg: "span 4" }}>
              <VStack gap={6} align="stretch">
                {/* Meta Details */}
                <Box
                  bg="#17181c"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  rounded="2xl"
                  p={6}
                >
                  <Text fontWeight="700" fontSize="sm" color="#ffffff" mb={4} textTransform="uppercase" letterSpacing="wider">
                    {t("ข้อมูลโปรเจกต์", "Project Overview")}
                  </Text>

                  <VStack align="stretch" gap={3.5} fontSize="xs">
                    <Box>
                      <Text color="#6b7280" mb={0.5}>{t("บทบาทหน้าที่ (Role)", "Role")}</Text>
                      <Text color="#ffffff" fontWeight="600">{project.role}</Text>
                    </Box>
                    <Separator borderColor="rgba(255, 255, 255, 0.06)" />

                    <Box>
                      <Text color="#6b7280" mb={0.5}>{t("ระยะเวลา (Timeline)", "Timeline")}</Text>
                      <Text color="#ffffff" fontWeight="600">{project.duration}</Text>
                    </Box>
                    <Separator borderColor="rgba(255, 255, 255, 0.06)" />

                    <Box>
                      <Text color="#6b7280" mb={0.5}>{t("หมวดหมู่ (Category)", "Category")}</Text>
                      <Text color="#9bdb6b" fontWeight="600">{project.category}</Text>
                    </Box>
                  </VStack>
                </Box>

                {/* Tech Stack Box */}
                <Box
                  bg="#17181c"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  rounded="2xl"
                  p={6}
                >
                  <Text fontWeight="700" fontSize="sm" color="#ffffff" mb={3} textTransform="uppercase" letterSpacing="wider">
                    {t("เทคโนโลยีที่ใช้ (Tech Stack)", "Tech Stack")}
                  </Text>
                  <HStack gap={2} flexWrap="wrap">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        bg="rgba(155, 219, 107, 0.08)"
                        color="#9bdb6b"
                        borderWidth="1px"
                        borderColor="rgba(155, 219, 107, 0.2)"
                        px={2.5}
                        py={1}
                        rounded="md"
                        fontSize="xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Box>

                {/* License & EULA Information */}
                {project.license && (
                  <Box
                    bg="#17181c"
                    borderWidth="1px"
                    borderColor="rgba(255, 255, 255, 0.08)"
                    rounded="2xl"
                    p={6}
                  >
                    <HStack justify="space-between" align="center" mb={3}>
                      <Text fontWeight="700" fontSize="sm" color="#ffffff" textTransform="uppercase" letterSpacing="wider">
                        {t("สัญญาอนุญาต (License)", "License & Terms")}
                      </Text>
                      <Badge
                        bg="rgba(155, 219, 107, 0.12)"
                        color="#9bdb6b"
                        borderWidth="1px"
                        borderColor="rgba(155, 219, 107, 0.3)"
                        px={2.5}
                        py={0.5}
                        rounded="md"
                        fontSize="xs"
                      >
                        Freeware
                      </Badge>
                    </HStack>

                    <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed" mb={3.5}>
                      {language === "th" ? project.licenseTh || project.license : project.license}
                    </Text>

                    <VStack align="stretch" gap={2.5} fontSize="xs" color="#9ca3af">
                      <HStack align="flex-start" gap={2}>
                        <span className="text-[#9bdb6b] mt-0.5 shrink-0 inline-flex">
                          <CheckCircle2 size={13} />
                        </span>
                        <Text>
                          {t(
                            "ฟรีแวร์สำหรับการใช้งานส่วนบุคคล เพิ่มความสะดวกในการพิมพ์ (Personal Productivity)",
                            "Freeware for personal productivity under EULA"
                          )}
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap={2}>
                        <span className="text-red-400 mt-0.5 shrink-0 inline-flex">
                          <Scale size={13} />
                        </span>
                        <Text>
                          {t(
                            "ห้ามจำหน่าย แจกจ่ายซ้ำ หรือดัดแปลงเพื่อการค้าโดยเด็ดขาด",
                            "Commercial resale, redistribution, or modification strictly prohibited"
                          )}
                        </Text>
                      </HStack>
                      <HStack align="flex-start" gap={2}>
                        <span className="text-[#9bdb6b] mt-0.5 shrink-0 inline-flex">
                          <FileText size={13} />
                        </span>
                        <Text>
                          {t(
                            "โมเดล Pathumma STT ได้รับอนุญาตแบบ CC-BY-4.0 โดย NECTEC สวทช.",
                            "Pathumma STT model licensed under CC-BY-4.0 by NECTEC, NSTDA"
                          )}
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                )}
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Screenshot & UI Walkthrough Showcase */}
          {project.galleryItems && project.galleryItems.length > 0 && (
            <Box pt={4}>
              <VStack align="stretch" gap={6}>
                <Box>
                  <HStack gap={2} mb={1}>
                    <Badge
                      bg="rgba(155, 219, 107, 0.12)"
                      color="#9bdb6b"
                      borderWidth="1px"
                      borderColor="rgba(155, 219, 107, 0.25)"
                      px={2.5}
                      py={0.5}
                      rounded="md"
                      fontSize="xs"
                    >
                      {t("ภาพหน้าจอและการทำงานจริง", "UI Walkthrough & Screenshots")}
                    </Badge>
                  </HStack>
                  <Heading
                    as="h2"
                    fontSize={{ base: "xl", sm: "2xl" }}
                    fontWeight="700"
                    color="#ffffff"
                    letterSpacing="-0.01em"
                  >
                    {t("ภาพหน้าจอและการทำงานภายในโปรแกรม", "Visual Tour & Application Screens")}
                  </Heading>
                  <Text fontSize="sm" color="#9ca3af" mt={1}>
                    {t(
                      "ภาพการทำงานจริงของ Pood Lite บน Windows Native Desktop ถอดความเสียงภาษาไทยแบบออฟไลน์ 100%",
                      "High-resolution desktop captures of Pood Lite showcasing native UI, system tray integration, and settings."
                    )}
                  </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  {project.galleryItems.map((item, idx) => (
                    <Box
                      key={idx}
                      bg="#17181c"
                      borderWidth="1px"
                      borderColor="rgba(255, 255, 255, 0.08)"
                      rounded="2xl"
                      overflow="hidden"
                      transition="all 0.25s ease"
                      _hover={{
                        borderColor: "rgba(155, 219, 107, 0.35)",
                        transform: "translateY(-2px)",
                        shadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
                      }}
                      display="flex"
                      flexDirection="column"
                    >
                      {/* Image Preview Container with Click-to-Zoom */}
                      <Box
                        position="relative"
                        w="full"
                        h={{ base: "230px", sm: "270px", lg: "310px" }}
                        bg="#0e0e11"
                        cursor="pointer"
                        onClick={() => setActiveScreenshot(item)}
                        role="group"
                        overflow="hidden"
                      >
                        <Image
                          src={item.image}
                          alt={language === "th" ? item.titleTh : item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: "contain", padding: "12px" }}
                        />

                        {/* Hover Zoom Overlay */}
                        <Box
                          position="absolute"
                          inset={0}
                          bg="rgba(10, 10, 12, 0.4)"
                          opacity={0}
                          transition="opacity 0.2s ease"
                          _groupHover={{ opacity: 1 }}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <HStack
                            bg="rgba(23, 24, 28, 0.9)"
                            backdropFilter="blur(8px)"
                            borderWidth="1px"
                            borderColor="rgba(155, 219, 107, 0.5)"
                            color="#ffffff"
                            px={4}
                            py={2}
                            rounded="full"
                            fontSize="xs"
                            fontWeight="600"
                            gap={2}
                            shadow="0 4px 20px rgba(0, 0, 0, 0.5)"
                          >
                            <Maximize2 size={14} color="#9bdb6b" />
                            <Text>{t("คลิกเพื่อดูรูปขนาดเต็ม", "Click to enlarge")}</Text>
                          </HStack>
                        </Box>
                      </Box>

                      {/* Description Card Body */}
                      <Box p={5} flex="1" display="flex" flexDirection="column">
                        <HStack gap={2} mb={2}>
                          <Badge
                            bg="rgba(155, 219, 107, 0.1)"
                            color="#9bdb6b"
                            borderWidth="1px"
                            borderColor="rgba(155, 219, 107, 0.2)"
                            px={2}
                            py={0.5}
                            rounded="md"
                            fontSize="2xs"
                            textTransform="uppercase"
                          >
                            {language === "th" ? item.tagTh : item.tag}
                          </Badge>
                        </HStack>

                        <Text fontWeight="700" fontSize="md" color="#ffffff" mb={2}>
                          {language === "th" ? item.titleTh : item.title}
                        </Text>

                        <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                          {language === "th" ? item.descriptionTh : item.description}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </SimpleGrid>
              </VStack>
            </Box>
          )}
        </VStack>
      </Container>

      {/* Fullscreen Lightbox Modal */}
      {activeScreenshot && (
        <Box
          position="fixed"
          inset={0}
          zIndex={9999}
          bg="rgba(0, 0, 0, 0.88)"
          backdropFilter="blur(10px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: 3, md: 6 }}
          onClick={() => setActiveScreenshot(null)}
        >
          <Box
            maxW="1100px"
            w="full"
            bg="#17181c"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.12)"
            rounded="2xl"
            overflow="hidden"
            shadow="0 24px 60px rgba(0, 0, 0, 0.8)"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <Flex
              justify="space-between"
              align="center"
              px={5}
              py={3.5}
              borderBottomWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
            >
              <VStack align="flex-start" gap={0.5}>
                <Badge
                  bg="rgba(155, 219, 107, 0.12)"
                  color="#9bdb6b"
                  borderWidth="1px"
                  borderColor="rgba(155, 219, 107, 0.3)"
                  px={2}
                  py={0.5}
                  rounded="md"
                  fontSize="2xs"
                >
                  {language === "th" ? activeScreenshot.tagTh : activeScreenshot.tag}
                </Badge>
                <Text fontWeight="700" fontSize="sm" color="#ffffff">
                  {language === "th" ? activeScreenshot.titleTh : activeScreenshot.title}
                </Text>
              </VStack>
              <Button
                size="xs"
                variant="ghost"
                color="#9ca3af"
                _hover={{ color: "#ffffff", bg: "rgba(255, 255, 255, 0.08)" }}
                onClick={() => setActiveScreenshot(null)}
                aria-label="Close image preview"
              >
                <X size={18} />
              </Button>
            </Flex>

            {/* Lightbox Image Container */}
            <Box
              position="relative"
              w="full"
              h={{ base: "320px", sm: "480px", md: "620px" }}
              bg="#0a0a0c"
            >
              <Image
                src={activeScreenshot.image}
                alt={language === "th" ? activeScreenshot.titleTh : activeScreenshot.title}
                fill
                sizes="1100px"
                style={{ objectFit: "contain", padding: "16px" }}
                priority
              />
            </Box>

            {/* Lightbox Footer */}
            {(activeScreenshot.description || activeScreenshot.descriptionTh) && (
              <Box px={5} py={3.5} bg="#121215" borderTopWidth="1px" borderColor="rgba(255, 255, 255, 0.06)">
                <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                  {language === "th"
                    ? activeScreenshot.descriptionTh || activeScreenshot.description
                    : activeScreenshot.description}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

