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
  title: "সিএনজি হ্যাসেল: ঢাকা ট্রাফিক ক্রনিকলস | বাংলা ৩ডি গেম",
  description:
    "মিটার চলে না মামা! ঢাকার জ্যাম, ট্রাফিক সার্জেন্টের মামলা আর বড় ভাইয়ের চাঁদার ব্যারিকেড ঠেলে সবুজ সিএনজি চালান। ব্যঙ্গাত্মক বাংলা ৩ডি আর্কেড গেম।",
  keywords: [
    "সিএনজি হ্যাসেল",
    "বাংলা গেম",
    "সিএনজি গেম",
    "ঢাকা ট্রাফিক",
    "চাঁদাবাজি",
    "সার্জেন্ট",
    "Bangla 3D game",
    "CNG auto rickshaw game",
    "Dhaka traffic rush",
    "satire",
  ],
  authors: [{ name: "সিএনজি হ্যাসেল" }],
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
    siteName: "সবজির ট্রাক",
    locale: "bn_BD",
    title: "সবজির ট্রাক — ক্ষেতে ৳২০, বাজারে ৳৫৮। মাঝখানে কে খেলো?",
    description:
      "চাঁদা, টোল আর রেলক্রসিং পেরিয়ে ঢাকায় সবজির ট্রাক চালান। শেষে দেখুন প্রতি কেজিতে কত গেল চাঁদায়।",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "সবজির ট্রাক — রাস্তায় রঙিন ট্রাক, পাশে চাঁদা, সেতু, ট্রেন ও টোলের প্রতীক",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "সবজির ট্রাক — মাঝখানে কে খেলো?",
    description:
      "চাঁদা, টোল আর রেলক্রসিং পেরিয়ে ঢাকায় সবজির ট্রাক চালানোর ব্যঙ্গাত্মক ৩ডি গেম।",
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
