import { NavGroupProps } from "@/types/index.types";

import Image from "next/image";
import Link from "next/link";

export default function NavGroup({ title, subLinks }: NavGroupProps) {

    return (
        <div className="nav-link-group">
            { 
                title ? 
                    <h4>{title}</h4> : 
                    null
            }
            <ul>
                {
                    subLinks.map((subLink) => (
                        <li key={subLink.title} className="nav-link-container">
                            <Link href={subLink.href} className={`${subLink.title === 'Users' ? 'active' : ''} nav-link`}>
                                <Image src={subLink.icon} alt={`${subLink.title} icon`} width={16} height={16} className="nav-link-icon" />
                                <span>{subLink.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}