import * as React from "react";
import { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact | Rachtipong Chaiprab",
  description: "Get in touch with Rachtipong Chaiprab for Junior Developer, AI/Cloud TA, and software collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="#0a0a0c">
      <Navbar />
      <Box as="main" flex="1">
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}
