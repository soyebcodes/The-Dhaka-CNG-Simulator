import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#1a110b",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chanda-truck.rasel.me"),
  title: "যামু না মামা! (Jamu Na Mama!) — The Dhaka CNG Simulator",
  description:
    "যামু না মামা! মিটার চলে না, উল্টা পথ, গ্যারেজে যামু, বৃষ্টি হইলে ৭ কোটি! ঢাকার জ্যাম, ঢাকা টেসলা, ট্রাফিক সার্জেন্ট ও চাঁদাবাজদের প্যাঁচ ঠেলে সিএনজি চালান। ব্যঙ্গাত্মক বাংলা ৩ডি সিমুলেটর গেম।",
  keywords: [
    "যামু না মামা",
    "Jamu Na Mama",
    "সিএনজি সিমুলেটর",
    "Dhaka CNG Simulator",
    "বাংলা গেম",
    "সিএনজি গেম",
    "ঢাকা ট্রাফিক",
    "ঢাকা টেসলা",
    "চাঁদাবাজি",
    "সার্জেন্ট",
    "Bangla 3D game",
    "CNG auto rickshaw game",
    "Dhaka traffic rush",
    "satire",
  ],
  authors: [{ name: "যামু না মামা!" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "যামু না মামা!",
    locale: "bn_BD",
    title: "যামু না মামা! — The Dhaka CNG Simulator",
    description:
      "মিটার চলে না মামা! ঢাকার জ্যাম, ঢাকা টেসলা আর চাঁদাবাজদের প্যাঁচ ঠেলে সিএনজি চালান। শেষে দেখুন কত জমলো আর কত গেল চাঁদায়।",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "যামু না মামা! — The Dhaka CNG Simulator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "যামু না মামা! — The Dhaka CNG Simulator",
    description:
      "মিটার চলে না মামা! ঢাকার জ্যাম, ঢাকা টেসলা আর চাঁদাবাজদের প্যাঁচ ঠেলে সিএনজি চালানোর ব্যঙ্গাত্মক ৩ডি গেম।",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="bn" dir="ltr" className={hindSiliguri.variable}>
      <body>{children}</body>
    </html>
  );
}
