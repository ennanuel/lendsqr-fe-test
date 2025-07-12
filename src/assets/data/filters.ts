import { calendar, dropdown4 } from "../icons";


export const FILTERS = [
    {
        inputId: "organization",
        inputLabel: "Organization",
        placeholder: "Select",
        inputType: "text",
        includeButton: true,
        icon: dropdown4
    },
    {
        inputId: "username",
        inputLabel: "Username",
        placeholder: "User",
        inputType: "text",
        includeButton: false
    },
    {
        inputId: "email",
        inputLabel: "Email",
        placeholder: "Email",
        inputType: "email",
        includeButton: false
    },
    {
        inputId: "date",
        inputLabel: "Date",
        placeholder: "Date",
        inputType: "text",
        includeButton: true,
        icon: calendar
    },
    {
        inputId: "phone_number",
        inputLabel: "Phone Number",
        placeholder: "Phone Number",
        inputType: "tel",
        includeButton: false
    },
    {
        inputId: "status",
        inputLabel: "Status",
        placeholder: "Select",
        inputType: "text",
        includeButton: true,
        icon: dropdown4
    },
];