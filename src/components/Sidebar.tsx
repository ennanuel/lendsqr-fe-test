
import Image from "next/image";

import NavGroup from "./NavGroup";

import { briefcase1, dropdown2, search } from "@/assets/icons";
import { NAV_LINKS } from "@/assets/data/navLinks";
import { profilePic } from "@/assets/images";

import { SidebarProps } from "@/types/index.types";

export default function Sidebar({ showFullSidebar }: SidebarProps) {

    return (
        <div className="sidebar-container">
            <div className={` ${showFullSidebar ? 'expand' : ''} sidebar custom-scrollbar light`}>
                <form className="search">
                    <input type="text" placeholder="Search for anything" />
                    <button className="search-btn">
                        <Image src={search} alt="Search icon" width={40} height={40} className="search-icon" />
                    </button>
                </form>
                <button className="switch-org-btn">
                    <Image src={briefcase1} alt="Briefcase icon" width={16} height={16} className="briefcase-icon" />
                    <span className="font-work-sans">Switch organization</span>
                    <Image src={dropdown2} alt="Dropdown icon" width={14} height={14} className="dropdown-icon" />
                </button>
                <nav className="nav-links">
                    {
                        NAV_LINKS.map((navGroup, index) => (
                            <NavGroup {...navGroup} key={index} />
                        ))
                    }
                </nav>
                <div className="docs-and-profile">
                    <button className="user-profile">
                        <Image src={profilePic} alt="Profile picture" width={48} height={48} className="profile-picture" />
                        <span className="user-name font-work-sans">Adedeji</span>
                    </button>
                    <a href="#" className="docs-link">Docs</a>
                </div>
            </div>
        </div>
    )
}