import { notFound } from "next/navigation";
import ProjectDetail from "@/components/editorial/ProjectDetail";
import { projectEntries } from "@/lib/projects";

export function generateStaticParams() {
  return projectEntries.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectEntries.find((item) => item.slug === slug);
  if (!project) notFound();
  return <ProjectDetail projectId={project.id} />;
}
