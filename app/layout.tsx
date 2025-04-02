import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./components.css";
import { cn } from "@/lib/utils";
// import { Navbar } from "@/components/layout/navbar";
import { Header1 } from "@/components/layout/navigation";

import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAAS – Your Trusted Technology Partner",
  description: "RAAS goes beyond software development – we build lasting technology partnerships that drive business success. Innovate, collaborate, and grow with us.",
  keywords: ["RAAS", "technology partner", "software development", "cloud solutions", "enterprise automation", "web development", "mobile app development", "DevOps", "AWS", "Azure", "Next.js", "Angular", ".NET", "Java", "business automation"],
  authors: [{ name: "RAAS – Robust Architecture-neutral Automation Solutions", url: "[your-website.com]" }], // Update with your actual URL
  robots: "index, follow",
  openGraph: {
    title: "RAAS – More Than a Service, A Partnership",
    description: "At RAAS, we don’t just build software – we work with you to create scalable, future-ready solutions that drive real business impact. Let’s innovate together!",
    url: "[your-website.com]", // Update with actual URL
    siteName: "RAAS",
    images: [
      {
        url: "[your-website.com/og-image.jpg]", // Update with actual OG image URL
        width: 1200,
        height: 630,
        alt: "RAAS – Your Trusted Technology Partner",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "RAAS – Your Vision, Our Expertise",
    description: "RAAS partners with businesses to create innovative, scalable, and secure technology solutions. Your success is our success. Let’s build the future together!",
    images: ["[your-website.com/twitter-image.jpg]"], // Update with actual Twitter image URL
    card: "summary_large_image",
  },
  viewport: "width=device-width, initial-scale=1.0",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}

          <Header1/>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
