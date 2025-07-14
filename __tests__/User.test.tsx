import { render, screen, waitFor } from "@testing-library/react";

import User from "@/app/user/[id]/page";

import { getSingleUser } from "@/helpers/db";

import USERS from "./MOCK_USERS.json";


const delayFetchBy2Seconds = new Promise((resolve) => {
    setTimeout(() => resolve(USERS[0]), 2000);
});

jest.mock('next/navigation', () => ({
    useParams: jest.fn(() => ({
        id: '124'
    }))
}));

jest.mock('../src/helpers/index.ts', () => ({
    changeDateFormat: jest.fn((date: string) => ''),
    removeMillisecondsFromTime: jest.fn((time: string) => ''), 
    generateUserTierStars: jest.fn((userTier: number) => ['', '', ''])
}));

jest.mock('../src/helpers/db.ts', () => ({
    getSingleUser: jest.fn((userId: string) => delayFetchBy2Seconds)
}));

const mockGetSingleUser = getSingleUser as jest.Mock;


describe("User details page", () => {
    
    beforeEach(() => {
        mockGetSingleUser.mockClear();
    });

    it("Should have loading element when page firsts load", async () => {

        render(<User />);

        await waitFor(() => {
            expect(mockGetSingleUser).toHaveBeenCalledTimes(1);
            expect(screen.queryByTestId('loading')).toBeInTheDocument();
            expect(screen.queryByTestId('fetch-error')).not.toBeInTheDocument();
            expect(screen.queryByTestId('user-details')).not.toBeInTheDocument();
            expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
        }, { timeout: 500 });
    });

    it("Should display user details when user details load", async () => {

        mockGetSingleUser.mockResolvedValueOnce(USERS[0]);

        render(<User />);

        await waitFor(() => {
            expect(screen.queryByTestId('user-details')).toBeInTheDocument();
            expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
            expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
            expect(screen.queryByTestId('fetch-error')).not.toBeInTheDocument();
            expect(mockGetSingleUser).toHaveBeenCalledTimes(1);
        }, { timeout: 500 });
    });

    it("Should display error message when there is an error when fetching", async () => {

        mockGetSingleUser.mockRejectedValueOnce(new Error('An error occured'));

        render(<User />);

        await waitFor(() => {
            expect(screen.queryByTestId('fetch-error')).toBeInTheDocument();
            expect(screen.queryByTestId('user-details')).not.toBeInTheDocument();
            expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
        }, { timeout: 500 });
    });
});