
import { MouseEventHandler, RefObject } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { User } from "./user.types";

export type LayoutWrapperProps = {
    children: React.ReactNode
};

export type InputProps = {
    inputType: string;
    placeholder: string;
    buttonText?: string;
    buttonAction?: () => void;
    includeButton?: boolean;
};

export type HeaderProps = {
    showFullSidebar: boolean;
    expandSidebar: () => void;
    collapseSidebar: () => void;
};

export type SidebarProps = {
    showFullSidebar: boolean;
};

export type NavGroupProps = {
    title: string | null;
    subLinks: { title: string; href: string; icon: StaticImport }[];
};

export type HeadingProps = {
    children: string;
}

export type FilterProps = {
    showFilters: boolean;
    closeFilterDialog: () => void;
};

export type FilterInputProps = {
    inputId: string;
    inputLabel: string;
    inputType: string;
    placeholder: string;
    includeButton?: boolean;
    icon?: StaticImport;
};

export type UserOptionsProps = {
    openOptionsModal: (userId: string) => void;
    handleModalClick: MouseEventHandler<HTMLDivElement>;
    id: string;
    idOfUserOptionToShow: string | null;
    optionsContainerRef: RefObject<HTMLUListElement | null>
}

export type UserDetailsProps = {
    user: User;
};

export type UserProps = {
    user: User | null;
};

export type UsersProps = {
    users: User[]
};

export type UsersTableProps = {
    users: User[];
    openFilterDialog: () => void;
};

export type UserTableHeaderProps = {
    openFilterDialog: () => void;
};

export type Page = {
    isPage: boolean;
    page: number;
    content: string;
};

export type PaginationProps = {
    limit: number;
    total: number;
    pageLength: number;
    currentPage: number;
    canNext: boolean;
    canPrev: boolean;
    nextPage: () => void;
    prevPage: () => void;
    selectPage: (page: number) => void;
};

export type PaginationButtonProps = {
    canPress: boolean;
    handleClick: () => void;
    icon: StaticImport;
};

export type PageProps = {
    content: string;
    isPage: boolean;
    page: number;
    selectPage: (page: number) => void;
    currentPage: number;
}

export type FetchErrorProps = {
    className?: string;
    title?: string;
    description?: string;
};

export type LoadingProps = {
    className?: string;
};