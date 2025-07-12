

import { badgePercent1, bank, briefcase2, chartBar1, clipboardList1, coinsSolid1, galaxy1, handHolding1, handshakeRegular1, home1, piggyBank1, sack1, scroll1, slidersH1, transaction1, userCheck1, userCog1, userFriends1, users1, userTimes1 } from "@/assets/icons";

export const NAV_LINKS = [
    {
        title: null,
        subLinks: [
            {
                title: "Dashboard",
                href: "#",
                icon: home1
            }
        ]
    },
    {
        title: "Customers",
        subLinks: [
            {
                title: "Users",
                href: "#",
                icon: userFriends1
            },
            {
                title: "Gurantors",
                href: "#",
                icon: users1
            },
            {
                title: "Loans",
                href: "#",
                icon: sack1
            },
            {
                title: "Decision Models",
                href: "#",
                icon: handshakeRegular1
            },
            {
                title: "Savings",
                href: "#",
                icon: piggyBank1
            },
            {
                title: "Loan Requests",
                href: "#",
                icon: handHolding1
            },
            {
                title: "Whitelist",
                href: "#",
                icon: userCheck1
            },
            {
                title: "Karma",
                href: "#",
                icon: userTimes1
            },
        ]
    },
    {
        title: "Businesses",
        subLinks: [
            {
                title: "Organization",
                href: "#",
                icon: briefcase2
            },
            {
                title: "Loan Products",
                href: "#",
                icon: sack1
            },
            {
                title: "Savings Products",
                href: "#",
                icon: bank
            },
            {
                title: "Fees and Charges",
                href: "#",
                icon: coinsSolid1
            },
            {
                title: "Transactions",
                href: "#",
                icon: transaction1
            },
            {
                title: "Services",
                href: "#",
                icon: galaxy1
            },
            {
                title: "Service Account",
                href: "#",
                icon: userCog1
            },
            {
                title: "Settlements",
                href: "#",
                icon: scroll1
            },
            {
                title: "Reports",
                href: "#",
                icon: chartBar1
            },
        ]
    },
    
    {
        title: "Settings",
        subLinks: [
            {
                title: "Preferences",
                href: "#",
                icon: slidersH1
            },
            {
                title: "Fees and Pricing",
                href: "#",
                icon: badgePercent1
            },
            {
                title: "Audit Logs",
                href: "#",
                icon: clipboardList1
            },
        ]
    }
];