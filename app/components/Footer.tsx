"use client";

import * as React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Separator,
  Flex,
} from "@chakra-ui/react";
import { Mail, Phone, MapPin, ExternalLink, Sparkles, Globe } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { profileData } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";

import Image from "next/image";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <Box
      as="footer"
      borderTopWidth="1px"
      borderColor="rgba(255, 255, 255, 0.08)"
      bg="#0c0c0e"
      py={{ base: 12, md: 16 }}
      mt="auto"
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "flex-start", md: "space-between" }}
          align="flex-start"
          wrap={{ base: "wrap", md: "nowrap" }}
          gap={{ base: 8, md: 0 }}
          w="full"
          width="100%"
        >
          {/* Col 1: Brand / Bio */}
          <Box flex={{ base: "none", md: "0 0 auto" }} maxW={{ base: "100%", md: "280px" }}>
            <VStack align="flex-start" gap={3}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <HStack gap={3} cursor="pointer">
                  <Box
                    w="36px"
                    h="36px"
                    rounded="xl"
                    overflow="hidden"
                    position="relative"
                    borderWidth="1px"
                    borderColor="rgba(155, 219, 107, 0.4)"
                    shadow="0 0 12px rgba(155, 219, 107, 0.25)"
                    bg="#17181c"
                    flexShrink={0}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Rachtipong Logo"
                      fill
                      sizes="36px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <VStack align="flex-start" gap={0}>
                    <Text fontWeight="600" fontSize="sm" color="#ffffff" letterSpacing="-0.01em">
                      Rachtipong
                    </Text>
                    <Text fontSize="11px" color="#9ca3af">
                      Junior Developer & TA
                    </Text>
                  </VStack>
                </HStack>
              </Link>
              <Text fontSize="xs" color="#9ca3af" lineHeight="relaxed">
                {language === "th"
                  ? "มุ่งมั่นพัฒนาซอฟต์แวร์และ AI เพื่อสร้างคุณค่าให้แก่องค์กร พร้อมเปิดรับโอกาสใหม่ในการร่วมงาน"
                  : "Dedicated to engineering practical software and AI solutions. Open to new opportunities."}
              </Text>
            </VStack>
          </Box>

          {/* Col 2: Quick Links */}
          <Box flex={{ base: "none", md: "0 0 auto" }} minW={{ md: "170px" }}>
            <VStack align="flex-start" gap={3}>
              <Text fontWeight="600" fontSize="sm" color="#ffffff" letterSpacing="wider" textTransform="uppercase">
                {t("หน้าเว็บหลัก (Navigation)", "Navigation")}
              </Text>
              <VStack align="flex-start" gap={2} fontSize="sm">
                <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>
                  <Text _hover={{ color: "#9bdb6b", transform: "translateX(2px)" }} transition="all 0.15s">
                    {t("หน้าแรก (Home)", "Home")}
                  </Text>
                </Link>
                <Link href="/projects" style={{ color: "#9ca3af", textDecoration: "none" }}>
                  <Text _hover={{ color: "#9bdb6b", transform: "translateX(2px)" }} transition="all 0.15s">
                    {t("ผลงานและโปรเจกต์ (Projects)", "Projects")}
                  </Text>
                </Link>
                <Link href="/about" style={{ color: "#9ca3af", textDecoration: "none" }}>
                  <Text _hover={{ color: "#9bdb6b", transform: "translateX(2px)" }} transition="all 0.15s">
                    {t("เกี่ยวกับฉัน (About Me)", "About Me")}
                  </Text>
                </Link>
                <Link href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>
                  <Text _hover={{ color: "#9bdb6b", transform: "translateX(2px)" }} transition="all 0.15s">
                    {t("ติดต่อ (Contact)", "Contact")}
                  </Text>
                </Link>
                <Link href="/documents/rachtipong-cv.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none" }}>
                  <Text _hover={{ color: "#9bdb6b", transform: "translateX(2px)" }} transition="all 0.15s">
                    {t("เรซูเม่ (CV / Resume)", "CV / Resume")}
                  </Text>
                </Link>
              </VStack>
            </VStack>
          </Box>

          {/* Col 3: Contact Details */}
          <Box flex={{ base: "none", md: "0 0 auto" }} minW={{ md: "250px" }}>
            <VStack align="flex-start" gap={3}>
              <Text fontWeight="600" fontSize="sm" color="#ffffff" letterSpacing="wider" textTransform="uppercase">
                {t("ช่องทางติดต่อ (Contact)", "Contact")}
              </Text>
              <VStack align="flex-start" gap={2.5} fontSize="sm" color="#9ca3af">
                <HStack gap={2.5} alignItems="center">
                  <Mail size={16} color="#9bdb6b" />
                  <a href={`mailto:${profileData.email}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Text _hover={{ color: "#ffffff" }}>{profileData.email}</Text>
                  </a>
                </HStack>
                <HStack gap={2.5} alignItems="center">
                  <Phone size={16} color="#9bdb6b" />
                  <a href={`tel:${profileData.phone}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Text _hover={{ color: "#ffffff" }}>{profileData.phone}</Text>
                  </a>
                </HStack>
                <HStack gap={2.5} alignItems="center">
                  <MapPin size={16} color="#9bdb6b" />
                  <Text>{language === "th" ? profileData.locationTh || profileData.location : profileData.location}</Text>
                </HStack>
              </VStack>
            </VStack>
          </Box>

          {/* Col 4: Connect / External Links */}
          <Box flex={{ base: "none", md: "0 0 auto" }} minW={{ md: "170px" }}>
            <VStack align="flex-start" gap={3}>
              <Text fontWeight="600" fontSize="sm" color="#ffffff" letterSpacing="wider" textTransform="uppercase">
                {t("ลิงก์ภายนอก (Profiles)", "External Profiles")}
              </Text>
              <VStack align="flex-start" gap={2.5} fontSize="sm">
                <a
                  href={profileData.linktreeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  <Text
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    _hover={{ color: "#9bdb6b" }}
                    transition="all 0.15s"
                  >
                    <Globe size={15} color="#9bdb6b" />
                    Linktree Profile
                    <ExternalLink size={13} style={{ color: "#6b7280" }} />
                  </Text>
                </a>
                <a
                  href={profileData.githubUrl || "https://github.com/GRG02"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                >
                  <Text
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    _hover={{ color: "#9bdb6b" }}
                    transition="all 0.15s"
                  >
                    <GithubIcon size={15} color="#9bdb6b" />
                    GitHub Profile
                    <ExternalLink size={13} style={{ color: "#6b7280" }} />
                  </Text>
                </a>
              </VStack>
            </VStack>
          </Box>
        </Flex>

        <Separator my={8} borderColor="rgba(255, 255, 255, 0.08)" />

        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          gap={4}
          fontSize="xs"
          color="#6b7280"
        >
          <Text>© 2026 Rachtipong Chaiprab (GRG02). All rights reserved.</Text>
          <HStack gap={2}>
            <Sparkles size={13} color="#9bdb6b" />
            <Text>Built with Next.js 16, Chakra UI v3 & TypeScript</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
