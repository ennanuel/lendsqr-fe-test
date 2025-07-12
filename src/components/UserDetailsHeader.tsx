
import { UserProps } from "@/types/index.types";

import UserNavigationHeader from "./UserNavigationHeader";
import UserDetails from "./UserDetails";

export default function UserDetailsHeader({ user }: UserProps) {
    if(!user) return null;

    return (
        <section className="user-details-header block">
            <UserDetails user={user} />
            <UserNavigationHeader />
        </section>
    )
}