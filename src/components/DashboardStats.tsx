
import Image from "next/image";

import { DASHBOARD_STATS } from "@/assets/data/dashboardStats";


export default function DashboardStats() {

    return (
        <ul className="dashboard-stats-container">
            {
                DASHBOARD_STATS.map(({ title, icon, stat, color }) => (
                    <li key={title} className="dashboard-stat block">
                        <span className={`dashboard-stat-icon ${color}`}>
                            <Image src={icon} alt={`${title} icon`} width={22} height={22} />
                        </span>
                        <p>
                            <span className="dashboard-stat-title">{title}</span>
                            <span className="dashboard-stat-number">{stat}</span>
                        </p>
                    </li>
                ))
            }
        </ul>
    )
}