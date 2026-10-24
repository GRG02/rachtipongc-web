"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";
import { profileData } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <Box
      position="relative"
      overflow="hidden"
      py={{ base: 12, md: 18, lg: 22 }}
      borderBottomWidth="1px"
      borderColor="rgba(255, 255, 255, 0.06)"
      bg="radial-gradient(ellipse 70% 40% at 50% -10%, rgba(155, 219, 107, 0.08), transparent)"
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 10, lg: 12 }}
        >
          {/* Left Column: Bio & CTA */}
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            gap={6}
            flex={1}
          >

            {/* Headline */}
            <VStack align={{ base: "center", lg: "flex-start" }} gap={2}>
              <Text fontSize={{ base: "sm", sm: "md" }} color="#9ca3af" fontWeight="500">
                {t(
                  `สวัสดีครับ ผม ${profileData.nameTh} (${profileData.name})`,
                  `Hi there, I'm ${profileData.name}`
                )}
              </Text>

              <Heading
                as="h1"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "5xl" }}
                fontWeight="700"
                lineHeight="1.15"
                color="#ffffff"
                letterSpacing="-0.02em"
              >
                Junior Developer &{" "}
                <Text
                  as="span"
                  bgGradient="to-r"
                  gradientFrom="#9bdb6b"
                  gradientTo="#bbf7d0"
                  bgClip="text"
                >
                  AI / Cloud TA
                </Text>
              </Heading>
            </VStack>

            {/* Subtitle / Bio */}
            <Text
              fontSize={{ base: "sm", sm: "md" }}
              color="#9ca3af"
              lineHeight="relaxed"
              maxW="2xl"
            >
              {language === "th"
                ? profileData.subtitleTh || profileData.subtitle
                : profileData.subtitle}
            </Text>

            {/* Location & Key Meta */}
            <HStack
              gap={4}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              fontSize="xs"
              color="#9ca3af"
            >
              <HStack gap={1.5}>
                <MapPin size={14} color="#9bdb6b" />
                <Text>{profileData.location}</Text>
              </HStack>
              <HStack gap={1.5}>
                <GraduationCap size={14} color="#9bdb6b" />
                <Text>GPA 3.92 First Class Honors</Text>
              </HStack>
              <HStack gap={1.5}>
                <Award size={14} color="#9bdb6b" />
                <Text>6+ Professional Certifications</Text>
              </HStack>
            </HStack>

            {/* Streamlined CTA Buttons (No redundant CV button) */}
            <HStack
              gap={3}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              pt={2}
              w={{ base: "full", sm: "auto" }}
            >
              <Link href="/projects" style={{ textDecoration: "none" }}>
                <Button
                  size="md"
                  h="44px"
                  bg="#9bdb6b"
                  color="#0a0a0c"
                  fontWeight="600"
                  px={6}
                  rounded="xl"
                  _hover={{
                    bg: "#8cd05b",
                    shadow: "0 0 20px rgba(155, 219, 107, 0.35)",
                    transform: "translateY(-1px)",
                  }}
                  transition="all 0.2s"
                >
                  {t("สำรวจผลงาน (View Projects)", "Explore Projects")}
                  <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                </Button>
              </Link>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  size="md"
                  h="44px"
                  variant="outline"
                  borderColor="rgba(255, 255, 255, 0.15)"
                  color="#ffffff"
                  bg="rgba(255, 255, 255, 0.02)"
                  px={6}
                  rounded="xl"
                  _hover={{
                    borderColor: "rgba(155, 219, 107, 0.5)",
                    color: "#9bdb6b",
                    bg: "rgba(155, 219, 107, 0.04)",
                  }}
                  transition="all 0.2s"
                >
                  {t("ติดต่อฉัน (Contact)", "Get in Touch")}
                </Button>
              </Link>
            </HStack>
          </VStack>

          {/* Right Column: Avatar Card with Sleek Minimalist Ring */}
          <Box
            position="relative"
            w={{ base: "240px", sm: "280px", md: "320px", lg: "340px" }}
            h={{ base: "240px", sm: "280px", md: "320px", lg: "340px" }}
            flexShrink={0}
          >
            {/* Subtle Outer Glow */}
            <Box
              position="absolute"
              inset="-3px"
              rounded="full"
              bg="rgba(155, 219, 107, 0.25)"
              filter="blur(10px)"
              zIndex={0}
            />

            {/* Avatar Frame */}
            <Box
              position="relative"
              w="100%"
              h="100%"
              rounded="full"
              overflow="hidden"
              borderWidth="2px"
              borderColor="rgba(155, 219, 107, 0.5)"
              bg="#17181c"
              zIndex={1}
              shadow="0 16px 32px rgba(0, 0, 0, 0.7)"
            >
              <Image
                src={profileData.avatar}
                alt={profileData.name}
                fill
                priority
                sizes="(max-width: 768px) 280px, 340px"
                style={{ objectFit: "cover" }}
              />
            </Box>

            {/* Floating Academic Badge */}
            <Box
              position="absolute"
              bottom="4px"
              right="-6px"
              zIndex={2}
              bg="#121215"
              borderWidth="1px"
              borderColor="rgba(155, 219, 107, 0.35)"
              px={3}
              py={1.5}
              rounded="xl"
              shadow="0 8px 20px rgba(0, 0, 0, 0.7)"
            >
              <HStack gap={2}>
                <Sparkles size={14} color="#9bdb6b" />
                <VStack align="flex-start" gap={0}>
                  <Text fontSize="9px" color="#9ca3af" textTransform="uppercase" letterSpacing="wider">
                    Academic Rank
                  </Text>
                  <Text fontSize="xs" fontWeight="700" color="#9bdb6b">
                    GPA 3.92 (Honors)
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
