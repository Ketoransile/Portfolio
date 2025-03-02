import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { Spotlight } from "@/components/ui/Spotlight";
import { FaTelegram } from "react-icons/fa";
const items = [
  {
    title: "Home",
    icon: (
      <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "About",
    icon: (
      <FaUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/about",
  },
  {
    title: "Skills",
    icon: (
      <FaCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/skills",
  },
  {
    title: "Projects",
    icon: (
      <FaProjectDiagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
  {
    title: "Testimonials",
    icon: (
      <FaQuoteLeft className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/testimonials",
  },
  {
    title: "Contact",
    icon: (
      <MdOutlineContactPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/contact",
  },
  {
    title: "Telegram",
    icon: (
      <FaTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://t.me/Kehtoran",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Ketoransile",
  },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdi's Portfolio",
  description: "Abdi's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-serif`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          {children}
          <Toaster />
        </ThemeProvider>
        <div className="absolute  flex items-center justify-center  w-full ">
          <FloatingDock
            items={items}
            desktopClassName="z-50 fixed bottom-2"
            mobileClassName="z-50 fixed bottom-2"
          />
        </div>

        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
