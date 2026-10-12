import MotionProvider from "@/components/MotionProvider";
import { PostHogPageViewTracker } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TranslationProvider } from "@/contexts/TranslationContext";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./identity.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yanis Axel Dabo",
  description: "Software engineer working across backend systems, platform engineering, DevSecOps, and applied AI from Ouagadougou, Burkina Faso.",
  keywords: "Yanis Axel Dabo, Software Engineer, Backend Engineering, Platform Engineering, DevSecOps, Applied AI, Burkina Faso",
  authors: [{ name: "Ragnang-Newende Yanis Axel DABO" }],
  openGraph: {
    title: "Yanis Axel Dabo",
    description: "Backend systems, platform engineering, DevSecOps, and applied AI from Ouagadougou, Burkina Faso.",
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
