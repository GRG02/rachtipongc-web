import * as React from "react";
import { notFound } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProjectDetailView } from "../../components/ProjectDetailView";
import { projectsData } from "../../data/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Rachtipong Chaiprab",
    };
  }

  return {
    title: `${project.title} | Rachtipong Chaiprab`,
    description: project.excerpt || project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="#0a0a0c">
      <Navbar />
      <ProjectDetailView project={project} />
      <Footer />
    </Box>
  );
}
