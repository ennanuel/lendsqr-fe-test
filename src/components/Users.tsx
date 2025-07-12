"use client";


import { UserFetchState } from "@/types/user.types";

import { useEffect, useMemo, useState } from "react";

import Filter from "./Filter";
import Pagination from "./Pagination";
import UsersTable from "./UsersTable";
import Loading from "./Loading";
import FetchError from "./FetchError";

import { clearAllUsers, storeUsersArray } from "@/helpers/db";
import { fetchUsers } from "@/helpers";

const USER_LIMIT = 10;

export default function Users() {
    const [page, setPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    const [{ loading, error, data }, setFetchState] = useState<UserFetchState>({ loading: true, error: false, data: [] });

    const canNext = useMemo(() => (page * USER_LIMIT) < data.length, [data, page]);
    const canPrev = useMemo(() => page > 1, [page]);
    const paginationLength = useMemo(() => Math.ceil(data.length / USER_LIMIT), [data]);
    const users = useMemo(() => data.slice((USER_LIMIT * (page - 1)), (USER_LIMIT * page)), [data, page]);

    function openFilterDialog () {
        setShowFilters(true);
    };
    function closeFilterDialog () {
        setShowFilters(false);
    };

    function nextPage() {
        if(!canNext) return;
        setPage((currentPage) => currentPage + 1);
    };
    function prevPage() {
        if(!canPrev) return;
        setPage((currentPage) => currentPage - 1);
    };
    function selectPage(pageNumber: number) {
        setPage(pageNumber);
    }

    useEffect(() => {
        setFetchState((prev) => ({ ...prev, loading: true }));
        fetchUsers()
            .then((result) => {
                setFetchState((prev) => ({ ...prev, data: result }));
                clearAllUsers()
                    .then(() => storeUsersArray(result));
            })
            .catch(() => setFetchState((prev) => ({ ...prev, error: true })))
            .finally(() => setFetchState((prev) => ({ ...prev, loading: false })));
    }, []);

    if (loading) return <Loading className="block" />;
    else if (error) return <FetchError className="block" />;
    return (
        <div className="users">
            <UsersTable users={users} openFilterDialog={openFilterDialog} />
            <Filter closeFilterDialog={closeFilterDialog} showFilters={showFilters} />
            <Pagination 
                canNext={canNext} 
                canPrev={canPrev} 
                currentPage={page}
                nextPage={nextPage} 
                prevPage={prevPage} 
                selectPage={selectPage} 
                limit={USER_LIMIT} 
                total={data.length} 
                pageLength={paginationLength}
            />
        </div>
    )
};