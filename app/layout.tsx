import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { InterFont } from "@/lib/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdifitah Abdulkadir",
  description: "Personal Portfolio website. Next.js Developer.",
  keywords: ["Next.js", "React", "TypeScript", "Developer Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${InterFont.variable}  antialiased`}>
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
