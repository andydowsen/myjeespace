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
        <h1 className="text-2xl font-bold">Sign in to continue</h1>
        <span className="mt-4">
          <SignInButton mode="modal" />
        </span>
        <strong className="text-sm my-4 italic">
          I know it's a basic page, but go with it for now. 😷
        </strong>
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
