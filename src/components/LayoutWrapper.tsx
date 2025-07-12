"use client";

import { LayoutWrapperProps } from "@/types/index.types";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const pathname = usePathname();
    const [showFullSidebar, setShowFullSidebar] = useState(false);

  function expandSidebar() {
    setShowFullSidebar(true);
  };
  
  function collapseSidebar() {
    setShowFullSidebar(false);
  };

  if(pathname.includes('sign-in')) {
    return children;
  }
  else return (
    <div className="body font-work-sans">
        <Header showFullSidebar={showFullSidebar} expandSidebar={expandSidebar} collapseSidebar={collapseSidebar} />
        <div className="sidebar-content-container">
            <Sidebar showFullSidebar={showFullSidebar} />
            {children}
        </div>
    </div>
  )
}