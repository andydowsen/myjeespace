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
import ThemeChanger from "@/components/shared/ThemeChanger";
import { LoginForm } from "@/components/shared/loginForm";

export const metadata: Metadata = {
  title: "💫 | Anshu's JEE prep space",
  description: "For anshu naagar, and his friends and colleagues.",
};

const SigninPageComponent = () => {
  return (
    <>
      <div
        className={`${fonts.openSans.className} w-full h-screen flex flex-col text-center  items-center justify-center`}
      >
        <LoginForm />
      </div>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`antialiased`} suppressHydrationWarning>
          <SignedOut>
            <SigninPageComponent />
          </SignedOut>
          <SignedIn>
            <div className={`${fonts.atkinson.className} font-medium  `}>
              <NavbarShared />
              <ThemeChanger />
              <Providers>{children}</Providers>
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
