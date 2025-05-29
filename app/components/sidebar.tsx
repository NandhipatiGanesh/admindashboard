"use client";
import React, { useState, useEffect } from "react";
import Combo from "../assets/combo";
import navItems from "./navItems";
import { usePathname } from "next/navigation";
import Avatar from "@/app/components/Avatar";

type SidebarProps = {
  isOpen?: boolean;
};

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  const [open, setOpen] = useState(isOpen);
  const [home, setHome] = useState(false);
  useEffect(() => {
    setHome(pathname === "/");
  }, [pathname]);

  return (
    // <div
    //   className={` hidden lg:flex md:flex h-screen flex-col justify-between items-center p-[20px] transition-all duration-300 ${
    //     isOpen ? "w-[230px]" : "w-[100px] "
    //   }`}
    // >
    <div
      className={`
        ${isOpen ? "flex" : "hidden"} 
        md:flex
        fixed md:relative top-0 left-0 z-50
        bg-white
        h-screen flex-col justify-between items-center
        p-[20px] transition-all duration-300
        ${isOpen ? "w-[230px]" : "w-[100px]"}
      `}
    >
      <div className="w-full">
        <div className="sidebar-header pl-[12px] pt-[8px] pr-[8px] pb-[16px] gap-2 flex items-center mb-4 ">
          <div className="flex w-[32px] h-[32px] gap-2 items-center justify-center cursor-pointer">
            <Combo.Logo />
          </div>
          {isOpen && (
            <h3
              className={`text-lg font-bold `}
              style={{ letterSpacing: "0.3px" }}
            >
              thefallen
            </h3>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <div
                key={index}
                className={`p-[12px] gap-3 flex items-center transition-300 ease-in-out hover:bg-[#ebebec] hover:rounded-[20px] cursor-pointer ${
                  isActive ? "bg-[#ebebec] rounded-[20px]" : ""
                }`}
              >
                <div className="flex w-[32px] h-[32px] gap-2 items-center justify-center cursor-pointer">
                  {item.icon}
                </div>
                {isOpen && (
                  <h3
                    className="text-sm font-medium"
                    style={{ letterSpacing: "0.3px" }}
                  >
                    {item.label}
                  </h3>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="sidebar-footer  p-[16px] gap-3 flex items-center mt-4 hover:bg-[#ebebec]  hover:rounded-[20px]">
        <div className="flex w-[32px] h-[32px] gap-2 items-center justify-center cursor-pointer">
          <Avatar />
        </div>
        {isOpen && (
          <h3
            className={`text-lg font-bold `}
            style={{ letterSpacing: "0.3px" }}
          >
            Admin
          </h3>
        )}
      </div>
    </div>
  );
}
