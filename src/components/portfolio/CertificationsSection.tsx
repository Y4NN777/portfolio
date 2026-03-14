"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

type Certificate = {
  title: string;
  provider: string;
  platform: string;
  issued: string;
  credentialId: string;
  skills: string[];
  providerIcon: string;
  platformIcon: string;
  color: string;
  certificatePreview: string;
  providerIconSize: number;
  platformIconSize: number;
};

const certifications: Certificate[] = [
  {
    title: "Introduction to Software Engineering",
    provider: "IBM",
    platform: "Coursera",
    issued: "April 2025",
    credentialId: "VPSTH0HNBPKH",
    skills: ["Software Engineering", "SDLC Fundamentals", "Problem Solving"],
    providerIcon: "lineicons:ibm",
    platformIcon: "logos:coursera",
    color: "from-[#1f4d67] to-[#53c0fb]",
    certificatePreview: "/certificates/y4nn-certificate/Coursera-Software-Engineering-1.png",
    providerIconSize: 34,
    platformIconSize: 88
  },
  {
    title: "Git, GitHub & Markdown Crash Course",
    provider: "SDE Arts by Ahmed EL Mohandes",
    platform: "Udemy",
    issued: "March 2025",
    credentialId: "UC-lf09335b-eb54-4a6b-9068-18f1277b1e17",
    skills: ["Git", "GitHub", "Markdown", "Collaboration"],
    providerIcon: "simple-icons:github",
    platformIcon: "logos:udemy",
    color: "from-[#0f2d40] to-[#296b8d]",
    certificatePreview: "/certificates/y4nn-certificate/git-github-udemy4.jpg",
    providerIconSize: 36,
    platformIconSize: 82
  },
  {
    title: "Java Foundations: Mastering the Basics",
    provider: "Meta Brains",
    platform: "Udemy",
    issued: "November 2024",
    credentialId: "UC-99f8e4bd-671b-443d-ace5-2508fa789123",
    skills: ["Java", "Object-Oriented Programming", "Algorithms"],
    providerIcon: "logos:java",
    platformIcon: "logos:udemy",
    color: "from-[#296b8d] to-[#4bbcff]",
    certificatePreview: "/certificates/y4nn-certificate/java-certificate-udemy.jpg",
    providerIconSize: 30,
    platformIconSize: 82
  },
  {
    title: "JavaScript Fundamentals to Advanced: Full Stack Development",
    provider: "Sayman Creative Institute",
    platform: "Udemy",
    issued: "July 2025",
    credentialId: "UC-5b7673c6-bd61-4fc0-be96-e29d3c08b249",
    skills: ["JavaScript", "Full-Stack Development", "Frontend Engineering"],
    providerIcon: "logos:javascript",
    platformIcon: "logos:udemy",
    color: "from-[#1f4d67] to-[#62b6e2]",
    certificatePreview: "/certificates/y4nn-certificate/js-udemy.jpg",
    providerIconSize: 34,
    platformIconSize: 82
  },
  {
    title: "Python Fundamentals for Beginners",
    provider: "Great Learning Academy",
    platform: "Great Learning",
    issued: "June 2024",
    credentialId: "UBUNUEXK",
    skills: ["Python", "Foundations", "Problem Solving"],
    providerIcon: "logos:python",
    platformIcon: "simple-icons:googleclassroom",
    color: "from-[#0f2d40] to-[#53c0fb]",
    certificatePreview: "/certificates/y4nn-certificate/Python Fundammentals Completion Certificate-1.png",
    providerIconSize: 34,
    platformIconSize: 50
  },
  {
    title: "Introduction to Graphic Design; Basics of UI/UX",
    provider: "Simplilearn SkillUp",
    platform: "Simplilearn",
    issued: "May 2025",
    credentialId: "8329258",
    skills: ["UI/UX", "Graphic Design", "Creative Thinking"],
    providerIcon: "simple-icons:simplilearn",
    platformIcon: "simple-icons:simplilearn",
    color: "from-[#296b8d] to-[#53c0fb]",
    certificatePreview: "/certificates/y4nn-certificate/ui-ux-simplilearn-1.png",
    providerIconSize: 34,
    platformIconSize: 82
  },
];

export default function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10], x: [-5, 5, -5],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.section
        id="certifications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-20 right-16 w-32 h-32 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(83,192,251,0.2) 0%, rgba(41,107,141,0.1) 100%)" }}
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute bottom-16 left-16 w-48 h-48 rounded-full blur-2xl"
            style={{ animationDelay: "3s", background: "radial-gradient(circle, rgba(75,188,255,0.15) 0%, rgba(83,192,251,0.08) 100%)" }}
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full blur-xl"
            style={{ animationDelay: "6s", background: "radial-gradient(circle, rgba(41,107,141,0.15) 0%, transparent 100%)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(83,192,251,0.04) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10">
          <SectionHeader
            tagText="Professional Credentials"
            tagIcon="solar:verified-check-bold"
            heading="Certifications"
            description="Professional certifications and credentials that validate my expertise in modern technologies and development practices."
            showUnderline={false}
            centered={true}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group h-full"
              >
                <div
                  className="h-full backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 bg-white/75 dark:bg-[#0f2d40]/90"
                  style={{ border: "1px solid rgba(83, 192, 251, 0.15)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.15)";
                  }}
                >
                  {/* Header */}
                  <div className={`h-20 flex items-center justify-between bg-gradient-to-r ${cert.color} px-4 relative overflow-hidden`}>
                    <div className="flex items-center justify-end mr-4 gap-1">
                      <Icon icon={cert.providerIcon} className="" width={cert.providerIconSize} height={cert.providerIconSize} />
                      <span className="text-white text-sm font-bold">×</span>
                      <Icon icon={cert.platformIcon} className="" width={cert.platformIconSize} height={cert.platformIconSize} />
                    </div>
                    <div className="flex items-center justify-start gap-0">
                      <div className="relative w-8 h-8 rounded-lg flex items-center justify-center">
                        <div className="absolute top-1/5 left-1/4 w-1/2 h-1/2 bg-white rounded-lg -z-0"></div>
                        <Icon icon="solar:verified-check-bold" style={{ color: "#53c0fb" }} className="z-10" width={26} height={26} />
                      </div>
                      <span style={{ color: "#53c0fb" }} className="text-sm font-medium">Verified</span>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    {/* Decorative dots */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse" style={{ background: "rgba(83,192,251,0.3)" }}></div>
                    <div className="absolute top-6 right-8 w-1 h-1 rounded-full animate-pulse delay-500" style={{ background: "rgba(75,188,255,0.35)" }}></div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Provider Info */}
                    <div
                      className="space-y-3 mb-6 rounded-xl p-4"
                      style={{ background: "rgba(83, 192, 251, 0.05)", border: "1px solid rgba(83, 192, 251, 0.1)" }}
                    >
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #296b8d, #53c0fb)" }}>
                          <Icon icon="solar:buildings-2-bold" className="text-white" width={12} height={12} />
                        </div>
                        <span className="text-[#296b8d] dark:text-[#94a3b8] font-medium">Provider:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{cert.provider}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1f4d67, #296b8d)" }}>
                          <Icon icon="solar:monitor-smartphone-bold" className="text-white" width={12} height={12} />
                        </div>
                        <span className="text-[#296b8d] dark:text-[#94a3b8] font-medium">Platform:</span>
                        <span className="font-semibold" style={{ color: "#53c0fb" }}>{cert.platform}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0f2d40, #1f4d67)" }}>
                          <Icon icon="solar:calendar-bold" className="text-white" width={12} height={12} />
                        </div>
                        <span className="text-[#296b8d] dark:text-[#94a3b8] font-medium">Issued:</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{cert.issued}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #296b8d, #53c0fb)" }}>
                          <Icon icon="solar:star-bold" className="text-white" width={10} height={10} />
                        </div>
                        <h4 className="text-xs font-bold text-[#296b8d] dark:text-[#62b6e2] uppercase tracking-wide">
                          Skills Validated
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium cursor-default shadow-sm transition-all duration-300"
                            style={{
                              background: "rgba(83, 192, 251, 0.07)",
                              border: "1px solid rgba(83, 192, 251, 0.15)",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.background = "rgba(83, 192, 251, 0.15)";
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.35)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.background = "rgba(83, 192, 251, 0.07)";
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.15)";
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(83, 192, 251, 0.12)" }}>
                      <Link href={``} target="_blank">
                        <div className="flex items-center gap-2">
                          <Icon icon="solar:arrow-right-up-bold" style={{ color: "#53c0fb" }} width={14} height={14} />
                          <span className="text-xs text-[#296b8d] dark:text-[#94a3b8] font-medium">
                            ID: <span className="text-gray-700 dark:text-gray-300 font-mono">{cert.credentialId}</span>
                          </span>
                          <Icon icon="solar:link-bold" className="text-[#296b8d]" width={14} height={14} />
                        </div>
                      </Link>
                      <button
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
                        style={{
                          background: "rgba(83, 192, 251, 0.08)",
                          border: "1px solid rgba(83, 192, 251, 0.2)",
                          color: "#53c0fb",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(83, 192, 251, 0.18)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(83, 192, 251, 0.08)";
                        }}
                        onClick={() => setSelectedCertificate(cert)}
                      >
                        <Icon icon="solar:eye-bold" width={12} height={12} />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16 px-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="inline-flex items-center gap-6 px-8 py-4 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              style={{
                background: "rgba(83, 192, 251, 0.07)",
                border: "1px solid rgba(83, 192, 251, 0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl shadow-md" style={{ background: "linear-gradient(135deg, #296b8d, #53c0fb)" }}>
                  <Icon icon="solar:star-outline" className="text-white" width={18} height={18} />
                </div>
                <span style={{ color: "#53c0fb" }} className="text-sm md:text-base font-semibold">
                  6 Professional & Educative Certifications
                </span>
              </div>
              <div className="w-px h-6" style={{ background: "rgba(83, 192, 251, 0.3)" }}></div>
              <div className="flex items-center gap-3">
                <Icon icon="solar:verified-check-bold" style={{ color: "#53c0fb" }} width={22} height={22} />
                <span className="text-[#296b8d] dark:text-[#94a3b8] text-sm md:text-base font-medium">
                  Verified by Industry Leaders
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden relative"
              style={{
                background: "rgba(240, 247, 255, 0.95)",
                border: "1px solid rgba(83, 192, 251, 0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6" style={{ borderBottom: "1px solid rgba(83, 192, 251, 0.15)" }}>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-[#296b8d] dark:text-[#94a3b8] text-sm md:text-base">
                    {selectedCertificate.provider} • {selectedCertificate.issued}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCertificate(null)}
                  className="p-3 rounded-xl transition-all duration-300"
                  style={{ border: "1px solid rgba(83, 192, 251, 0.2)" }}
                >
                  <Icon icon="solar:close-outline" style={{ color: "#296b8d" }} width={20} height={20} />
                </motion.button>
              </div>

              {/* Certificate Image */}
              <div className="p-6 flex justify-center" style={{ background: "rgba(83, 192, 251, 0.04)" }}>
                <div className="relative max-w-full max-h-[60vh] overflow-hidden shadow-lg" style={{ border: "1px solid rgba(83, 192, 251, 0.15)" }}>
                  <Image
                    src={selectedCertificate.certificatePreview || ""}
                    alt={selectedCertificate.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6" style={{ borderTop: "1px solid rgba(83, 192, 251, 0.15)" }}>
                <div className="text-sm text-[#296b8d] dark:text-[#94a3b8] font-medium">
                  Credential ID: <span className="text-gray-800 dark:text-gray-200">{selectedCertificate.credentialId}</span>
                </div>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCertificate(null)}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-red-500/50"
                  >
                    <Icon icon="solar:close-circle-bold" className="text-white" width={20} height={20} />
                    Close
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedCertificate.certificatePreview || ""}
                    download={`${selectedCertificate.title}.png`}
                    className="px-4 py-2 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                    style={{ background: "linear-gradient(135deg, #296b8d, #53c0fb)", border: "1px solid rgba(83,192,251,0.4)" }}
                  >
                    <Icon icon="solar:download-bold" width={16} height={16} />
                    Download
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
