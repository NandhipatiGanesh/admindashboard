"use client";

import { useState } from "react";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <section className="flex h-screen w-full">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex flex-col w-full p-[20px]">
        <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <section className="overflow-y-scroll h-full">{children}</section>
      </div>
    </section>
  );
}
