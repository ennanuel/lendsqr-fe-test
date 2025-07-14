import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignIn from "@/app/sign-in/page";

const mockPush = jest.fn((path: string) => null);

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: mockPush
    })
}));

describe("Sign in page", () => {
    beforeEach(() => {
        mockPush.mockClear();
    })

    it("Should have username and password input working", async () => {
        render(<SignIn />);

        await userEvent.type(screen.getByPlaceholderText("Email"), 'John Doe');
        await userEvent.type(screen.getByPlaceholderText("Password"), 'john.doe@example.com');
        
        await waitFor(() => {
            expect(screen.getByPlaceholderText("Email")).toHaveValue('John Doe');
            expect(screen.getByPlaceholderText("Password")).toHaveValue('john.doe@example.com');
        }, { timeout: 1000 });
    });

    it("Should toggle password visibility when the button is clicked", async () => {
        render(<SignIn />);

        await userEvent.click(screen.getByRole('button', { name: /show/i }));
        await waitFor(() => {
            expect(screen.getByPlaceholderText("Password")).toHaveAttribute('type', 'text');
        }, { timeout: 100 });

        await userEvent.click(screen.getByRole('button', { name: /hide/i }));
        await waitFor(() => {
            expect(screen.getByPlaceholderText("Password")).toHaveAttribute('type', 'password');
        }, { timeout: 100 });
    });

    it("Should go to the dashboard when the form is submitted", async () => {
        render(<SignIn />);

        await userEvent.type(screen.getByPlaceholderText("Email"), 'John Doe');
        await userEvent.type(screen.getByPlaceholderText("Password"), 'john.doe@example.com');
        await userEvent.click(screen.getByRole('button', { name: "Log in" }));
        
        await waitFor(() => {

            expect(mockPush).toHaveBeenCalledTimes(1);
            expect(mockPush).toHaveBeenCalledWith('/dashboard');
            expect(screen.getByPlaceholderText("Email")).toHaveValue('John Doe');
            expect(screen.getByPlaceholderText("Password")).toHaveValue('john.doe@example.com');
        }, { timeout: 100 });
    });
});