import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import UserDetailsContainer from "@/components/UserDetailsContainer";

import { backArrow } from "@/assets/icons";

import "@/styling/user.scss";

export const metadata: Metadata = {
  title: 'User Details',
  description: 'Details of the user.',
};

export default function User() {

    return (
        <div className="user-page content">
            <Link href="/users" className="back-navigation">
                <Image src={backArrow} width={30} height={30} alt="Back arrow icon" className="back-icon" />
                <span>Back to Users</span>
            </Link>
            <UserDetailsContainer />
        </div>
    )
}