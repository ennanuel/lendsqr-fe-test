import { render, waitFor } from "@testing-library/react";
import Home from "@/app/page";

jest.mock('next/navigation', () => ({
    redirect: jest.fn((path: string) => {
        return path;
    })
}));

import { redirect } from "next/navigation";
    
const mockRedirect = redirect;

it('Should redirect to sign-in page', async () => {

    render(<Home />);

    waitFor(() => {
        expect(mockRedirect).toHaveBeenCalledWith('/sign-in');
        expect(mockRedirect).toHaveBeenCalledTimes(1);
    }, { timeout: 1000 })
})