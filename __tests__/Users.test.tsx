import { render, screen, waitFor } from "@testing-library/react";

import Users from "@/app/users/page";

import { fetchUsers } from "@/helpers";
import { clearAllUsers, storeUsersArray } from "@/helpers/db";

import USERS from "./MOCK_USERS.json";
import PAGES from "./MOCK_PAGES.json";

import { User } from "@/types/user.types";

const delayFetchBy2Seconds = new Promise((resolve) => {
    setTimeout(() => resolve(USERS), 2000);
});

jest.mock('next/navigation', () => ({
    usePathname: jest.fn(() => "/users"),
    useRouter: () => ({
        push: jest.fn((path: string) => null)
    })
}));

jest.mock('../src/helpers/index.ts', () => ({
    fetchUsers: jest.fn(() =>  delayFetchBy2Seconds),
    changeDateFormat: jest.fn((date: string) => ''),
    removeMillisecondsFromTime: jest.fn((time: string) => ''), 
    generatePaginationPages: jest.fn((maxPageLength: number, currentPage: number) => PAGES),
}));

jest.mock('../src/helpers/db.ts', () => ({
    clearAllUsers: jest.fn((url: string) => Promise.resolve()),
    storeUsersArray: jest.fn((users: User[]) => Promise.resolve())
}));

const mockFetchUsers = fetchUsers as jest.Mock;
const mockStoreUsersArray = storeUsersArray as jest.Mock;
const mockClearAllUsers = clearAllUsers as jest.Mock;

describe("Users page", () => {
    
    beforeEach(() => {
        mockFetchUsers.mockClear();
        mockStoreUsersArray.mockClear();
        mockClearAllUsers.mockClear();
    });

    it("Should have loading element when page firsts load", async () => {

        render(<Users />);

        await waitFor(() => {
            expect(mockFetchUsers).toHaveBeenCalledTimes(1);
            expect(screen.queryByTestId('loading')).toBeInTheDocument();
            expect(screen.queryByTestId('fetch-error')).not.toBeInTheDocument();
            expect(screen.queryByTestId('list-of-users')).not.toBeInTheDocument();
            expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
        }, { timeout: 500 });
    });

    it("Should display filters and user options when users load", async () => {

        mockFetchUsers.mockResolvedValueOnce(USERS);

        render(<Users />);

        await waitFor(() => {
            expect(screen.queryByTestId('list-of-users')).toBeInTheDocument();
            expect(screen.queryByTestId('user-options')).toBeInTheDocument();
            expect(screen.queryByTestId('filters')).toBeInTheDocument();
            expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
            expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
            expect(screen.queryByTestId('fetch-error')).not.toBeInTheDocument();
            expect(mockClearAllUsers).toHaveBeenCalledTimes(1);
            expect(mockStoreUsersArray).toHaveBeenCalledTimes(1);
        }, { timeout: 500 });
    });

    it("Should display error message when there is an error when fetching", async () => {
        
        mockFetchUsers.mockRejectedValueOnce(new Error('An error occured'));

        render(<Users />);

        await waitFor(() => {
            expect(screen.queryByTestId('fetch-error')).toBeInTheDocument();
            expect(screen.queryByTestId('user-options')).not.toBeInTheDocument();
            expect(screen.queryByTestId('filters')).not.toBeInTheDocument();
            expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
            expect(screen.queryByTestId('list-of-users')).not.toBeInTheDocument();
            expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
            expect(mockClearAllUsers).toHaveBeenCalledTimes(0);
            expect(mockStoreUsersArray).toHaveBeenCalledTimes(0);
        }, { timeout: 500 });
    });
});