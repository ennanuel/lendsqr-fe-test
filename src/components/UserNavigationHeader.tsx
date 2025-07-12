
import Link from "next/link";
import { USER_NAV_LINKS } from "@/assets/data/user";

export default function UserNavigationHeader() {

    return (
        <ul className="header-navigation">
            {
                USER_NAV_LINKS.map(({ title, href, isActive }) => (
                    <li key={title}>
                        <Link href={href} className={`${isActive ? 'active' : ''} user-nav-link`}>
                            <span className="font-sf-compact-text">{title}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}