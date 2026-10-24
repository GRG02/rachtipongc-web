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
  Flex,
} from "@chakra-ui/react";
import { CheckCircle2 } from "lucide-react";
import { experiencesData } from "../data/experience";
import { useLanguage } from "../context/LanguageContext";

export function ExperienceSection() {
  const { language, t } = useLanguage();

  return (
    <Box
      as="section"
      id="experience"
      py={{ base: 14, md: 20 }}
      borderBottomWidth="1px"
      borderColor="rgba(255, 255, 255, 0.06)"
      bg="#0a0a0c"
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <VStack gap={{ base: 8, md: 12 }} align="stretch">
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
              Career & Teaching Track
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              fontWeight="700"
              color="#ffffff"
              letterSpacing="-0.01em"
            >
              Experience & Teaching Track
            </Heading>
            <Text fontSize="sm" color="#9ca3af" maxW="xl">
              {t(
                "ความไว้วางใจจาก 5 สถาบันฝึกอบรมชั้นนำ และองค์กรชั้นนำของประเทศไทยมากกว่า 40+ คลาส",
                "Trusted by 5 leading training institutes and enterprise organizations across 40+ practical workshops."
              )}
            </Text>
          </VStack>

          {/* Timeline Cards */}
          <VStack gap={5} align="stretch">
            {experiencesData.map((exp, idx) => {
              const highlightsToRender =
                language === "th" && exp.highlightsTh ? exp.highlightsTh : exp.highlights;

              return (
                <Box
                  key={exp.id}
                  bg="#17181c"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  rounded="2xl"
                  p={{ base: 6, sm: 8 }}
                  transition="all 0.2s"
                  _hover={{
                    borderColor: "rgba(155, 219, 107, 0.35)",
                    shadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align={{ base: "flex-start", md: "center" }}
                    gap={3}
                    mb={4}
                  >
                    <VStack align="flex-start" gap={1}>
                      <HStack gap={2}>
                        <Badge
                          bg={
                            exp.type === "teaching"
                              ? "rgba(155, 219, 107, 0.15)"
                              : "rgba(255, 255, 255, 0.08)"
                          }
                          color={exp.type === "teaching" ? "#9bdb6b" : "#ffffff"}
                          px={2.5}
                          py={0.5}
                          rounded="md"
                          fontSize="xs"
                        >
                          {exp.period}
                        </Badge>
                        <Text fontSize="xs" color="#6b7280">
                          Milestone 0{idx + 1}
                        </Text>
                      </HStack>
                      <Heading as="h3" fontSize={{ base: "lg", sm: "xl" }} color="#ffffff" fontWeight="700">
                        {language === "th" ? exp.roleTh || exp.role : exp.role}
                      </Heading>
                      <Text fontSize="sm" color="#9bdb6b" fontWeight="500">
                        {language === "th" ? exp.organizationTh || exp.organization : exp.organization}
                      </Text>
                    </VStack>
                  </Flex>

                  <Text fontSize="sm" color="#9ca3af" lineHeight="relaxed" mb={4}>
                    {language === "th" ? exp.descriptionTh || exp.description : exp.description}
                  </Text>

                  {/* Highlights */}
                  <VStack align="flex-start" gap={2} mb={5}>
                    {highlightsToRender.map((item, hIdx) => (
                      <HStack key={hIdx} align="flex-start" gap={2}>
                        <Box mt={0.5} color="#9bdb6b" flexShrink={0}>
                          <CheckCircle2 size={15} />
                        </Box>
                        <Text fontSize="xs" color="#d1d5db" lineHeight="tall">
                          {item}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>

                  {/* Partner Institutes if applicable */}
                  {exp.partnerInstitutes && (
                    <Box
                      mb={4}
                      p={3.5}
                      rounded="xl"
                      bg="rgba(255, 255, 255, 0.02)"
                      borderWidth="1px"
                      borderColor="rgba(255, 255, 255, 0.06)"
                    >
                      <Text fontSize="xs" color="#9ca3af" fontWeight="600" mb={2}>
                        {t(
                          "สถาบันพันธมิตรที่ร่วมงาน (5 Training Partners):",
                          "5 Partner Training Institutes:"
                        )}
                      </Text>
                      <HStack gap={2} flexWrap="wrap">
                        {exp.partnerInstitutes.map((partner) => (
                          <Badge
                            key={partner}
                            bg="rgba(255, 255, 255, 0.05)"
                            color="#ffffff"
                            px={2.5}
                            py={1}
                            rounded="md"
                            fontSize="xs"
                          >
                            {partner}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  )}

                  {/* Tools used */}
                  <HStack gap={1.5} flexWrap="wrap">
                    <Text fontSize="xs" color="#6b7280" mr={1}>
                      Tools & Technologies:
                    </Text>
                    {exp.toolsUsed.map((tool) => (
                      <Badge
                        key={tool}
                        bg="rgba(155, 219, 107, 0.08)"
                        color="#9bdb6b"
                        fontSize="xs"
                        px={2}
                        py={0.5}
                        rounded="md"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              );
            })}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
