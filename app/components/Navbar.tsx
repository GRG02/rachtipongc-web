"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { Menu, X, ArrowUpRight, Sparkles, FileText, Briefcase, User, Home as HomeIcon, MessageSquare } from "lucide-react";
import {
  DrawerRoot,
  DrawerContent,
  DrawerCloseTrigger,
  DrawerHeader,
  DrawerBody,
} from "@/components/ui/drawer";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("หน้าแรก", "Home"), icon: HomeIcon },
    { href: "/projects", label: t("ผลงาน", "Projects"), icon: Briefcase },
    { href: "/about", label: t("เกี่ยวกับฉัน", "About"), icon: User },
    { href: "/contact", label: t("ติดต่อ", "Contact"), icon: MessageSquare },
  ];

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      width="100%"
      borderBottomWidth="1px"
      borderColor="rgba(255, 255, 255, 0.08)"
      bg="rgba(10, 10, 12, 0.88)"
      backdropFilter="blur(16px)"
      transition="all 0.2s"
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <Flex h="68px" alignItems="center" justifyContent="space-between">
          {/* Logo / Brand */}
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
                  Rachtipong Chaiprab
                </Text>
                <Text fontSize="11px" color="#9ca3af" display={{ base: "none", sm: "block" }}>
                  Junior Developer & TA
                </Text>
              </VStack>
            </HStack>
          </Link>

          {/* Desktop Navigation Links */}
          <HStack gap={1} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    px={3.5}
                    py={1.5}
                    rounded="lg"
                    fontSize="sm"
                    fontWeight={isActive ? "600" : "400"}
                    color={isActive ? "#9bdb6b" : "#d1d5db"}
                    bg={isActive ? "rgba(155, 219, 107, 0.08)" : "transparent"}
                    borderWidth="1px"
                    borderColor={isActive ? "rgba(155, 219, 107, 0.25)" : "transparent"}
                    _hover={{
                      color: "#9bdb6b",
                      bg: "rgba(155, 219, 107, 0.06)",
                    }}
                    transition="all 0.15s ease"
                  >
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </HStack>

          {/* Desktop Actions: [ EN | TH ] Pill Tab */}
          <HStack gap={3} display={{ base: "none", md: "flex" }} alignItems="center">
            {/* EN | TH Pill Tab */}
            <HStack
              gap={0}
              bg="rgba(255, 255, 255, 0.04)"
              p="3px"
              rounded="full"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.1)"
            >
              <Button
                size="xs"
                h="26px"
                px={3}
                rounded="full"
                fontSize="11px"
                fontWeight={language === "en" ? "700" : "500"}
                bg={language === "en" ? "#9bdb6b" : "transparent"}
                color={language === "en" ? "#0a0a0c" : "#9ca3af"}
                _hover={{
                  color: language === "en" ? "#0a0a0c" : "#ffffff",
                }}
                onClick={() => setLanguage("en")}
                transition="all 0.15s"
              >
                EN
              </Button>
              <Button
                size="xs"
                h="26px"
                px={3}
                rounded="full"
                fontSize="11px"
                fontWeight={language === "th" ? "700" : "500"}
                bg={language === "th" ? "#9bdb6b" : "transparent"}
                color={language === "th" ? "#0a0a0c" : "#9ca3af"}
                _hover={{
                  color: language === "th" ? "#0a0a0c" : "#ffffff",
                }}
                onClick={() => setLanguage("th")}
                transition="all 0.15s"
              >
                TH
              </Button>
            </HStack>
          </HStack>

          {/* Mobile Right Controls: Pill + Hamburger */}
          <HStack gap={2} display={{ base: "flex", md: "none" }} alignItems="center">
            {/* Quick EN | TH on Mobile Header */}
            <HStack
              gap={0}
              bg="rgba(255, 255, 255, 0.05)"
              p="2px"
              rounded="full"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.1)"
            >
              <Button
                size="xs"
                h="22px"
                px={2}
                rounded="full"
                fontSize="10px"
                fontWeight={language === "en" ? "700" : "500"}
                bg={language === "en" ? "#9bdb6b" : "transparent"}
                color={language === "en" ? "#0a0a0c" : "#9ca3af"}
                onClick={() => setLanguage("en")}
              >
                EN
              </Button>
              <Button
                size="xs"
                h="22px"
                px={2}
                rounded="full"
                fontSize="10px"
                fontWeight={language === "th" ? "700" : "500"}
                bg={language === "th" ? "#9bdb6b" : "transparent"}
                color={language === "th" ? "#0a0a0c" : "#9ca3af"}
                onClick={() => setLanguage("th")}
              >
                TH
              </Button>
            </HStack>

            <IconButton
              aria-label="Toggle navigation menu"
              variant="ghost"
              color="#ffffff"
              borderColor="rgba(255, 255, 255, 0.1)"
              borderWidth="1px"
              onClick={() => setOpen(true)}
              size="sm"
              rounded="lg"
            >
              <Menu size={18} />
            </IconButton>
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Drawer Navigation */}
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerContent
          bg="#121215"
          borderColor="rgba(255, 255, 255, 0.1)"
          borderLeftWidth="1px"
          color="#ffffff"
          maxW="300px"
        >
          <DrawerHeader borderBottomWidth="1px" borderColor="rgba(255, 255, 255, 0.08)" py={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <HStack gap={2}>
                <Box
                  w="28px"
                  h="28px"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                  borderWidth="1px"
                  borderColor="rgba(155, 219, 107, 0.4)"
                  bg="#17181c"
                  flexShrink={0}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    fill
                    sizes="28px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Text fontWeight="600" fontSize="sm">
                  {t("เมนูนำทาง", "Navigation")}
                </Text>
              </HStack>
              <DrawerCloseTrigger asChild>
                <IconButton aria-label="Close menu" variant="ghost" size="sm" color="#9ca3af">
                  <X size={18} />
                </IconButton>
              </DrawerCloseTrigger>
            </Flex>
          </DrawerHeader>

          <DrawerBody py={6}>
            <VStack align="stretch" gap={3}>
              {/* Language Switcher inside Drawer */}
              <Box mb={2}>
                <Text fontSize="xs" color="#9ca3af" mb={2}>
                  {t("เลือกภาษา / Language", "Select Language")}
                </Text>
                <HStack
                  gap={1}
                  bg="rgba(255, 255, 255, 0.04)"
                  p="3px"
                  rounded="lg"
                  borderWidth="1px"
                  borderColor="rgba(255, 255, 255, 0.08)"
                >
                  <Button
                    flex={1}
                    size="sm"
                    h="30px"
                    rounded="md"
                    fontSize="xs"
                    fontWeight={language === "en" ? "700" : "400"}
                    bg={language === "en" ? "#9bdb6b" : "transparent"}
                    color={language === "en" ? "#0a0a0c" : "#9ca3af"}
                    onClick={() => setLanguage("en")}
                  >
                    English (EN)
                  </Button>
                  <Button
                    flex={1}
                    size="sm"
                    h="30px"
                    rounded="md"
                    fontSize="xs"
                    fontWeight={language === "th" ? "700" : "400"}
                    bg={language === "th" ? "#9bdb6b" : "transparent"}
                    color={language === "th" ? "#0a0a0c" : "#9ca3af"}
                    onClick={() => setLanguage("th")}
                  >
                    ไทย (TH)
                  </Button>
                </HStack>
              </Box>

              <Box my={1} h="1px" bg="rgba(255, 255, 255, 0.08)" />

              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{ textDecoration: "none" }}
                  >
                    <Flex
                      alignItems="center"
                      gap={3}
                      p={3}
                      rounded="xl"
                      bg={isActive ? "rgba(155, 219, 107, 0.12)" : "rgba(255, 255, 255, 0.02)"}
                      borderWidth="1px"
                      borderColor={isActive ? "rgba(155, 219, 107, 0.3)" : "transparent"}
                      color={isActive ? "#9bdb6b" : "#e5e7eb"}
                      _hover={{
                        bg: "rgba(155, 219, 107, 0.08)",
                        color: "#9bdb6b",
                      }}
                    >
                      <Icon size={18} />
                      <Text fontWeight={isActive ? "600" : "500"} fontSize="sm">
                        {link.label}
                      </Text>
                    </Flex>
                  </Link>
                );
              })}


            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
}
