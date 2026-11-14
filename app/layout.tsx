import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://jbniyikiza.vercel.app"),
  title: "Jean Baptiste Niyikiza | Smart Manufacturing, Embedded Systems & IoT",
  description:
    "Portfolio of Jean Baptiste Niyikiza, a Smart Manufacturing engineer (MSc, NTU Singapore) working across embedded systems, IoT, PCB design, and 3D/4D printing.",
  openGraph: {
    title: "Jean Baptiste Niyikiza | Smart Manufacturing, Embedded Systems & IoT",
    description:
      "Embedded systems, IoT, PCB design, 3D/4D printing and research by Jean Baptiste Niyikiza.",
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
