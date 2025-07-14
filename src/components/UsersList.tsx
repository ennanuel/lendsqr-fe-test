"use client";

import { UsersListProps } from "@/types/index.types";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import UserOptions from "./UserOptions";

import { changeDateFormat } from "@/helpers";

export default function UsersList({ users }: UsersListProps) {
    const router = useRouter();
    const pathname = usePathname();

    const optionsContainerRef = useRef<HTMLUListElement>(null);
    const [idOfUserOptionToShow, setIdOfUserOptionToShow] = useState<string | null>(null);
    
    function openOptionsModal(userId: string) {
        setIdOfUserOptionToShow(userId);
    };
    function closeOptionsModal() {
        setIdOfUserOptionToShow(null);
    };
    function navigateToUser(userId: string) {
        router.push(`/user/${userId}`);
    };

    const handleModalClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        if (!optionsContainerRef.current || idOfUserOptionToShow === null) return;

        const containerRect = optionsContainerRef.current.getBoundingClientRect();
        const clickedOutsideModalRange = event.clientX < containerRect.left ||
            event.clientX > (containerRect.left + containerRect.width) || 
            event.clientY < containerRect.top || 
            event.clientY > (containerRect.top + containerRect.height);

        if (clickedOutsideModalRange) closeOptionsModal();
    };

    useEffect(() => {
        if (!users.length) return;
        if (pathname.includes('/users')) {
            const userIdToDisplayOption = users[1]?._id || users[0]?._id;
            setIdOfUserOptionToShow(userIdToDisplayOption);
        };
    }, [pathname, users]);

    return (
        <tbody>
            {
                users.map(({ _id, organization, firstName, lastName, email, phone, dateJoined, status }) => (
                    <tr key={email}>
                        <td onClick={() => navigateToUser(_id)}>{organization}</td>
                        <td onClick={() => navigateToUser(_id)}>{firstName} {lastName}</td>
                        <td onClick={() => navigateToUser(_id)}>{email}</td>
                        <td onClick={() => navigateToUser(_id)}>{phone}</td>
                        <td onClick={() => navigateToUser(_id)}>{changeDateFormat(dateJoined)}</td>
                        <td onClick={() => navigateToUser(_id)}>
                            <span className={`user-status ${status.toLowerCase()}`}>{status.toLowerCase()}</span>
                        </td>
                        <td className={`more-column ${_id === idOfUserOptionToShow ? 'active' : ''}`}>
                            <UserOptions
                                id={_id}
                                idOfUserOptionToShow={idOfUserOptionToShow}
                                openOptionsModal={openOptionsModal}
                                handleModalClick={handleModalClick} 
                                optionsContainerRef={optionsContainerRef}
                            />
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
};