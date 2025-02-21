"use client";

import { Badge } from "@/components/ui/badge";
import fonts from "@/lib/files/fonts";
import { useUser } from "@clerk/nextjs";
import { Avatar } from "@heroui/react";
import { LuSettings } from "react-icons/lu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Input,
  Checkbox,
  Link,
} from "@heroui/react";
import React from "react";



const SettingsOffCanvas =()=>{
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const backdrops = ["opaque", "blur", "transparent"];

  const handleBackdropChange = (backdrop: React.SetStateAction<string>) => {
    setBackdrop(backdrop);
    onOpen();
  };


  return(
    <>

    </>
  )
}

export default function Page() {
  const user = useUser();
  return (
    <>
      {user.isLoaded && (
        <div className="landing-section w-full h-screen ">
          <div className="flex flex-row items-center justify-between px-12  relative">
            <div>
              <h1
                className={`${fonts.raleway.className} scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl `}
              >
                {" "}
                Bella Ciao, {user.user?.firstName} {user.user?.lastName}
              </h1>
              <div className="flex gap-4 mt-2">
                <Badge>Engineering+</Badge>
                <Badge variant={"outline"}>Joint entrance exam (JEE)</Badge>
                <Badge variant={"destructive"}>2026 attempt</Badge>
                <SettingsOffCanvas />
              </div>
            </div>

            <Avatar imgProps={{ src: user.user?.imageUrl }} size="lg" />
          </div>

          <div className="graphs-section"></div>
        </div>
      )}
    </>
  );
}
