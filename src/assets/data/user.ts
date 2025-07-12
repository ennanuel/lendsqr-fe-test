import { userCheck2, userDelete, view1 } from "../icons";

export const USER_OPTIONS = [
    {
        title: "View Details",
        icon: view1
    },
    {
        title: "Blacklist User",
        icon: userDelete
    },
    {
        title: "Activate User",
        icon: userCheck2
    },
]

export const USER_NAV_LINKS = [
    {
        title: "General Details",
        href: "",
        isActive: true
    },
    {
        title: "Documents",
        href: "",
        isActive: false
    },
    {
        title: "Bank Details",
        href: "",
        isActive: false
    },
    {
        title: "Loans",
        href: "",
        isActive: false
    },
    {
        title: "Savings",
        href: "",
        isActive: false
    },
    {
        title: "App and System",
        href: "",
        isActive: false
    },
];

export const USER_TABLE_HEADERS = [
    "Organization",
    "Username",
    "Email",
    "Phone Number",
    "Date Joined",
    "Status"
];