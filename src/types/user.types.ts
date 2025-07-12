


export type User = { 
    _id: string;
    organization: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    dateJoined: string;
    status: "ACTIVE" | "INACTIVE" | "PENDING" | "BLACKLISTED";
    balance: string;
    accountNumber: string;
    bank: string;
    userTier: number;
    details: UserDetail[];
};

export type UserFetchState = {
    loading: boolean;
    error: boolean;
    data: User[];
};

export type UserFetchResponse = User[];

type UserInformation = [
    title: string, 
    value: string
];

type UserDetail = [
    heading: string,
    informations: UserInformation[],
    gridColumns: string
];