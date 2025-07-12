"use client";

import { User } from "@/types/user.types";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import FetchError from "./FetchError";
import Loading from "./Loading";
import UserDetailsHeader from "./UserDetailsHeader";
import UserInformations from "./UserInformations";
import Heading from "./Heading";
import MockPagination from "./MockPagination";

import { getSingleUser } from "@/helpers/db";


export default function UserDetailsContainer() {
    const { id: userId } = useParams<{ id: string }>();
    const [{ loading, error }, setFetchState] = useState({ loading: true, error: false });
    const [user, setUser] = useState<User|null>(null);

    useEffect(() => {
        setFetchState((prev) => ({ ...prev, loading: true }));

        getSingleUser(userId)
            .then((result) => {
                if(!result) setFetchState((prev) => ({ ...prev, error: true }));
                else setUser(result);
            })
            .catch(() => setFetchState((prev) => ({ ...prev, error: true })))
            .finally(() => setFetchState((prev) => ({ ...prev, loading: false })));
    }, []);

    if(loading) return <Loading />;
    else if (error) return <FetchError title="Uh Oh!" description="Could not fetch user details" />;
    return (
        <div className="main-content">
            <section className="heading-and-actions">
                <Heading>User Details</Heading>
                <div className="actions">
                    <button className="action-btn blacklist-user">
                        <span className="font-work-sans">Blacklist user</span>
                    </button>
                    <button className="action-btn activate-user">
                        <span className="font-work-sans">Activate user</span>
                    </button>
                </div>
            </section>
            <section className="bottom-content">
                <UserDetailsHeader user={user} />
                <UserInformations user={user} />
            </section>
            <MockPagination />
        </div>
    )
}