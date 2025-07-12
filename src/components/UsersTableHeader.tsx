
import { UserTableHeaderProps } from "@/types/index.types";

import Image from "next/image";

import { filter } from "@/assets/icons";
import { USER_TABLE_HEADERS } from "@/assets/data/user";

export default function UsersTableHeader({ openFilterDialog }: UserTableHeaderProps) {

    return (
        <thead>
            <tr>
                {
                    USER_TABLE_HEADERS.map((headerTitle) => (
                        <th key={headerTitle}>
                            <span>{headerTitle}</span>
                            <button onClick={openFilterDialog}>
                                <Image src={filter} alt="Filter icon" className="filter-icon" width={16} height={16} />
                            </button>
                        </th>
                    ))
                }
                <th className="more-column">
                    <span className="overlay" />
                </th>
            </tr>
        </thead>
    )
}