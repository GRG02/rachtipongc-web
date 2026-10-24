import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const promptFont = Prompt({
  variable: "--font-prompt",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachtipong Chaiprab | Junior Developer & AI/Cloud TA",
  description: "Personal portfolio and teaching journey of Rachtipong Chaiprab (GPA 3.92, First Class Honors). Junior Developer & AI/Cloud Teaching Assistant experienced with Next.js, React, Flutter, Microsoft 365, and Power Platform.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/images/logo.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/images/logo.png?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${promptFont.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#0a0a0c] text-[#f4f4f6] antialiased selection:bg-[#9bdb6b] selection:text-black"
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
