"use client";

import * as React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Badge,
  Flex,
} from "@chakra-ui/react";
import {
  Award,
  Building,
  GraduationCap,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { profileData } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";

export function AboutPreviewSection() {
  const { language, t } = useLanguage();
  const statIcons = [GraduationCap, Users, Building, Award];

  return (
    <Box
      as="section"
      py={{ base: 14, md: 20 }}
      borderBottomWidth="1px"
      borderColor="rgba(255, 255, 255, 0.06)"
      bg="#0e0e11"
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack gap={{ base: 10, md: 14 }} align="stretch">
          {/* Section Heading */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "flex-end" }}
            gap={4}
          >
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
                textTransform="uppercase"
                letterSpacing="wider"
              >
                About Me
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="700"
                color="#ffffff"
                letterSpacing="-0.01em"
              >
                About Me & Professional Journey
              </Heading>
              <Text fontSize="sm" color="#9ca3af" maxW="xl">
                {t(
                  "เส้นทางการเติบโตจากนักศึกษาสาขาเทคโนโลยีดิจิทัลสู่นักพัฒนาและผู้ช่วยสอนสายเทคโนโลยี",
                  "The growth journey from digital technology honors graduate to developer and enterprise teaching assistant."
                )}
              </Text>
            </VStack>

            <Link href="/about" style={{ textDecoration: "none" }}>
              <Button
                variant="outline"
                size="sm"
                borderColor="rgba(155, 219, 107, 0.3)"
                color="#9bdb6b"
                _hover={{
                  bg: "rgba(155, 219, 107, 0.08)",
                  borderColor: "#9bdb6b",
                }}
                rounded="lg"
              >
                {t("อ่านเรื่องราวทั้งหมด (Full Bio)", "Read Full Bio")}
                <ArrowRight size={14} style={{ marginLeft: "6px" }} />
              </Button>
            </Link>
          </Flex>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={4}>
            {profileData.stats.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <Box
                  key={stat.label}
                  bg="#17181c"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  p={6}
                  rounded="2xl"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.2s"
                  _hover={{
                    borderColor: "rgba(155, 219, 107, 0.35)",
                    transform: "translateY(-2px)",
                    shadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <Flex justify="space-between" align="flex-start" mb={4}>
                    <Box
                      p={2.5}
                      rounded="xl"
                      bg="rgba(155, 219, 107, 0.1)"
                      color="#9bdb6b"
                    >
                      <Icon size={20} />
                    </Box>
                    <Text fontSize="xs" color="#6b7280" fontWeight="500">
                      0{idx + 1}
                    </Text>
                  </Flex>
                  <Text
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="700"
                    color="#ffffff"
                    letterSpacing="-0.02em"
                    mb={1}
                  >
                    {stat.value}
                  </Text>
                  <Text fontSize="sm" fontWeight="600" color="#9bdb6b" mb={1}>
                    {language === "th" ? stat.labelTh || stat.label : stat.label}
                  </Text>
                  <Text fontSize="xs" color="#9ca3af" lineHeight="tall">
                    {language === "th" ? stat.descriptionTh || stat.description : stat.description}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>

          {/* TA Pillars Preview */}
          <Box
            bg="#141418"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.08)"
            rounded="2xl"
            p={{ base: 6, md: 8 }}
          >
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
              <VStack align="flex-start" gap={2}>
                <HStack gap={2} color="#9bdb6b">
                  <CheckCircle size={18} />
                  <Text fontWeight="600" fontSize="sm" color="#ffffff">
                    {t("ดูแลความเรียบร้อย (Classroom Readiness)", "Classroom Readiness")}
                  </Text>
                </HStack>
                <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                  {t(
                    "รักษาจังหวะและบรรยากาศห้องอบรมให้ดำเนินไปอย่างราบรื่น เพื่อให้วิทยากรหลักถ่ายทอดเนื้อหาได้เต็มที่",
                    "Ensuring smooth classroom pacing and environment so lead instructors can focus entirely on delivering knowledge."
                  )}
                </Text>
              </VStack>

              <VStack align="flex-start" gap={2}>
                <HStack gap={2} color="#9bdb6b">
                  <CheckCircle size={18} />
                  <Text fontWeight="600" fontSize="sm" color="#ffffff">
                    {t("ตามประกบผู้เรียน (Learner Mentorship)", "Learner Mentorship")}
                  </Text>
                </HStack>
                <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                  {t(
                    "คอยสังเกตและช่วยแก้ปัญหาให้ผู้เรียนแบบเรียลไทม์ เพื่อไม่ให้ใครหลุดจากจังหวะของคลาสปฏิบัติจริง",
                    "Providing real-time troubleshooting and 1-on-1 assistance so every learner keeps pace in hands-on labs."
                  )}
                </Text>
              </VStack>

              <VStack align="flex-start" gap={2}>
                <HStack gap={2} color="#9bdb6b">
                  <CheckCircle size={18} />
                  <Text fontWeight="600" fontSize="sm" color="#ffffff">
                    {t("สนับสนุนวิทยากร (Instructor Co-Pilot)", "Instructor Co-Pilot")}
                  </Text>
                </HStack>
                <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                  {t(
                    "เป็นกำลังเสริมครอบคลุมตั้งแต่งาน Excel, Power BI ไปจนถึงระบบ Cloud และเครื่องมือ Generative AI",
                    "Versatile technical co-pilot across Excel, Power BI, Microsoft Cloud, and Generative AI workflows."
                  )}
                </Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
