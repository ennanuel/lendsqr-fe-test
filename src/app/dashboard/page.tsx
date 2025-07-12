
import { Metadata } from "next";

import DashboardStats from "@/components/DashboardStats";
import Heading from "@/components/Heading";
import Users from "@/components/Users";

import "@/styling/dashboard.scss";

export const metadata: Metadata = {
  title: 'Dashboard Overview',
  description: 'Your personal dashboard with key metrics.',
};

export default function Dashboard() {

    return (
        <div className="content">
            <Heading>Users</Heading>
            <DashboardStats />
            <Users />
        </div>
    )
}