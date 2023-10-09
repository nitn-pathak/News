import { render, screen } from "@testing-library/react";
import Signup from "../Components/Signup";
import userEvent from "@testing-library/user-event";

describe("Test the Signup Component", () => {
  test("email input field should accept email", () => {
    render(<Signup />);

    const email = screen.getByTestId("email");

    userEvent.type(email, "dipesh");

    expect(email.value).not.toMatch("dispesh@gmmail.com");
  });

  test("Password input field should accept users", () => {
    render(<Signup />);

    const user = screen.getByTestId("text");

    expect(user).toHaveAttribute("type", "text");
  });

  test("Password input field should accept password", () => {
    render(<Signup />);

    const password = screen.getByTestId("password");

    expect(password).toHaveAttribute("type", "password");
  });
});
