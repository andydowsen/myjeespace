import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import fonts from '../lib/files/fonts'
import NavbarShared from "@/components/shared/NavbarShared";

export const metadata: Metadata = {
  title: "💫 | Anshu's JEE prep space",
  description: "For anshu naagar, and his friends and colleagues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`antialiased`}>
        <div className={`${fonts.atkinson.className} font-medium  `}>
          <NavbarShared />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
