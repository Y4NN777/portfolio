import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TranslationProvider } from "@/contexts/TranslationContext";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "TheY4NN, the777th Dev",
  description: "Portfolio of the Y4NN, a curious backend/full-stack developer specializing in modern software engineering, AI engineering.",
  keywords: "Ragnang-Newende Yanis Axel DABO, Backend Developer, GenIA, AgenticAI, Web3, Software Engineer, Systems Engineer, Portfolio, AI Engineering, Secure, performant",
  authors: [{ name: "Ragnang-Newende Yanis Axel DABO" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/the-y4nn.png", type: "image/png" },
    ],
    apple: "/the-y4nn.png",
  },
  openGraph: {
    title: "Ragnang-Newende Yanis Axel DABO - Backend Developer, GenIA & AgenticAI Enthusiast, Web3 Enthusiast, Aspiring Software and Systems Engineer",
    description: "Portfolio site of the Y4NN, a curious developer specializing in secured and performant smart systems building.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            <TranslationProvider>
              {/* <AnimatedBackground /> */}
              {children}
            </TranslationProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
