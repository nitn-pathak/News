import { render, screen, useRoutes } from "@testing-library/react";
import Signin from "../Components/Signin";
import userEvent from "@testing-library/user-event";

describe("Test the Login Component", () => {
  test("render the login form with 1 button", async () => {
    render(<Signin />);

    const buttonList = await screen.findAllByRole("button");

    console.log(buttonList);

    expect(buttonList).toHaveLength(1);
  });

  test("email input field should accept email", () => {
    render(<Signin />);

    const email = screen.getByTestId("email");

    userEvent.type(email, "dipesh");

    expect(email.value).not.toMatch("dispesh@gmmail.com");
  });

  test("Password input field should accept password", () => {
    render(<Signin />);

    const password = screen.getByTestId("password");

    expect(password).toHaveAttribute("type", "password");
  });
});
