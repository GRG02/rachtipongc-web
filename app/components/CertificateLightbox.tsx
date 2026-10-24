"use client";

import * as React from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import { X, Award, Calendar } from "lucide-react";
import {
  DialogRoot,
  DialogContent,
  DialogCloseTrigger,
  DialogHeader,
  DialogBody,
} from "@/components/ui/dialog";
import { Certificate } from "../types/portfolio";
import { useLanguage } from "../context/LanguageContext";

interface CertificateLightboxProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateLightbox({
  certificate,
  isOpen,
  onClose,
}: CertificateLightboxProps) {
  const { language } = useLanguage();
  if (!certificate) return null;

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(e) => {
        if (!e.open) onClose();
      }}
      size={{ base: "full", md: "xl" }}
      placement="center"
    >
      <DialogContent
        bg="#121215"
        borderColor="rgba(255, 255, 255, 0.12)"
        borderWidth="1px"
        rounded="2xl"
        p={0}
        overflow="hidden"
        shadow="0 24px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(155, 219, 107, 0.15)"
      >
        <DialogHeader
          bg="#17181c"
          borderBottomWidth="1px"
          borderColor="rgba(255, 255, 255, 0.08)"
          px={6}
          py={4}
        >
          <Flex justify="space-between" align="center">
            <HStack gap={2}>
              <Badge
                bg="rgba(155, 219, 107, 0.15)"
                color="#9bdb6b"
                borderWidth="1px"
                borderColor="rgba(155, 219, 107, 0.3)"
                px={2.5}
                py={0.5}
                rounded="full"
                fontSize="xs"
              >
                {certificate.category}
              </Badge>
              <Text fontSize="sm" color="#9ca3af">
                {language === "th"
                  ? certificate.scoreOrAwardTh || certificate.scoreOrAward
                  : certificate.scoreOrAward}
              </Text>
            </HStack>
            <DialogCloseTrigger asChild>
              <IconButton
                aria-label="Close dialog"
                variant="ghost"
                size="sm"
                color="#9ca3af"
                onClick={onClose}
              >
                <X size={18} />
              </IconButton>
            </DialogCloseTrigger>
          </Flex>
        </DialogHeader>

        <DialogBody p={{ base: 4, sm: 6 }}>
          <VStack gap={5} align="stretch">
            {/* Certificate Image Display */}
            <Box
              position="relative"
              w="100%"
              minH={{ base: "260px", sm: "380px" }}
              bg="#0a0a0c"
              rounded="xl"
              overflow="hidden"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={800}
                height={560}
                style={{
                  objectFit: "contain",
                  maxHeight: "440px",
                  width: "100%",
                }}
              />
            </Box>

            {/* Certificate Details */}
            <VStack align="flex-start" gap={2}>
              <Text fontWeight="600" fontSize={{ base: "lg", md: "xl" }} color="#ffffff">
                {certificate.title}
              </Text>
              {language === "th" && certificate.titleTh && (
                <Text fontSize="sm" color="#9bdb6b" fontWeight="500">
                  {certificate.titleTh}
                </Text>
              )}

              <HStack gap={4} flexWrap="wrap" fontSize="xs" color="#9ca3af" mt={1}>
                <HStack gap={1.5}>
                  <Award size={14} color="#9bdb6b" />
                  <Text>
                    {language === "th"
                      ? certificate.issuerTh || certificate.issuer
                      : certificate.issuer}
                  </Text>
                </HStack>
                <HStack gap={1.5}>
                  <Calendar size={14} color="#9ca3af" />
                  <Text>
                    {language === "th"
                      ? certificate.issueDateTh || certificate.issueDate
                      : certificate.issueDate}
                  </Text>
                </HStack>
              </HStack>

              <Text fontSize="sm" color="#9ca3af" lineHeight="tall" mt={2}>
                {language === "th"
                  ? certificate.descriptionTh || certificate.description
                  : certificate.description}
              </Text>
            </VStack>
          </VStack>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
