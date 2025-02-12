import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import fonts from "../lib/files/fonts";
import NavbarShared from "@/components/shared/NavbarShared";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`antialiased`}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div className={`${fonts.atkinson.className} font-medium  `}>
              <NavbarShared />
              <Providers>{children}</Providers>
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
