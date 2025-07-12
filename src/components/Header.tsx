
import { HeaderProps } from "@/types/index.types";

import Image from "next/image";

import { dropdown1, notification, search } from "@/assets/icons";
import { profilePic } from "@/assets/images";


export default function Header ({ showFullSidebar, expandSidebar, collapseSidebar }: HeaderProps) {
    function toggleSidebarLayout() {
        if(showFullSidebar) collapseSidebar();
        else expandSidebar();
    }

    return (
        <header className="header">
            <div className="left-container">
                <a href="#">
                    <Image src="/logo.svg" alt="Lendsqr logo" width={200} height={30} className="logo" />
                </a>
            </div>
            <div className="right-container">
                <form className="search">
                    <input type="text" className="font-avenir" placeholder="Search for anything" />
                    <button>
                        <Image src={search} alt="Search icon" width={40} height={14} className="search-icon" />
                    </button>
                </form>
                <div className="header-actions">
                    <div className="docs-notification-profile">
                        <a href="#" className="font-roboto">Docs</a>
                        <button className="toggle-notification-btn">
                            <Image src={notification} alt="Notification icon" width={20} height={20} className="notifcation-icon" />
                        </button>
                        <button className="user-profile">
                            <Image src={profilePic} alt="Profile picture" width={48} height={48} className="profile-picture" />
                            <span className="user-name font-work-sans">Adedeji</span>
                            <Image src={dropdown1} alt="Dropdown icon" width={20} height={20} className="dropdown-icon" />
                        </button>
                    </div>
                    <div className="toggle-buttons">
                        <button className="notification-btn">
                            <Image src={notification} alt="Notification icon" width={20} height={20} className="notifcation-icon" />
                        </button>
                        <button onClick={toggleSidebarLayout} className={`${showFullSidebar ? 'active' : ''} toggle-sidebar-btn`}>
                            <span className="line line-1" />
                            <span className="line line-2" />
                            <span className="line line-3" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}