"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
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
} from "@chakra-ui/react";
import {
  GraduationCap,
  Users,
  Download,
  FileText,
  Sparkles,
  CheckCircle2,
  ZoomIn,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CertificateLightbox } from "../components/CertificateLightbox";
import { profileData } from "../data/profile";
import { certificatesData } from "../data/certificates";
import { Certificate } from "../types/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { language, t } = useLanguage();
  const [selectedCert, setSelectedCert] = React.useState<Certificate | null>(null);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  const handleOpenCertificate = (cert: Certificate) => {
    setSelectedCert(cert);
    setLightboxOpen(true);
  };

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="#0a0a0c">
      <Navbar />

      <Box as="main" flex="1" py={{ base: 12, md: 16 }}>
        <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
          <VStack gap={{ base: 12, md: 16 }} align="stretch">
            {/* Header & Bio Summary */}
            <Flex
              direction={{ base: "column-reverse", lg: "row" }}
              justify="space-between"
              align="center"
              gap={{ base: 8, lg: 12 }}
            >
              <VStack
                align={{ base: "center", lg: "flex-start" }}
                textAlign={{ base: "center", lg: "left" }}
                gap={5}
                flex={1}
              >
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
                  About Me
                </Badge>

                <Heading
                  as="h1"
                  fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                  fontWeight="700"
                  color="#ffffff"
                  letterSpacing="-0.02em"
                  lineHeight="1.15"
                >
                  {language === "th" ? profileData.nameTh : profileData.name}{" "}
                  <Text
                    as="span"
                    color="#9bdb6b"
                    display="block"
                    fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                  >
                    ({language === "th" ? profileData.name : profileData.nameTh})
                  </Text>
                </Heading>

                <Text fontSize="sm" color="#9ca3af" lineHeight="relaxed">
                  {language === "th"
                    ? profileData.bioTh || profileData.bio
                    : profileData.bio}
                </Text>

                <HStack gap={3} flexWrap="wrap" pt={2}>
                  <Link href="/documents/rachtipong-cv.pdf" target="_blank" rel="noopener noreferrer" download style={{ textDecoration: "none" }}>
                    <Button
                      size="md"
                      bg="#9bdb6b"
                      color="#0a0a0c"
                      fontWeight="600"
                      rounded="xl"
                      _hover={{ bg: "#8cd05b" }}
                    >
                      <Download size={16} style={{ marginRight: "6px" }} />
                      {t("ดาวน์โหลด CV (Resume)", "Download CV")}
                    </Button>
                  </Link>

                  <Link href="/documents/ta-profile.pdf" target="_blank" rel="noopener noreferrer" download style={{ textDecoration: "none" }}>
                    <Button
                      size="md"
                      variant="outline"
                      borderColor="rgba(255, 255, 255, 0.15)"
                      color="#ffffff"
                      rounded="xl"
                      _hover={{ borderColor: "#9bdb6b", color: "#9bdb6b" }}
                    >
                      <FileText size={16} style={{ marginRight: "6px" }} />
                      {t("เอกสาร TA Profile", "TA Profile Document")}
                    </Button>
                  </Link>
                </HStack>
              </VStack>

              {/* Portrait & Award Image */}
              <Box
                position="relative"
                w={{ base: "280px", sm: "320px", md: "360px" }}
                h={{ base: "260px", sm: "300px", md: "340px" }}
                flexShrink={0}
                rounded="2xl"
                overflow="hidden"
                borderWidth="2px"
                borderColor="rgba(155, 219, 107, 0.35)"
                shadow="0 16px 36px rgba(0, 0, 0, 0.8)"
              >
                <Image
                  src={profileData.awardImage || profileData.avatar}
                  alt={profileData.name}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 800px"
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                />
              </Box>
            </Flex>

            {/* Academic Honors */}
            <Box
              bg="#121215"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
              rounded="2xl"
              p={{ base: 6, sm: 8 }}
            >
              <VStack align="flex-start" gap={4}>
                <HStack gap={2.5}>
                  <Box p={2} rounded="lg" bg="rgba(155, 219, 107, 0.12)" color="#9bdb6b">
                    <GraduationCap size={20} />
                  </Box>
                  <VStack align="flex-start" gap={0}>
                    <Text fontWeight="700" fontSize="lg" color="#ffffff">
                      {t("ประวัติการศึกษาและเกียรตินิยม (Education & Honors)", "Education & Academic Honors")}
                    </Text>
                    <Text fontSize="xs" color="#9bdb6b">
                      {language === "th"
                        ? profileData.education.universityTh
                        : profileData.education.university}
                    </Text>
                  </VStack>
                </HStack>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} w="full" pt={2} suppressHydrationWarning>
                  <Box p={4} rounded="xl" bg="#17181c" borderWidth="1px" borderColor="rgba(255, 255, 255, 0.06)">
                    <Text fontSize="xs" color="#6b7280" mb={1}>
                      {t("เกรดเฉลี่ยสะสม (GPA)", "Cumulative GPA")}
                    </Text>
                    <Text fontSize="2xl" fontWeight="700" color="#9bdb6b">
                      3.92
                    </Text>
                    <Badge bg="rgba(155, 219, 107, 0.15)" color="#9bdb6b" mt={1} fontSize="xs">
                      {t("เกียรตินิยมอันดับหนึ่ง", "First Class Honors")}
                    </Badge>
                  </Box>

                  <Box p={4} rounded="xl" bg="#17181c" borderWidth="1px" borderColor="rgba(255, 255, 255, 0.06)">
                    <Text fontSize="xs" color="#6b7280" mb={1}>
                      {t("สาขาวิชา (Major)", "Academic Major")}
                    </Text>
                    <Text fontSize="md" fontWeight="600" color="#ffffff">
                      {language === "th"
                        ? profileData.education.majorTh
                        : profileData.education.major}
                    </Text>
                    <Text fontSize="xs" color="#9ca3af" mt={0.5}>
                      {language === "th"
                        ? profileData.education.degreeTh || profileData.education.degree
                        : profileData.education.degree}
                    </Text>
                  </Box>

                  <Box p={4} rounded="xl" bg="#17181c" borderWidth="1px" borderColor="rgba(255, 255, 255, 0.06)">
                    <Text fontSize="xs" color="#6b7280" mb={1}>
                      {t("ระยะเวลาและสถานะ", "Timeline & Status")}
                    </Text>
                    <Text fontSize="md" fontWeight="600" color="#ffffff">
                      2022 - 2025
                    </Text>
                    <Text fontSize="xs" color="#9ca3af" mt={0.5}>
                      {t("สำเร็จการศึกษา ธันวาคม 2025", "Graduated December 2025")}
                    </Text>
                  </Box>
                </SimpleGrid>
              </VStack>
            </Box>

            {/* The Teaching Assistant Journey */}
            <VStack gap={6} align="stretch">
              <VStack align="flex-start" gap={2}>
                <Badge
                  bg="rgba(155, 219, 107, 0.12)"
                  color="#9bdb6b"
                  borderWidth="1px"
                  borderColor="rgba(155, 219, 107, 0.25)"
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="xs"
                >
                  Teaching Assistant Journey
                </Badge>
                <Heading as="h2" fontSize={{ base: "xl", sm: "2xl", md: "3xl" }} color="#ffffff" fontWeight="700">
                  {t("เส้นทางสายผู้ช่วยสอน (TA) ตั้งแต่ปี 2023", "Teaching Assistant Journey Since 2023")}
                </Heading>
                <Text fontSize="sm" color="#9ca3af" maxW="2xl">
                  {t(
                    "เบื้องหลังห้องอบรมที่ดำเนินไปอย่างราบรื่น ตลอดกว่า 40 คลาส รัชติพงษ์ทำหน้าที่ดูแลความเรียบร้อยของห้องเรียน และตามประกบผู้เรียนให้ก้าวไปพร้อมกับวิทยากรหลัก",
                    "Behind every smoothly run workshop across 40+ classes, Rachtipong ensures classroom readiness and mentors learners 1-on-1 to keep in stride with lead instructors."
                  )}
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} suppressHydrationWarning>
                <Box bg="#17181c" p={6} rounded="2xl" borderWidth="1px" borderColor="rgba(255, 255, 255, 0.08)" suppressHydrationWarning>
                  <Box color="#9bdb6b" mb={3}>
                    <CheckCircle2 size={24} />
                  </Box>
                  <Text fontWeight="700" fontSize="md" color="#ffffff" mb={2}>
                    {t("01. ดูแลความเรียบร้อย", "01. Classroom Readiness")}
                  </Text>
                  <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                    {t(
                      "รักษาจังหวะและบรรยากาศของห้องอบรมให้ดำเนินไปอย่างราบรื่น เพื่อให้วิทยากรหลักมุ่งถ่ายทอดเนื้อหาได้อย่างเต็มที่",
                      "Ensuring seamless session flow and lab setup so instructors can focus purely on teaching."
                    )}
                  </Text>
                </Box>

                <Box bg="#17181c" p={6} rounded="2xl" borderWidth="1px" borderColor="rgba(255, 255, 255, 0.08)" suppressHydrationWarning>
                  <Box color="#9bdb6b" mb={3}>
                    <Users size={24} />
                  </Box>
                  <Text fontWeight="700" fontSize="md" color="#ffffff" mb={2}>
                    {t("02. ตามประกบผู้เรียน", "02. Learner Mentorship")}
                  </Text>
                  <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                    {t(
                      "คอยสังเกตและเข้าไปช่วยผู้เรียนที่ตามไม่ทัน เพื่อไม่ให้ใครต้องหลุดจากจังหวะของคลาสฝึกอบรม",
                      "Promptly resolving technical hurdles and guiding participants during complex exercises."
                    )}
                  </Text>
                </Box>

                <Box bg="#17181c" p={6} rounded="2xl" borderWidth="1px" borderColor="rgba(255, 255, 255, 0.08)" suppressHydrationWarning>
                  <Box color="#9bdb6b" mb={3}>
                    <Sparkles size={24} />
                  </Box>
                  <Text fontWeight="700" fontSize="md" color="#ffffff" mb={2}>
                    {t("03. สนับสนุนวิทยากร", "03. Instructor Co-Pilot")}
                  </Text>
                  <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                    {t(
                      "เป็นกำลังเสริมของวิทยากรหลักในทุกคลาส ตั้งแต่งาน Excel, Power BI ไปจนถึง AI และเครื่องมือออกแบบ",
                      "Reliable co-pilot across spreadsheets, Power BI, Microsoft Cloud, and Generative AI."
                    )}
                  </Text>
                </Box>
              </SimpleGrid>
            </VStack>

            {/* Certifications & Lightbox Preview */}
            <VStack gap={6} align="stretch" id="certificates">
              <VStack align="flex-start" gap={2}>
                <Badge
                  bg="rgba(155, 219, 107, 0.12)"
                  color="#9bdb6b"
                  borderWidth="1px"
                  borderColor="rgba(155, 219, 107, 0.25)"
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="xs"
                >
                  Accreditations
                </Badge>
                <Heading as="h2" fontSize={{ base: "xl", sm: "2xl", md: "3xl" }} color="#ffffff" fontWeight="700">
                  {t("ใบรับรองและผลงานการสอบ (Certifications)", "Certifications & Accreditations")}
                </Heading>
                <Text fontSize="sm" color="#9ca3af">
                  {t(
                    "คลิกที่การ์ดเพื่อดูรูปใบรับรองฉบับเต็มพร้อมรายละเอียดการรับรอง",
                    "Click on any card to view the official credential in the lightbox viewer."
                  )}
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={5}>
                {certificatesData.map((cert) => (
                  <Box
                    key={cert.id}
                    bg="#17181c"
                    borderWidth="1px"
                    borderColor="rgba(255, 255, 255, 0.08)"
                    rounded="2xl"
                    p={5}
                    cursor="pointer"
                    onClick={() => handleOpenCertificate(cert)}
                    transition="all 0.2s"
                    _hover={{
                      borderColor: "rgba(155, 219, 107, 0.35)",
                      transform: "translateY(-2px)",
                      shadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <VStack align="stretch" gap={3}>
                      {/* Image Thumbnail with Zoom Badge */}
                      <Box
                        position="relative"
                        w="100%"
                        h="160px"
                        rounded="xl"
                        overflow="hidden"
                        bg="#0a0a0c"
                        borderWidth="1px"
                        borderColor="rgba(255, 255, 255, 0.06)"
                      >
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{ objectFit: "contain", padding: "8px" }}
                        />
                        <Box
                          position="absolute"
                          bottom={2}
                          right={2}
                          p={1.5}
                          rounded="md"
                          bg="rgba(10, 10, 12, 0.85)"
                          color="#9bdb6b"
                        >
                          <ZoomIn size={14} />
                        </Box>
                      </Box>

                      <HStack justify="space-between" align="center">
                        <Badge
                          bg="rgba(155, 219, 107, 0.12)"
                          color="#9bdb6b"
                          fontSize="xs"
                          px={2}
                          py={0.5}
                          rounded="md"
                        >
                          {cert.category}
                        </Badge>
                        <Text fontSize="xs" color="#9ca3af">
                          {language === "th" ? cert.issueDateTh || cert.issueDate : cert.issueDate}
                        </Text>
                      </HStack>

                      <VStack align="flex-start" gap={0.5}>
                        <Text fontWeight="600" fontSize="sm" color="#ffffff" lineClamp={2}>
                          {cert.title}
                        </Text>
                        {language === "th" && cert.titleTh && (
                          <Text fontSize="11px" color="#9bdb6b" lineClamp={1}>
                            {cert.titleTh}
                          </Text>
                        )}
                      </VStack>

                      <Text fontSize="xs" color="#6b7280">
                        {language === "th" ? cert.issuerTh || cert.issuer : cert.issuer}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Lightbox Modal */}
      <CertificateLightbox
        certificate={selectedCert}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <Footer />
    </Box>
  );
}
