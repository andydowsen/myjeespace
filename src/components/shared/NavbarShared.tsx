"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import fonts from "@/lib/files/fonts";
import Link from "next/link";
import { LuClock1, LuHouse, LuPaperclip } from "react-icons/lu";
import { UserButton, UserProfile, useUser } from "@clerk/nextjs";

export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
};

const LoginUser = () => {
  return (
    <>
      <div className=" flex flex-row px- rounded-full border-1 p-1  border-gray-300 cursor-pointer">
        <UserButton
        component="div"
          appearance={{
            elements: {
              avatarBox: {
                width: 40,
                height: 40,
              },
              userButtonBox: {
                padding: 0,
              },
              userButtonContent: {
                padding: 0,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NavbarShared = () => {
  const navigationLinks = [
    {
      key: 1,
      name: "Home",
      href: "/",
      icon: <LuHouse />,
    },
    {
      key: 2,
      name: "Your timers",
      href: "/preparation-bucket/timers",
      icon: <LuClock1 />,
    },
    {
      key: 3,

      name: "Test analysis",
      href: "/preparation-bucket/test-analysis",
      icon: <LuPaperclip />,
    },
    {
      key: 4,
      name: "Got exhausted 😩.?",
      href: "/preparation-bucket/got-exhausted",
      icon: "",
    },
  ];
  return (
    <>
      <Navbar
        className={`absolute top-4 left-0 w-[70%] rounded-full border-gray-200/70  border-1  m-auto ${fonts.inter.className} text-sm`}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ANIVO</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ANIVO</p>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4 m-auto text-center items-center justify-center"
          justify="center"
        >
          {navigationLinks.map((items) => {
            return (
              <div key={items.key}>
                <NavbarItem className=" text-sm font-semibold">
                  <Link
                    className="flex flex-row gap-2 text-center items-center justifyt-center"
                    href={items.href}
                  >
                    {items.name} <span>{items.icon}</span>
                  </Link>
                </NavbarItem>
              </div>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <LoginUser />
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavbarShared;
