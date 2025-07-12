
import { UsersTableProps } from "@/types/index.types";

import UsersTableHeader from "./UsersTableHeader";
import UsersList from './UsersList';

export default function UsersTable({ users, openFilterDialog }: UsersTableProps) {

    return (
        <div className="users-table-container block">
            <table className="users-table">
                <UsersTableHeader openFilterDialog={openFilterDialog} />
                <UsersList users={users} />
            </table>
        </div>
    )
}