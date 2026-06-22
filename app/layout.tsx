import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import Background from "@/components/three/Background";
import { profile } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Pankaj Kumar — Full-stack developer & CSE student at NIT Durgapur. I build fast, polished web products and explore AI/ML and Data Science.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pankaj.dev"),
  title: {
    default: `${profile.name} — Full-Stack Developer`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Pankaj Kumar",
    "Full-Stack Developer",
    "NIT Durgapur",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} — Full-Stack Developer`,
    description,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full-Stack Developer`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-[#050505] text-foreground">
        {/* Ambient blue/purple glow + grid texture */}
        <div className="ambient pointer-events-none fixed inset-0 -z-10" />
        <div className="grid-fade pointer-events-none fixed inset-0 -z-10" />
        {/* Lazy WebGL starfield + floating gem */}
        <Background />
        {/* Custom cursor (pointer:fine only) */}
        <CursorFollower />
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
