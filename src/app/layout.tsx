import MotionProvider from "@/components/MotionProvider";
import { PostHogPageViewTracker } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TranslationProvider } from "@/contexts/TranslationContext";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Y4NN, the777th Dev",
  description: "Portfolio of The Y4NN, a curious backend/full-stack developer specializing in modern software engineering, AI engineering.",
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
    description: "Portfolio site of The Y4NN, a curious developer specializing in secured and performant smart systems building.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans">
        <PostHogPageViewTracker />
        <ThemeProvider>
          <TranslationProvider>
            <MotionProvider>
              {children}
            </MotionProvider>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
