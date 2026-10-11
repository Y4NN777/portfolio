import MotionProvider from "@/components/MotionProvider";
import { PostHogPageViewTracker } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TranslationProvider } from "@/contexts/TranslationContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yanis Axel Dabo — Software Engineer",
  description: "Software engineer working across backend systems, developer platforms, and applied AI from Ouagadougou, Burkina Faso.",
  keywords: "Yanis Axel Dabo, Software Engineer, Backend Engineering, Platform Engineering, Applied AI, Burkina Faso",
  authors: [{ name: "Ragnang-Newende Yanis Axel DABO" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/the-y4nn.png", type: "image/png" },
    ],
    apple: "/the-y4nn.png",
  },
  openGraph: {
    title: "Yanis Axel Dabo — Software Engineer",
    description: "Backend systems, developer platforms, and applied AI designed and built from Ouagadougou, Burkina Faso.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
