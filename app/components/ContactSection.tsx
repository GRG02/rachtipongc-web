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
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Globe,
  FileText,
  Download,
  Code,
  GraduationCap,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { profileData } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";

export function ContactSection() {
  const { language, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyPhone = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(profileData.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: 14, md: 20 }}
      bg="#0a0a0c"
      borderBottomWidth="1px"
      borderColor="rgba(255, 255, 255, 0.06)"
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack gap={{ base: 10, md: 14 }} align="stretch">
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
              Get In Touch
            </Badge>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              fontWeight="700"
              color="#ffffff"
              letterSpacing="-0.01em"
            >
              {t("ช่องทางการติดต่อและร่วมงาน", "Contact & Collaboration")}
            </Heading>
            <Text fontSize="sm" color="#9ca3af" maxW="2xl" lineHeight="relaxed">
              {t(
                "พร้อมเปิดรับโอกาสร่วมงานในตำแหน่ง Junior Developer, ผู้ช่วยสอน AI / Cloud (Teaching Assistant), งานฝึกอบรมองค์กร และโปรเจกต์พัฒนาซอฟต์แวร์ สามารถติดต่อได้โดยตรงผ่านช่องทางด้านล่างครับ",
                "Open to career opportunities as a Junior Developer, AI/Cloud Teaching Assistant, corporate technical training, and software engineering collaborations. Feel free to reach out directly via the channels below."
              )}
            </Text>
          </VStack>

          {/* Primary Channels (3 Cards Grid) */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
            {/* Email Card */}
            <Box
              bg="#17181c"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
              rounded="2xl"
              p={{ base: 6, sm: 7 }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              transition="all 0.2s"
              _hover={{
                borderColor: "rgba(155, 219, 107, 0.35)",
                transform: "translateY(-2px)",
                shadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
              }}
            >
              <VStack align="flex-start" gap={4}>
                <HStack justify="space-between" w="full">
                  <Box p={3} rounded="xl" bg="rgba(155, 219, 107, 0.1)" color="#9bdb6b">
                    <Mail size={22} />
                  </Box>
                  <Badge
                    bg="rgba(155, 219, 107, 0.12)"
                    color="#9bdb6b"
                    fontSize="xs"
                    px={2.5}
                    py={0.5}
                    rounded="full"
                  >
                    Primary Channel
                  </Badge>
                </HStack>

                <VStack align="flex-start" gap={1}>
                  <Text fontSize="xs" color="#9ca3af" fontWeight="500">
                    {t("อีเมลสำหรับติดต่องาน", "Work Email")}
                  </Text>
                  <Text fontSize="md" fontWeight="700" color="#ffffff" wordBreak="break-all">
                    {profileData.email}
                  </Text>
                  <Text fontSize="xs" color="#6b7280" mt={1} lineHeight="relaxed">
                    {t("ตอบกลับภายใน 24 ชม. สำหรับทุกการติดต่อ", "Prompt response within 24 hours")}
                  </Text>
                </VStack>
              </VStack>

              <HStack gap={2} mt={6} pt={4} borderTopWidth="1px" borderColor="rgba(255, 255, 255, 0.06)">
                <a
                  href={`mailto:${profileData.email}?subject=Inquiry%20via%20Portfolio`}
                  style={{ textDecoration: "none", flex: 1 }}
                >
                  <Button
                    size="sm"
                    w="full"
                    bg="#9bdb6b"
                    color="#0a0a0c"
                    fontWeight="600"
                    rounded="xl"
                    _hover={{ bg: "#8cd05b", shadow: "0 0 16px rgba(155, 219, 107, 0.3)" }}
                  >
                    <Mail size={14} style={{ marginRight: "6px" }} />
                    {t("ส่งอีเมล", "Send Email")}
                  </Button>
                </a>
                <Button
                  size="sm"
                  variant="outline"
                  borderColor="rgba(255, 255, 255, 0.15)"
                  color="#ffffff"
                  rounded="xl"
                  onClick={handleCopyEmail}
                  _hover={{ borderColor: "#9bdb6b", color: "#9bdb6b" }}
                  px={3}
                >
                  {copiedEmail ? <Check size={14} color="#9bdb6b" /> : <Copy size={14} />}
                </Button>
              </HStack>
            </Box>

            {/* Phone Card */}
            <Box
              bg="#17181c"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
              rounded="2xl"
              p={{ base: 6, sm: 7 }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              transition="all 0.2s"
              _hover={{
                borderColor: "rgba(155, 219, 107, 0.35)",
                transform: "translateY(-2px)",
                shadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
              }}
            >
              <VStack align="flex-start" gap={4}>
                <HStack justify="space-between" w="full">
                  <Box p={3} rounded="xl" bg="rgba(155, 219, 107, 0.1)" color="#9bdb6b">
                    <Phone size={22} />
                  </Box>
                  <Badge
                    bg="rgba(255, 255, 255, 0.06)"
                    color="#9ca3af"
                    fontSize="xs"
                    px={2.5}
                    py={0.5}
                    rounded="full"
                  >
                    Direct Line
                  </Badge>
                </HStack>

                <VStack align="flex-start" gap={1}>
                  <Text fontSize="xs" color="#9ca3af" fontWeight="500">
                    {t("เบอร์โทรศัพท์ติดต่อตรง", "Direct Phone")}
                  </Text>
                  <Text fontSize="lg" fontWeight="700" color="#ffffff">
                    {profileData.phone}
                  </Text>
                  <Text fontSize="xs" color="#6b7280" mt={1} lineHeight="relaxed">
                    {t("สะดวกรับสายช่วงเวลา 09:00 - 18:00 น.", "Available 09:00 - 18:00 (GMT+7)")}
                  </Text>
                </VStack>
              </VStack>

              <HStack gap={2} mt={6} pt={4} borderTopWidth="1px" borderColor="rgba(255, 255, 255, 0.06)">
                <a
                  href={`tel:${profileData.phone}`}
                  style={{ textDecoration: "none", flex: 1 }}
                >
                  <Button
                    size="sm"
                    w="full"
                    variant="outline"
                    borderColor="rgba(255, 255, 255, 0.15)"
                    color="#ffffff"
                    fontWeight="600"
                    rounded="xl"
                    _hover={{ borderColor: "#9bdb6b", color: "#9bdb6b", bg: "rgba(155, 219, 107, 0.05)" }}
                  >
                    <Phone size={14} style={{ marginRight: "6px" }} />
                    {t("โทรติดต่อ", "Call Direct")}
                  </Button>
                </a>
                <Button
                  size="sm"
                  variant="outline"
                  borderColor="rgba(255, 255, 255, 0.15)"
                  color="#ffffff"
                  rounded="xl"
                  onClick={handleCopyPhone}
                  _hover={{ borderColor: "#9bdb6b", color: "#9bdb6b" }}
                  px={3}
                >
                  {copiedPhone ? <Check size={14} color="#9bdb6b" /> : <Copy size={14} />}
                </Button>
              </HStack>
            </Box>

            {/* Location & Status Card */}
            <Box
              bg="#17181c"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
              rounded="2xl"
              p={{ base: 6, sm: 7 }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              transition="all 0.2s"
              _hover={{
                borderColor: "rgba(155, 219, 107, 0.35)",
                transform: "translateY(-2px)",
                shadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
              }}
            >
              <VStack align="flex-start" gap={4}>
                <HStack justify="space-between" w="full">
                  <Box p={3} rounded="xl" bg="rgba(155, 219, 107, 0.1)" color="#9bdb6b">
                    <MapPin size={22} />
                  </Box>
                  <HStack gap={1.5} px={2.5} py={0.5} rounded="full" bg="rgba(155, 219, 107, 0.12)" borderWidth="1px" borderColor="rgba(155, 219, 107, 0.25)">
                    <Box w={2} h={2} rounded="full" bg="#9bdb6b" />
                    <Text fontSize="11px" fontWeight="600" color="#9bdb6b">
                      Available
                    </Text>
                  </HStack>
                </HStack>

                <VStack align="flex-start" gap={1}>
                  <Text fontSize="xs" color="#9ca3af" fontWeight="500">
                    {t("ที่อยู่ & รูปแบบการทำงาน", "Location & Work Mode")}
                  </Text>
                  <Text fontSize="md" fontWeight="700" color="#ffffff">
                    {language === "th" ? profileData.locationTh || profileData.location : profileData.location}
                  </Text>
                  <Text fontSize="xs" color="#9bdb6b" mt={1} fontWeight="500">
                    On-site / Hybrid / Remote
                  </Text>
                </VStack>
              </VStack>

              <Box mt={6} pt={4} borderTopWidth="1px" borderColor="rgba(255, 255, 255, 0.06)">
                <Text fontSize="xs" color="#6b7280" lineHeight="relaxed">
                  {t(
                    "พร้อมเริ่มงานได้ทันทีทั้งในเขตกรุงเทพฯ และปริมณฑล หรือการทำงานแบบระยะไกล",
                    "Ready to onboard for Bangkok on-site, hybrid, or full remote roles."
                  )}
                </Text>
              </Box>
            </Box>
          </SimpleGrid>

          {/* Online Profiles & Documents Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
            {/* Online Profiles */}
            <Box
              bg="#121215"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
              rounded="2xl"
              p={{ base: 6, sm: 7 }}
            >
              <VStack align="flex-start" gap={4}>
                <HStack gap={2.5}>
                  <Box p={2} rounded="lg" bg="rgba(155, 219, 107, 0.12)" color="#9bdb6b">
                    <Globe size={18} />
                  </Box>
                  <VStack align="flex-start" gap={0}>
                    <Text fontWeight="700" fontSize="md" color="#ffffff">
                      {t("โปรไฟล์ออนไลน์ (Online Profiles)", "Online Profiles & Repositories")}
                    </Text>
                    <Text fontSize="xs" color="#9ca3af">
                      {t("ติดตามผลงานซอร์สโค้ดและลิงก์ทางการ", "Explore open source projects and verified links")}
                    </Text>
                  </VStack>
                </HStack>

                <VStack align="stretch" gap={3} w="full" pt={1}>
                  {/* GitHub */}
                  <a
                    href={profileData.githubUrl || "https://github.com/GRG02"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <HStack
                      justify="space-between"
                      p={3.5}
                      rounded="xl"
                      bg="rgba(255, 255, 255, 0.02)"
                      borderWidth="1px"
                      borderColor="rgba(255, 255, 255, 0.06)"
                      transition="all 0.15s"
                      _hover={{
                        borderColor: "rgba(155, 219, 107, 0.4)",
                        bg: "rgba(155, 219, 107, 0.04)",
                      }}
                    >
                      <HStack gap={3}>
                        <GithubIcon size={18} />
                        <VStack align="flex-start" gap={0}>
                          <Text fontSize="sm" fontWeight="600" color="#ffffff">
                            GitHub Profile
                          </Text>
                          <Text fontSize="11px" color="#9ca3af">
                            github.com/GRG02
                          </Text>
                        </VStack>
                      </HStack>
                      <ArrowUpRight size={16} color="#9bdb6b" />
                    </HStack>
                  </a>

                  {/* Linktree */}
                  <a
                    href={profileData.linktreeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <HStack
                      justify="space-between"
                      p={3.5}
                      rounded="xl"
                      bg="rgba(255, 255, 255, 0.02)"
                      borderWidth="1px"
                      borderColor="rgba(255, 255, 255, 0.06)"
                      transition="all 0.15s"
                      _hover={{
                        borderColor: "rgba(155, 219, 107, 0.4)",
                        bg: "rgba(155, 219, 107, 0.04)",
                      }}
                    >
                      <HStack gap={3}>
                        <Globe size={18} color="#9bdb6b" />
                        <VStack align="flex-start" gap={0}>
                          <Text fontSize="sm" fontWeight="600" color="#ffffff">
                            Linktree Verified Hub
                          </Text>
                          <Text fontSize="11px" color="#9ca3af">
                            linktr.ee/rachtipong_c
                          </Text>
                        </VStack>
                      </HStack>
                      <ArrowUpRight size={16} color="#9bdb6b" />
                    </HStack>
                  </a>
                </VStack>
              </VStack>
            </Box>

            {/* Official Documents */}
            <Box
              bg="#121215"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
              rounded="2xl"
              p={{ base: 6, sm: 7 }}
            >
              <VStack align="flex-start" gap={4}>
                <HStack gap={2.5}>
                  <Box p={2} rounded="lg" bg="rgba(155, 219, 107, 0.12)" color="#9bdb6b">
                    <FileText size={18} />
                  </Box>
                  <VStack align="flex-start" gap={0}>
                    <Text fontWeight="700" fontSize="md" color="#ffffff">
                      {t("เอกสารประวัติอย่างเป็นทางการ", "Official Credentials & Resume")}
                    </Text>
                    <Text fontSize="xs" color="#9ca3af">
                      {t("ดาวน์โหลดเอกสาร PDF สำหรับประกอบการพิจารณา", "Download PDF documents for candidate review")}
                    </Text>
                  </VStack>
                </HStack>

                <VStack align="stretch" gap={3} w="full" pt={1}>
                  {/* Resume PDF */}
                  <a
                    href="/documents/rachtipong-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    style={{ textDecoration: "none" }}
                  >
                    <HStack
                      justify="space-between"
                      p={3.5}
                      rounded="xl"
                      bg="rgba(255, 255, 255, 0.02)"
                      borderWidth="1px"
                      borderColor="rgba(255, 255, 255, 0.06)"
                      transition="all 0.15s"
                      _hover={{
                        borderColor: "rgba(155, 219, 107, 0.4)",
                        bg: "rgba(155, 219, 107, 0.04)",
                      }}
                    >
                      <HStack gap={3}>
                        <Download size={18} color="#9bdb6b" />
                        <VStack align="flex-start" gap={0}>
                          <Text fontSize="sm" fontWeight="600" color="#ffffff">
                            {t("ดาวน์โหลด Resume / CV (PDF)", "Download Resume / CV (PDF)")}
                          </Text>
                          <Text fontSize="11px" color="#9ca3af">
                            rachtipong-cv.pdf
                          </Text>
                        </VStack>
                      </HStack>
                      <Badge bg="rgba(155, 219, 107, 0.12)" color="#9bdb6b" fontSize="xs" px={2} py={0.5} rounded="md">
                        PDF
                      </Badge>
                    </HStack>
                  </a>

                  {/* TA Profile PDF */}
                  <a
                    href="/documents/ta-profile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    style={{ textDecoration: "none" }}
                  >
                    <HStack
                      justify="space-between"
                      p={3.5}
                      rounded="xl"
                      bg="rgba(255, 255, 255, 0.02)"
                      borderWidth="1px"
                      borderColor="rgba(255, 255, 255, 0.06)"
                      transition="all 0.15s"
                      _hover={{
                        borderColor: "rgba(155, 219, 107, 0.4)",
                        bg: "rgba(155, 219, 107, 0.04)",
                      }}
                    >
                      <HStack gap={3}>
                        <FileText size={18} color="#9bdb6b" />
                        <VStack align="flex-start" gap={0}>
                          <Text fontSize="sm" fontWeight="600" color="#ffffff">
                            {t("เอกสารแฟ้มผลงาน TA Profile (PDF)", "TA Profile Portfolio (PDF)")}
                          </Text>
                          <Text fontSize="11px" color="#9ca3af">
                            ta-profile.pdf
                          </Text>
                        </VStack>
                      </HStack>
                      <Badge bg="rgba(155, 219, 107, 0.12)" color="#9bdb6b" fontSize="xs" px={2} py={0.5} rounded="md">
                        PDF
                      </Badge>
                    </HStack>
                  </a>
                </VStack>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Scope of Collaboration / What I Offer */}
          <Box
            bg="#17181c"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.08)"
            rounded="2xl"
            p={{ base: 6, sm: 8 }}
          >
            <VStack align="stretch" gap={5}>
              <VStack align="flex-start" gap={1}>
                <Text fontWeight="700" fontSize="lg" color="#ffffff">
                  {t("ความเชี่ยวชาญและขอบเขตที่พร้อมสนับสนุน", "Areas of Collaboration")}
                </Text>
                <Text fontSize="xs" color="#9ca3af">
                  {t(
                    "พร้อมร่วมงานและเป็นกำลังสำคัญในทีมเทคโนโลยีและการฝึกอบรม",
                    "Ready to deliver value across engineering teams and professional training programs"
                  )}
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} pt={2}>
                <Box
                  p={4}
                  rounded="xl"
                  bg="rgba(255, 255, 255, 0.02)"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.06)"
                >
                  <HStack gap={2.5} color="#9bdb6b" mb={2}>
                    <Code size={18} />
                    <Text fontWeight="600" fontSize="sm" color="#ffffff">
                      Junior Software Dev
                    </Text>
                  </HStack>
                  <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                    {t(
                      "พัฒนา Web Application ด้วย Next.js / TypeScript, โมบายล์แอปด้วย Flutter และซอฟต์แวร์ Native ด้วย Rust",
                      "Web apps with Next.js & React, mobile apps with Flutter, and lightweight native desktop apps with Rust."
                    )}
                  </Text>
                </Box>

                <Box
                  p={4}
                  rounded="xl"
                  bg="rgba(255, 255, 255, 0.02)"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.06)"
                >
                  <HStack gap={2.5} color="#9bdb6b" mb={2}>
                    <GraduationCap size={18} />
                    <Text fontWeight="600" fontSize="sm" color="#ffffff">
                      AI & Cloud TA
                    </Text>
                  </HStack>
                  <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                    {t(
                      "ผู้ช่วยสอนกว่า 40 คลาสใน 5 สถาบันชั้นนำ เชี่ยวชาญ Generative AI, Microsoft Copilot, Power Platform และ Excel ขั้นสูง",
                      "40+ workshops delivered across 5 institutes covering Generative AI, Copilot, Power Platform, and Excel modeling."
                    )}
                  </Text>
                </Box>

                <Box
                  p={4}
                  rounded="xl"
                  bg="rgba(255, 255, 255, 0.02)"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.06)"
                >
                  <HStack gap={2.5} color="#9bdb6b" mb={2}>
                    <Workflow size={18} />
                    <Text fontWeight="600" fontSize="sm" color="#ffffff">
                      Process Automation
                    </Text>
                  </HStack>
                  <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                    {t(
                      "เชื่อมต่อระบบอัตโนมัติด้วย n8n, Power Automate และพัฒนาแอปพลิเคชันภายในองค์กรด้วย Power Apps / SharePoint",
                      "Enterprise workflow automation with n8n & Power Automate, plus internal apps via Power Apps & SharePoint."
                    )}
                  </Text>
                </Box>
              </SimpleGrid>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
