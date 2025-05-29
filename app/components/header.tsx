"use client";
import React from "react";
import Combo from "@/app/assets/combo";
import {
  FiSidebar,
  FiStar,
  FiSun,
  FiClock,
  FiBell,
  FiSearch,
} from "react-icons/fi";
type HeaderProps = {
  toggleSidebar: () => void;
};

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#f6f6f6]  w-full">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <button
          className="hidden lg:flex md:flex p-2 rounded hover:bg-[#ebebec] hover:rounded-[20px]"
          onClick={toggleSidebar}
        >
          <FiSidebar size={24} />
        </button>
        <button className=" hidden lg:flex md:flex p-2 rounded hover:bg-[#ebebec] hover:rounded-[20px]">
          <Combo.Star className=" text-gray-400" />
        </button>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">Dashboards</span>
          <span className="text-gray-400">/</span>
          <span className="font-medium text-black">Overview</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="hidden lg:flex md:flex pl-8 pr-6 h-[36px] py-1.5 rounded-full bg-[#eeeeee] text-sm outline-none placeholder:text-gray-400"
          />
          <FiSearch
            size={14}
            className="md:absolute top-1/2 left-3  md:-translate-y-1/2 text-gray-400 relative"
          />
          <kbd className="hidden lg:flex md:flex absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">
            /
          </kbd>
        </div>

        {/* Icons */}
        <button className="hidden lg:flex md:flex p-2 rounded hover:bg-[#ebebec] hover:rounded-[20px]">
          <FiSun size={24} />
        </button>
        <button className="hidden lg:flex md:flex p-2 rounded hover:bg-[#ebebec] hover:rounded-[20px]">
          <FiClock size={24} />
        </button>
        <button className="hidden lg:flex md:flex p-2 rounded hover:bg-[#ebebec] hover:rounded-[20px]">
          <FiBell size={24} />
        </button>
        <button
          className="flex lg:hidden md:hidden p-2 rounded hover:bg-[#ebebec] hover:rounded-[20px]"
          onClick={toggleSidebar}
        >
          <FiSidebar size={24} />
        </button>
      </div>
    </header>
  );
}
